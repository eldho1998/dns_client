import "./menuItems.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const MenuItems = ({ setId, setRefresh, refresh }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);

  const fetchMenuLists = async () => {
    try {
      const response = await axios.get(`${serverUrl}/menu`);
      setMenu(response.data.menu);
      setRefresh(false);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const onMenuClick = (menuId) => {
    setId(menuId);

    navigate(`/`);
  };

  useEffect(() => {
    fetchMenuLists();
  }, [refresh]);

  return (
    <div className="menuItems-main">
      <div className="menuContents">
        {menu?.map((item) => (
          <div
            onClick={() => onMenuClick(item._id)}
            className="rectangle"
            key={item._id}
          >
            <p>{item.menuName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
