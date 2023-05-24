import SectionTitle from "../../../Components/SectionTitle";
import MenuItems from "../../Shared/MenuItem/MenuItems";
import useMenu from "../../../UseMenu/UseMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading="Popular items"
            heading="From Our Menu">
            </SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
                {
                    popular.map(item => <MenuItems
                    key={item._id}
                    item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;