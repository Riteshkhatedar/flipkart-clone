import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="bg-slate-100">
    <div className="">
        <Header></Header>
      </div>
      <div className="  pt-24">
        <CategoryList></CategoryList>
        <div className="flex items-center justify-center md:mx-40 mt-5">
          <img className="w-[100%]" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20" alt="" />
        </div>
      </div>
      <div className="my-5 sm:px-40 bottom-0 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
      {" "}
    </>
  );
}
export default App;
