import "./menuItems.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// const serverUrl = process.env.REACT_APP_SERVER_URL;

const MenuItems = ({ setId }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("menu id:", id);

  const [menu, setMenu] = useState([]);

  const fetchMenuLists = async () => {
    const response = await axios.get(`http://localhost:7070/menu`);
    // const response = await axios.get(`${serverUrl}/menu`);
    setMenu(response.data.menu);
  };

  const onMenuClick = (menuId) => {
    setId(menuId);
    navigate(`/`);
  };

  useEffect(() => {
    fetchMenuLists();
  }, []);
  console.log("mennnn", menu);

  return (
    <div className="menuItems-main">
      <div className="menuContents">
        {menu?.map((item) => {
          return (
            <div
              onClick={() => onMenuClick(item._id)}
              className="rectangle"
              key={item._id}
            >
              <p>{item.menuName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MenuItems;
