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
			description: 'S D E',
			shipping: {
				name: 'delta mike',
				address: {
					line1: '510 townend st',
					postal_code: '98140',
					city: 'San Francisco',
					state: 'CA',
					country: 'US',
				},
			},
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

////
// require('dotenv').config();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// exports.handler = async event => {
// 	try {
// 		const { amount } = JSON.parse(event.body);
// 		const paymentIntent = await stripe.paymentIntents.create({
// 			description: 'Software development services',
// 			shipping: {
// 				name: 'Jenny Rosen',
// 				address: {
// 					line1: '510 Townsend St',
// 					postal_code: '98140',
// 					city: 'San Francisco',
// 					state: 'CA',
// 					country: 'US',
// 				},
// 			},
// 			amount,
// 			currency: 'usd',
// 			payment_method_types: ['card'],
// 		});
// 		return {
// 			statusCode: 200,
// 			body: JSON.stringify({ paymentIntent }),
// 		};
// 	} catch (error) {
// 		console.log({ error });

// 		return {
// 			statusCode: 400,
// 			body: JSON.stringify({ error }),
// 		};
// 	}
// };
