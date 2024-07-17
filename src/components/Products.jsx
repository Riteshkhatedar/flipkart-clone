import { NavLink } from "react-router-dom";
const Products = (item) => {
  return (
    <NavLink to="/product">
      <div
        className="bg-white text-center border border-slate-200 p-10 "
        key={item.id}
      >
        <div className="image">
          <img className="w-[100%]" src={item.image} alt="" />
        </div>
        <h1>{item.name}</h1>
      </div>
    </NavLink>
  );
};

export default Products;
