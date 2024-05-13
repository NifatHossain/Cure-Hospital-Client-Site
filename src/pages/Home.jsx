import { Helmet } from "react-helmet";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Cure Hospital- HomePage</title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;