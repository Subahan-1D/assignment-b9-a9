import Deals from "./Deals";
import Slider from "./Slider";

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <h2 className="text-4xl font-playfair-display text-center underline mt-2 mb-2 font-poppins"> See All Deals</h2>
            <Deals></Deals>
        </div>
    );
};

export default Home;