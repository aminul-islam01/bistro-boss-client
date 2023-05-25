

const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <p className="bg-black text-white py-3 px-5 font-semibold absolute top-5 right-5">${price}</p>
            <div className="card-body">
                <h2 className=" text-3xl font-bold text-center">{name}</h2>
                <p className="text-left">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;