import { useState } from "react";
import productsList from "../assets/products.json";
import Products from "../components/Products"
const Filters = () => {
  const [range, setRange] = useState(0);
  
  return (
    <>
      <div className="grid grid-cols-6 gap-5 bg-slate-100 ">
        <div className="col-span-1 shadow-lg bg-white p-5">
          <h1 className="font-medium text-xl">Filters</h1>
          <div className="">
            <h3 className="text-sm font-medium">CATEGORIES</h3>
            <p className="text-sm font-light text-slate-500">Computers</p>
            <p className="text-sm font-light text-slate-500">Software</p>
          </div>
          <div className="">
            <h3>PRICE</h3>
            <input
              value={range}
              onChange={() => setRange()}
              max={100}
              className=" w-[200px] bg-blue-700"
              type="range"
            />
            <div className="flex items-center justify-between">
              <span>1</span>
              <span>100</span>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="grid grid-cols-5 gap-5">
            {productsList.map((item) => 
              {
                return <Products key={item.id} {...item}></Products>
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
