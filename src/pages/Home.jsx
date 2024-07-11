import products from "../assets/products.json";

import Card from "../components/Card";
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-5">
        {products.map((item) => {
          return <Card key={item.id} {...item}></Card>;
        })}
      </div>
    </>
  );
};

export default Home;
