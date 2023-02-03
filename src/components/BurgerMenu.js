import React, { useState } from 'react';
import '../assets/styles/burger_menu.scss';

const BurgerMenu = () => {
  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
  const [menuClass, setMenuClass] = useState('menu hidden');
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setOpen(!isOpen);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <nav id="burger-nav">
        <div className="burger-menu" role="presentation" onClick={handleClick}>
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
      </nav>

      <div className={menuClass}>Hey </div>
    </div>
  );
};

export default BurgerMenu;
