import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
          {/* <p className="text-3xl text-red-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum, distinctio dicta obcaecati officia deserunt libero voluptates praesentium voluptatibus amet, quas officiis natus nulla ut autem ratione eum rerum adipisci.</p> */}
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;