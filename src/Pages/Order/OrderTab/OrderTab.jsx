import FoodCard from "../../../Components/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}>
                </FoodCard>)
            }
        </div>
    );
};

export default OrderTab;