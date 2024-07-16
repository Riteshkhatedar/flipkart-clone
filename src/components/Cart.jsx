import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [todos, setTodos] = useState([{
    name:"asf"
  }]);
  const products = useSelector((state) => state.cart);
  console.log(products);


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {products.map((item) => (
        <div key={item.id}>{item.totalPrice}</div>
      ))}
    </>
  );
};

export default Cart;
