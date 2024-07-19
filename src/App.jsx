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
