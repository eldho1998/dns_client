import './menuItems.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// const serverUrl = process.env.REACT_APP_SERVER_URL;

const MenuItems = () => {
  const [menu, setMenu] = useState([]);

  const fetchMenuLists = async () => {
    const response = await axios.get(`http://localhost:7070/menu`);
    // const response = await axios.get(`${serverUrl}/menu`);
    setMenu(response.data.menu);
  };

  useEffect(() => {
    fetchMenuLists();
  }, []);
  console.log('mennnn', menu);

  return (
    <div className="menuItems-main">
      <div className="menuContents">
        {menu.map(item => {
          return (
            <div className="rectangle" key={item._id}>
              <p>{item.menuName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MenuItems;
