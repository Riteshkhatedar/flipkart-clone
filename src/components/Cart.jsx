import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  console.log(products);
  return <>{products.map((item)=>
  <div key={item.id}>
    {item.totalPrice}
  </div>
  )}</>;
};

export default Cart;
