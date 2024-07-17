import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
const Product = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-2 shadow-md">
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673041/Croma%20Assets/Communication/Mobiles/Images/300775_0_cqcwqz.png?tr=w-600"
            alt=""
          />
          <button className="bg-slate-500 rounded-md px-2 py-1 text-white" onClick={() => dispatch(add())} >Add</button>
        </div>
        <div className="col-span-6">
          
        </div>
      </div>
    </>
  );
};

export default Product;
