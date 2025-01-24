import "./home.css";
import NavBar from "../../NavBar/navbar";
import Content from "../ContentPage/content";
import MenuItems from "../MenuItems/menuItems";
import ItemList from "../ItemList/itemList";
import Cards from "../FooterCards/cards";
import Footer from "../Footer/footer";
import { useState, useEffect } from "react";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [id, setId] = useState("");
  const [refresh, setRefresh] = useState(false);

  const fetchMenuLists = async () => {
    try {
      const response = await axios.get(`${serverUrl}/menu`);
      setMenu(response.data.menu);
    } catch (e) {
      console.error("Error fetching menu:", e);
    }
  };

  useEffect(() => {
    fetchMenuLists();
  }, []);

  return (
    <div className="home-main">
      <NavBar fetchMenuLists={fetchMenuLists} setRefresh={setRefresh} />
      <Content />
      <MenuItems setId={setId} setRefresh={setRefresh} refresh={refresh} />
      <ItemList listId={id} />
      <Cards />
      <Footer />
    </div>
  );
};
export default Home;
