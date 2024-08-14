import dotenv from 'dotenv';
import Stripe from 'stripe';
dotenv.config();

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const handler = async event => {
	try {
		const { amount } = await JSON.parse(event.body);
		console.log(amount);

	 const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: 'usd',
			payment_method_types: ['card'],
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ paymentIntent }),
		};
	} catch (error) {
		console.log({ error });
		return {
			statusCode: 400,
			body: JSON.stringify({ error }),
		};
	}
};