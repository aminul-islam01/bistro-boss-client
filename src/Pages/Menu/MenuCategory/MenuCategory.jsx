import { Link } from "react-router-dom";
import MenuItems from "../../Shared/MenuItem/MenuItems";


const MenuCategory = ({ items, category }) => {
    return (
        <div>
            <div className="grid gap-6 md:grid-cols-2">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}></MenuItems>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${category}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-5">Order Your Favourite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;