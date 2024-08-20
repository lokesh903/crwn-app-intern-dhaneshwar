import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BigHeading from '../headings/BigHeading';
// import { RootState } from '../../utils/types/types';
import { asyncClearCart } from '../../utils/store/actions/cartAction';
import { StripeCardElement } from '@stripe/stripe-js';
import {
	// PaymentElement,
	useStripe,
	useElements,
	CardElement,
} from '@stripe/react-stripe-js';
import {
	cardElementStyles,
	cancelBtnStl,
	formStl,
	loadingBtnStl,
} from './checkout.styles';

const ifValidCardElement = (
	card: StripeCardElement | null
): card is StripeCardElement => card !== null;

interface CheckOutPropValue {
	cartItemsTotal: number;
	handleClick: () => void;
}
const CheckoutPaymentForm: React.FC<CheckOutPropValue> = ({
	handleClick,
	cartItemsTotal,
}) => {
	const dispatch = useDispatch();
	const stripe = useStripe();
	const elements = useElements();
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	// const { user } = useSelector((state: RootState) => state.user);
	// console.log(user);
	// console.log(user.displayName);

	const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		setIsProcessingPayment(true);
		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			body: JSON.stringify({ amount: cartItemsTotal * 100 }),
		}).then(res => res.json());
		// console.log(response);
		const {
			paymentIntent: { client_secret },
		} = response;

		const cardDetails = elements.getElement(CardElement);

		if (!ifValidCardElement(cardDetails)) return;
		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: cardDetails,
				billing_details: {
					name: 'Guest',
				},
			},
		});
		// console.log(paymentResult);
		setIsProcessingPayment(false);
		if (paymentResult.error) {
			console.error(paymentResult.error.message);
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful');
				handleClick();
				dispatch(asyncClearCart());
			}
		}
	};
	// const handleCheck = async () => {
	// 	const res = await fetch('/.netlify/functions/testing').then(res =>
	// 		res.json()
	// 	);
	// };
	return (
		<form onSubmit={paymentHandler}>
			<Box sx={{ ...formStl }}>
				<BigHeading>Payment Details</BigHeading>
				{/* <PaymentElement id="payment-element" /> */}
				<CardElement options={{ style: cardElementStyles }} />
				<LoadingButton
					type="submit"
					loading={isProcessingPayment}
					loadingIndicator="Loading…"
					variant="outlined"
					sx={{ ...loadingBtnStl, alignSelf: 'center' }}
				>
					Pay
				</LoadingButton>
				<Button
					onClick={handleClick}
					sx={{ ...cancelBtnStl, alignSelf: 'center' }}
				>
					Close
				</Button>
			</Box>
		</form>
	);
};

export default CheckoutPaymentForm;
