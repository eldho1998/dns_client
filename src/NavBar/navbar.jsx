import './navbar.css';
import axios from 'axios';
import { useState } from 'react';
import { ConfigProvider, Popover, Input, Button } from 'antd';
import { message } from 'antd';

const NavBar = ({ fetchMenuLists }) => {
  const [menuAdd, setMenuADD] = useState({
    menuName: '',
    description: '',
  });

  const onChange = (e, key) => {
    setMenuADD({ ...menuAdd, [key]: e.target.value });
  };

  const OnBtnClick = async () => {
    try {
      const response = await axios.post('http://localhost:7070/menu', menuAdd);
      console.log(response.data);
      message.success('Menu added successfully!');
      fetchMenuLists();
    } catch (e) {
      message.error('Failed to add menu. Please try again.');
      console.error('There was an error!', e);
    }
  };

  return (
    <div className="navbar-main">
      <ConfigProvider>
        <div className="logos">
          <div className="nav-logo"></div>
          <div className="nav-logo2"></div>
        </div>

        <div className="nav-contents">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              whiteSpace: 'nowrap',
            }}
          >
            <p>HOME</p>

            <Popover
              content={
                <div className="popup">
                  <Input
                    onChange={e => onChange(e, 'menuName')}
                    placeholder="enter a menu name"
                  />
                  <Input
                    onChange={e => onChange(e, 'description')}
                    placeholder="menu description"
                  />
                  <Button onClick={OnBtnClick} type="primary">
                    ADD
                  </Button>
                </div>
              }
              title="ADD MENU"
              trigger="hover"
              placement="bottomLeft"
            >
              <p style={{ cursor: 'pointer' }}>MENU</p>
            </Popover>

            <p>MAKE A RESERVATION</p>
            <p>CONTACT US</p>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default NavBar;
