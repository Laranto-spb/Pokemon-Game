import Menu from './Menu';
import NavBar from './NavBar';
import { useState } from 'react';

import './style.module.css';

const MenuHeader = () => {

  const [isActive, setActive] = useState(false);

    const hadlerClicker = (state) => {
    setActive(state);
  }

    return (
    <>
    <Menu changeActive={isActive}/>
    <NavBar 
        onClickButton={hadlerClicker}
        changeActive={isActive}
    />
    </>
  )
}


export default MenuHeader;