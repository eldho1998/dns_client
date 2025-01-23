import './itemList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [Items, setItems] = useState([]);

  const fetchItemLists = async () => {
    const response = await axios.get(`http://localhost:7070/item`);
    setItems(response.data);
  };

  useEffect(() => {
    fetchItemLists();
  }, []);
  console.log('mennnn', Items);

  return (
    <div className="itemList-main">
      <div className="frames">
        <div className="sideFrame">
          <div className="glass1"></div>
          <div className="border"></div>
        </div>
        <div className="center-contents">
          <div className="glass2"></div>
          {Items.map(item => {
            return (
              <div key={item._id} className="lists">
                <div className="ItemDescription">
                  <h2>----- BRUNCH COCKTAILS -----</h2>
                </div>
                <div className="itemsLists">
                  <h3>CINNAMON TOAST CRUNCH............$16</h3>
                  <p>Descriptions</p>
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
