import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
    return (
       <>
           <div className=" max-w-screen-xl mx-auto px-6">
                <Header></Header>
           </div>
             <div className=" max-w-screen-xl mx-auto px-6 m-10">
                <Outlet />
             </div>
          <Footer></Footer>
       </>
    );
};

export default Root;