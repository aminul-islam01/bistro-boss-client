import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle subHeading="What Our Client Say" heading="Testimonials">
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>
                        <div className="m-14">
                            <Rating
                                style={{ maxWidth: 200 }}
                                readOnly
                                value={review.rating}
                                className="mx-auto"
                            />
                            <p>{review.details}</p>
                            <h3 className="text-3xl text-yellow-700 text-center mt-5 font-semibold">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;