import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-slate-100">
        
        <Header></Header>

        {/* Middle area start from here */}
        <div className="pt-24 md:mx-20 lg:mx-40">
          <CategoryList></CategoryList>
          <div className="flex items-center justify-center mt-5">
            <img
              className="w-[100%]"
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20"
              alt=""
            />
          </div>
          <div className="my-5 bottom-0">
            <Outlet></Outlet>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
