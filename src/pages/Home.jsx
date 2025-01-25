import News from "../components/News";
import RecentQueries from "../components/RecentQueries";
import Slider from "../components/Slider";
import Stats from "../components/stats";



const Home = () => {
    return (
        <div className="">
            <Slider />
            <RecentQueries />
            <Stats/>
            <News/>
        </div>
    );
};

export default Home;