import "./navbar.css";
import { Button, ConfigProvider, Flex, Popover } from "antd";

const NavBar = () => {
  return (
    <div className="navbar-main">
      <ConfigProvider
        button={{
          style: {
            width: buttonWidth,
            margin: 4,
          },
        }}
      >
        <div className="logos">
          <div className="nav-logo">
            <img src="Logo.png" />
          </div>
          <div className="nav-logo2"></div>
        </div>

        <div className="nav-contents">
          <p>HOME</p>
          <p>MENU</p>
          <p>MAKE A RESERVETION</p>
          <p>CONTACT US</p>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default NavBar;
