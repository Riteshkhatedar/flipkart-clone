import { NavLink } from "react-router-dom";
const Card = (item) => {
  return (
    <NavLink to={`/filters/${item.id}`}>
      <div className="bg-white text-center border border-slate-200 p-10 ">
        <div className="image">
          <img className="w-[100%]" src={item.image} alt="" />
        </div>
        <h1>Shop Now</h1>
      </div>
    </NavLink>
  );
};

export default Card;
