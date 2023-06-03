import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/UseCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const amount = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(amount.toFixed(2));
    return (
        <div>
            <h2>payment page</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;