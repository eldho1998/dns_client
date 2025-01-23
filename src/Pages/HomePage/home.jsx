import "./home.css";
import NavBar from "../../NavBar/navbar";
import Content from "../ContentPage/content";
import MenuItems from "../MenuItems/menuItems";

const Home = () => {
  return (
    <div className="home-main">
      <NavBar />
      <Content />
      <MenuItems />
    </div>
  );
};
export default Home;
