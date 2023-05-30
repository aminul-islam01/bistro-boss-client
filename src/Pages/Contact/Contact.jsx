import Cover from '../Shared/Cover/Cover';
import image from '../../assets/contact/banner.jpg'
import Location from './Location';


const Contact = () => {
    return (
        <div>
            <Cover
                img={image}
                coverTitle="Contact Us"></Cover>
                <Location></Location>
        </div>
    );
};

export default Contact;