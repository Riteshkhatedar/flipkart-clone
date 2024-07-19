import productsList from "../assets/products.json";
import Products from "../components/Products"

const Filters = () => {
  
  
  return (
    <>
      <div className="grid grid-cols-6 gap-5 bg-slate-100 ">
        <div className="col-span-1 hidden lg:flex shadow-lg bg-white p-5">
          <ul>
            <li><select className="outline-none" name="" id="">
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              </select></li>
            <li><select className="outline-none" name="" id="">
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              </select></li>
            <li><select className="outline-none" name="" id="">
            <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              </select></li>
            <li><select className="outline-none" name="" id="">
            <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              </select></li>
            <li><select className="outline-none" name="" id="">
            <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
              </select></li>
           
          </ul>
        </div>
        <div className="col-span-6 lg:col-span-5">
          <div className="text-slate-400 bg-white shadow-md p-5 text-[13px]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum tempora ipsam saepe dolore? Totam laboriosam qui, ea quasi deleniti doloribus. Blanditiis ratione ex quae laboriosam maxime hic assumenda! Amet perferendis, aliquam, aperiam dolorem iure dignissimos, autem vel perspiciatis dolor beatae voluptas minima temporibus minus aut soluta quod quia cupiditate id sint itaque? Facere cumque repudiandae assumenda deleniti ullam, eligendi inventore ex, asperiores eaque beatae dignissimos voluptatibus similique enim quod, voluptatem magnam eius tempora ipsum. Corporis, qui. Quidem quos blanditiis ducimus reiciendis optio, cupiditate perspiciatis molestiae cum autem neque rem vel tempora accusamus repellendus iste, mollitia at enim ipsum a nam nesciunt minima est odit! Quisquam nobis porro expedita. Aperiam numquam, voluptates expedita odit beatae enim, similique quod voluptate voluptatum iure laborum modi totam saepe ad eligendi earum rem reiciendis ab, obcaecati quisquam rerum eos delectus esse maiores? Et eos iure, beatae rem distinctio maxime delectus ipsa omnis expedita commodi voluptas quo nemo minus ullam voluptates quasi velit sed accusamus explicabo, officiis illum reprehenderit a neque totam. Delectus nulla sit in fugiat adipisci dignissimos dolorem facere vero excepturi ex voluptas aliquam quidem esse ipsum, cumque repellat dolore fugit repudiandae nemo, doloremque consequuntur deserunt. Delectus voluptatem praesentium voluptatibus laboriosam saepe culpa.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 border-none gap-0">
            {productsList.map((item) => 
              {
                return <Products key={item.id} {...item}></Products>
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
