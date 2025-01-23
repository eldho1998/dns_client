import "./menuItems.css";
import { useState, useEffect } from "react";
import axios from "axios";

const MenuItems = () => {
  const [menu, setMenu] = useState([]);

  const fetchMenuLists = async () => {
    const response = await axios.get(`http://localhost:7070/menu`);
    setMenu(response.data.menu);
  };

  useEffect(() => {
    fetchMenuLists();
  }, []);
  console.log("mennnn", menu);

  return (
    <div className="menuItems-main">
      <div className="menuContents">
        {menu.map((item) => {
          return (
            <div className="rectangle">
              <p key={item._id}>{item.menuName}</p>;
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MenuItems;
