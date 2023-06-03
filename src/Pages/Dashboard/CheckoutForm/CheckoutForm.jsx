import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import UseAxios from "../../../hooks/UseAxios";
import UseAuth from "../../../hooks/UseAuth";


const CheckoutForm = ( {price} ) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = UseAuth();
    const [axiosSecure] = UseAxios()
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        if(price > 0) {
            axiosSecure.post('/create-payment-intent', {price})
            .then(res => {
                setClientSecret(res.data.clientSecret);
            });
        }
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError("");
        }
        setProcessing(true)

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email: user?.email || 'unknown',
                },
              },
            },
          );
          if(confirmError) {
            console.log(confirmError)
          }
          console.log(paymentIntent);
          setProcessing(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
        </>
    );
};

export default CheckoutForm
