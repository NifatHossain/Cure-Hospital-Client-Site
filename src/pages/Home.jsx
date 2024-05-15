import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import AllTreatmentCards from "../components/AllTreatmentCards";
import Gallary from "../components/Gallary";


const Home = () => {
    return (
        <div className="mb-6">
            <Helmet>
                <title>Cure Hospital- HomePage</title>
            </Helmet>
            <Slider></Slider>
            <div className="max-w-7xl mx-auto">
                <AllTreatmentCards></AllTreatmentCards>
                <Gallary></Gallary>
             </div>

        </div>
    );
};

export default Home;