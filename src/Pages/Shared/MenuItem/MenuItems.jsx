
const MenuItems = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="flex gap-5">
            <img className="w-28 h-24 rounded-bl-full rounded-e-full" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItems;