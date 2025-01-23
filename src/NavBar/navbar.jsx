import "./navbar.css";
import { ConfigProvider, Flex, Popover } from "antd";

const NavBar = () => {
  return (
    <div className="navbar-main">
      <ConfigProvider>
        <div className="logos">
          <div className="nav-logo">
            <img src="Logo.png" />
          </div>
          <div className="nav-logo2"></div>
        </div>

        <div className="nav-contents">
          <Flex
            justify="center"
            align="center"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            <p>HOME</p>
            <Popover placement="bottomLeft">
              <p>MENU</p>
            </Popover>
            <p>MAKE A RESERVETION</p>
            <p>CONTACT US</p>
          </Flex>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default NavBar;
