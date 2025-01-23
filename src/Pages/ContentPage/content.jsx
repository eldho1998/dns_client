import "./content.css";

const Content = () => {
  return (
    <div className="content-main">
      <div className="logo">
        <img src="SOFT.png" />
      </div>
      <div className="content-name">
        <img src="menu.png" />
      </div>
      <div className="content-description">
        <p>
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to
          <br />
          <span className="next-line">
            place an order, use the "Order Online" button located below the
            menu.
          </span>
        </p>
      </div>
    </div>
  );
};
export default Content;
