import React, { FormEvent, useState } from 'react';
import {
	// PaymentElement,
	// Elements,
	useStripe,
	useElements,
	CardElement,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/types/types';
import { StripeCardElement } from '@stripe/stripe-js';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/material';
import { asyncClearCart } from '../../utils/store/actions/cartAction';
const ifValidCardElement = (
	card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const cardElementStyles = {
	base: {
		color: 'black',
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: '16px',
		'::placeholder': {
			color: '#888',
		},
		backgroundColor: 'white',
	},
	invalid: {
		color: '#dc3545',
	},
};
interface CheckOutPropValue {
	setCheckoutForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const CheckoutForm: React.FC<CheckOutPropValue> = ({ setCheckoutForm }) => {
	const dispatch = useDispatch();
	const stripe = useStripe();
	const elements = useElements();
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	// const { user } = useSelector((state: RootState) => state.user);
	// console.log(user);
	// console.log(user.displayName);
	const { cartItemsTotal } = useSelector((state: RootState) => state.cart);
	// console.log(cartItemsTotal);

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
			console.error(paymentResult.error);
			alert(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful');
				setCheckoutForm(prev => !prev);
				dispatch(asyncClearCart());
			}
		}
	};
	// const handleCheck = async () => {
	// 	const res = await fetch('/.netlify/functions/testing').then(res =>
	// 		res.json()
	// 	);
	// 	console.log(res);
	// };

	return (
		<>
			<form onSubmit={paymentHandler}>
				<Box
					sx={{
						px: 3,
						py: 3,
						bgcolor: 'background.paper',
						textAlign: 'center',
					}}
				>
					<CardElement options={{ style: cardElementStyles }} />
					<LoadingButton
						type="submit"
						loading={isProcessingPayment}
						loadingIndicator="Loading…"
						variant="outlined"
						sx={{
							bgcolor: 'background.default',
							color: 'primary',
							px: 5,
							mt: 2,
							mb: 1,
							'&:hover': {
								color: 'background.default',
								bgcolor: 'green',
								borderRadius: 2,
								textAlign: 'end',
							},
						}}
					>
						Pay
					</LoadingButton>
				</Box>
				{/* <PaymentElement /> */}
			</form>
			{/* <button onClick={handleCheck}>CheckFun</button> */}
		</>
	);
};

export default CheckoutForm;
