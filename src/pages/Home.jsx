import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import AllTreatmentCards from "../components/AllTreatmentCards";


const Home = () => {
    return (
        <div className="mb-6">
            <Helmet>
                <title>Cure Hospital- HomePage</title>
            </Helmet>
            <Slider></Slider>
            <div className="max-w-7xl mx-auto">
                <AllTreatmentCards></AllTreatmentCards>
             </div>

        </div>
    );
};

export default Home;