import SectionTitle from "../../../Components/SectionTitle";
import featuredImage from '../../../../src/assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item py-10 my-20 bg-fixed">
            <SectionTitle subHeading="Check it out" heading="Featured item">
            </SectionTitle>
            <div className="md:flex gap-10 items-center px-28 py-10 text-white">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div>
                    <p>May 23, 2023</p>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quo temporibus, quas doloribus itaque fugiat optio impedit, similique ipsa obcaecati iusto aliquid eos sequi voluptates modi tempora reprehenderit laudantium aspernatur corporis dicta error, suscipit voluptatem sapiente! Cumque explicabo qui, minus consequatur amet quia modi deleniti natus, numquam et placeat soluta!</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white mt-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;