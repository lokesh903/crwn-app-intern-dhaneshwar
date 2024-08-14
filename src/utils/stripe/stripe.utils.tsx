import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
	import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY
);


// export const clientSecret = loadStripe(
// 	import.meta.env.VITE_APP_STRIPE_SECRET_KEY
// );
