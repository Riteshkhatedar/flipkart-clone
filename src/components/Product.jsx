import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
import { MdLocalOffer } from "react-icons/md";
const Product = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
        <div className="col-span-2 shadow-md p-5">
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673041/Croma%20Assets/Communication/Mobiles/Images/300775_0_cqcwqz.png?tr=w-600"
            alt=""
          />
          <div className="flex items-center justify-between">

          <button className="bg-yellow-500 rounded-sm px-2 py-2 font-bold m-1 text-white w-[100%] " onClick={() => dispatch(add())} >ADD TO CART</button>
          <button className="bg-orange-500 rounded-sm px-2 py-2 font-bold m-1 text-white w-[100%] " onClick={() => dispatch(add())} >BUY NOW</button>
          </div>
        </div>
        <div className="col-span-4">
          <div className="">
          <span className="text-xl">brother DCP-B7500D Multi-function Monochrome Laser Printer with Auto Duplex Feature  (Toner Cartridge)</span>
          <p>Special Offer</p>
          <h1 className="text-2xl font-medium">16,899</h1> <h1 className="text-decoration-line: line-through">18,000</h1>
         
          </div>
          <div className="">
         <span>Available offfers</span>
          <ul>
            <li className="flex items-center my-2"><span className="text-green-600 mx-1 font-bold"> <MdLocalOffer/></span> <span className="font-medium mx-1">  Bank offer   </span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iste, atque molestiae ad deserunt incidunt. lorem</p></li>
            <li className="flex items-center my-2"><span className="text-green-600 mx-1 font-bold"> <MdLocalOffer/></span> <span className="font-medium mx-1">  Bank offer   </span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iste, atque molestiae ad deserunt incidunt.</p></li>
            <li className="flex items-center my-2"><span className="text-green-600 mx-1 font-bold"> <MdLocalOffer/></span> <span className="font-medium mx-1">  Bank offer   </span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iste, atque molestiae ad deserunt incidunt.</p></li>
            <li className="flex items-center my-2"><span className="text-green-600 mx-1 font-bold"> <MdLocalOffer/></span> <span className="font-medium mx-1">  Special Price</span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iste, atque molestiae ad deserunt incidunt.</p></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
         </div>
         <div className="">
          <ul className="">
            <li className="flex my-4 text-gray-500"><span className="font-medium mr-3">Delivery</span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit illo molestiae unde accusamus laudantium cumque et itaque nemo consequuntur optio repellat aliquam ea veniam, reprehenderit ratione asperiores placeat harum similique quo distinctio aliquid molestias qui facilis! Sunt fuga id facere expedita esse, nostrum deleniti in, nam eligendi quos impedit quia.</p></li>
          
            <li className="flex my-4 text-gray-500"><span className="font-medium mr-3">Delivery</span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit illo molestiae unde accusamus laudantium cumque et itaque nemo consequuntur optio repellat aliquam ea veniam, reprehenderit ratione asperiores placeat harum similique quo distinctio aliquid molestias qui facilis! Sunt fuga id facere expedita esse, nostrum deleniti in, nam eligendi quos impedit quia.</p></li>
          
            <li className="flex my-4 text-gray-500"><span className="font-medium mr-3">Delivery</span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit illo molestiae unde accusamus laudantium cumque et itaque nemo consequuntur optio repellat aliquam ea veniam, reprehenderit ratione asperiores placeat harum similique quo distinctio aliquid molestias qui facilis! Sunt fuga id facere expedita esse, nostrum deleniti in, nam eligendi quos impedit quia.</p></li>
          
            <li className="flex my-4 text-gray-500"><span className="font-medium mr-3">Delivery</span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit illo molestiae unde accusamus laudantium cumque et itaque nemo consequuntur optio repellat aliquam ea veniam, reprehenderit ratione asperiores placeat harum similique quo distinctio aliquid molestias qui facilis! Sunt fuga id facere expedita esse, nostrum deleniti in, nam eligendi quos impedit quia.</p></li>
          
          </ul>
         </div>
        </div>
      </div>
    </>
  );
};

export default Product;
