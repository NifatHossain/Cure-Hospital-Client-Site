import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import TreatmentCard from "../components/TreatmentCard";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Cure Hospital- HomePage</title>
            </Helmet>
            <Slider></Slider>
            <div className="max-w-7xl mx-auto">
                <TreatmentCard></TreatmentCard>

            </div>
        </div>
    );
};

export default Home;