import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItems from "../../Shared/MenuItem/MenuItems";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category ==='popular')
           setMenu(popularItems)
        })
    }, [])
    console.log(menu)
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading="Popular items"
            heading="From Our Menu">
            </SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
                {
                    menu.map(item => <MenuItems
                    key={item._id}
                    item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;