import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import UseAxios from "../../../hooks/UseAxios";
import UseAuth from "../../../hooks/UseAuth";
import Swal from "sweetalert2";
import './CheckoutForm.css'


const CheckoutForm = ( {cart, price} ) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = UseAuth();
    const [axiosSecure] = UseAxios()
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");

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
            setTransactionId("");
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

          if(paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email, 
                transactionId: paymentIntent.id,
                price,
                data: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => (item.foodId)),
                status: "service pending",
                itemsName: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                // console.log(res.data)
                if(res.data.insertResult.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Payment success full',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
          }
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
            {transactionId && <p className="text-green-600">Transaction complete with transaction Id {transactionId}</p>}
        </>
    );
};

export default CheckoutForm
