import Menu from './Menu';
import NavBar from './NavBar';
import { useState } from 'react';

import './style.module.css';

const MenuHeader = ({bgActive}) => {

  const [isActive, setActive] = useState(null);

  const hadlerClicker = (state) => {
    setActive(state);
  }

  return (
    <>
      <Menu changeActive={isActive} />
      <NavBar
        onClickButton={hadlerClicker}
        changeActive={isActive}
        bgActive={bgActive}
      />
    </>
  )
}


export default MenuHeader;