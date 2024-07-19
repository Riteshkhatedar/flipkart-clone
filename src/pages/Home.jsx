import products from "../assets/products.json";

import Card from "../components/Card";
const Home = () => {
  return (
    <><div className="flex items-center justify-center mt-5">
    <img
      className="w-[100%]"
      src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20"
      alt=""
    />
  </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {products.map((item) => {
          return <Card key={item.id} {...item}></Card>;
        })}
      </div>
    </>
  );
};

export default Home;
