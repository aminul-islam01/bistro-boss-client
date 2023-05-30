import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import SectionTitle from '../../Components/SectionTitle';

const Location = () => {
    return (
        <div>
            <SectionTitle subHeading="Visit Us" heading="Our Location">
            </SectionTitle>
            <div className='grid gap-10 md:grid-cols-3'>
                <div className='border'>
                    <p className='bg-yellow-600 text-white text-2xl py-5'><FaPhoneAlt className='mx-auto'></FaPhoneAlt></p>
                    <div className='text-center pt-8 bg-gray-100 mx-5 mb-5 h-36'>
                        <h2 className='font-bold text-xl'>PHONE</h2>
                        <p>+88 0123456789</p>
                    </div>
                </div>
                <div className='border'>
                    <p className='bg-yellow-600 text-white text-2xl py-5'><FaMapMarkerAlt className='mx-auto'></FaMapMarkerAlt></p>
                    <div className='text-center pt-8 bg-gray-100 mx-5 mb-5 h-36'>
                        <h2 className='font-bold text-xl'>ADDRESS</h2>
                        <p>Uttara, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='border'>
                    <p className='bg-yellow-600 text-white text-2xl py-5'><FaClock className='mx-auto'></FaClock></p>
                    <div className='text-center pt-8 bg-gray-100 mx-5 mb-5 h-36'>
                        <h2 className='font-bold text-xl'>WORKING HOURS</h2>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat- Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;