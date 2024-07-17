import products from "../assets/products.json";

import Card from "../components/Card";
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {products.map((item) => {
          return <Card key={item.id} {...item}></Card>;
        })}
      </div>
    </>
  );
};

export default Home;
