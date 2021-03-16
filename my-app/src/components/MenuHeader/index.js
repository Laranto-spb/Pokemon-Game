import Menu from './Menu';
import NavBar from './NavBar';

import './style.module.css';

const MenuHeader = () => {
  return (
    <>
    <Menu activeClass="deactive"/>
    <NavBar/>
    </>
  )
}


export default MenuHeader;