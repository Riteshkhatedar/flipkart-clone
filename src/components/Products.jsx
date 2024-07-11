import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
import { NavLink } from "react-router-dom";
const Products = (item) => {
  const dispatch = useDispatch();
  return (
    <>
      <NavLink to="/product">
        <div
          className="bg-white text-center border border-slate-200 p-10 "
          key={item.id}
        >
          <div className="image">
            <img className="w-[100%]" src={item.image} alt="" />
          </div>
          <h1>{item.name}</h1>
          <button
            className="bg-slate-500 rounded-md px-2 py-1 text-white"
            onClick={() => dispatch(add(item))}
          >
            Add To Cart
          </button>
        </div>
      </NavLink>
    </>
  );
};

export default Products;
