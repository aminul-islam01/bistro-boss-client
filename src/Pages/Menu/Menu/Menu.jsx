import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBg from '../../../assets/menu/banner3.jpg';
import dessertBg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaBg from '../../../assets/menu/pizza-bg.jpg';
import saladBg from '../../../assets/menu/salad-bg.jpg';
import soupBg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/UseMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../Components/SectionTitle';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <Cover img={menuBg} coverTitle="Our Menu"></Cover>

            {/* offered categories menu */}
            <div className='mt-20 mb-10'>
                <SectionTitle subHeading="don't miss" heading="Today's Offers"></SectionTitle>
                <MenuCategory items={offered} category="drinks"></MenuCategory>
            </div>

            {/* dessert categories */}
            <div className='mb-10'>
                <Cover img={dessertBg} coverTitle="Desserts"></Cover>
                <MenuCategory items={dessert} category="desserts"></MenuCategory>
            </div>

            {/* pizza categories */}
            <div className='mb-10'>
                <Cover img={pizzaBg} coverTitle="Pizza"></Cover>
                <MenuCategory items={pizza} category="pizza"></MenuCategory>
            </div>

            {/* salad categories */}
            <div className='mb-10'>
                <Cover img={saladBg} coverTitle="Salad"></Cover>
                <MenuCategory items={salad} category="salad"></MenuCategory>
            </div>

            {/* soup categories */}
            <div className='mb-10'>
                <Cover img={soupBg} coverTitle="Soups"></Cover>
                <MenuCategory items={soup} category="soup"></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;