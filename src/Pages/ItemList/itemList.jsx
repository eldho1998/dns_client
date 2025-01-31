import "./itemList.css";
import { useState, useEffect } from "react";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

const ItemList = ({ listId }) => {
  const [Items, setItems] = useState([]);
  const fetchItemLists = async () => {
    const response = await axios.get(`${serverUrl}/menu/${listId}/items`);
    setItems(response.data.items);
  };

  useEffect(() => {
    fetchItemLists();
  }, [listId]);

  return (
    <div className="itemList-main">
      <div className="frames">
        <div className="sideFrame">
          <div className="glass1"></div>
          <div className="border"></div>
        </div>
        <div className="center-contents">
          <div className="glass2"></div>
          {Items.map((item) => {
            return (
              <div key={item._id} className="lists">
                <div className="ItemDescription">
                  {/* <h1>-----MENU -----</h1> */}
                </div>
                <div className="itemsLists">
                  <h3>
                    {item.itemName}............{item.price}
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="rightFrame"></div>
      </div>
    </div>
  );
};
export default ItemList;
