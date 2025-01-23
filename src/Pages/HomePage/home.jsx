import "./home.css";
import NavBar from "../../NavBar/navbar";
import Content from "../ContentPage/content";
import MenuItems from "../MenuItems/menuItems";
import ItemList from "../ItemList/itemList";
// import { useState, useEffect } from "react";
// import axios from "axios";

const Home = () => {
  // const [menu, setMenu] = useState([]);

  // const fetchMenuLists = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:7070/menu`);
  //     setMenu(response.data.menu);
  //   } catch (e) {
  //     console.error("Error fetching menu:", e);
  //   }
  // };

  // useEffect(() => {
  //   fetchMenuLists();
  // }, []);

  return (
    <div className="home-main">
      <NavBar />
      <Content />
      <MenuItems />
      <ItemList />
    </div>
  );
};
export default Home;
