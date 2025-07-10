import React, { useRef, useState } from 'react';
import './Navbar.css';

//icons
import bow from '../../images/bow.png';
// hamburger-icons
import menu_icon from '../../images/menu.png';
import menuClose_icon from '../../images/menuClose.png';

const Navbar: React.FC = () => {
  //useStates
  const [menu, setMenu] = useState<string>('home');
  const menuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = '0';
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = '-350px';
    }
  };

  return (
    <div className='navbarContainer'>
      <div className='navbar'>
      <p className='logo'>Arshdeep Singh</p>
      <img onClick={openMenu} className='nav-mob-open' src={menu_icon} alt='' />
      <ul ref={menuRef} className='nav-menu'>
        <img onClick={closeMenu} className='nav-mob-close' src={menuClose_icon} alt='' />
        <li>
          <p onClick={() => setMenu('home')}>Home</p>
          {menu === 'home' ? <img src={bow} alt='' /> : null}
        </li>
        <li>
          <p onClick={() => setMenu('about')}>about</p>
          {menu === 'about' ? <img src={bow} alt='' /> : null}
        </li>
        <li>
          <p onClick={() => setMenu('projects')}>Projects</p>
          {menu === 'projects' ? <img src={bow} alt='' /> : null}
        </li>
        <li>
          <p onClick={() => setMenu('contact')}>Contact</p>
          {menu === 'contact' ? <img src={bow} alt='' /> : null}
        </li>
      </ul>
      <div className='nav-connect'><a href="https://x.com/arshdeepsi74397?s=21">Connect with Me</a></div>
    </div>
    </div>
  );
};

export default Navbar;
