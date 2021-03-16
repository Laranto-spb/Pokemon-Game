import s from './style.module.css';
import cn from 'classnames';
import { useState } from 'react';


const NavBar = () => {

const [isActive, setActive] = useState(false);

const handleClick = () => {
  setActive(!isActive);
}

return (
  <nav className={s.root}>
  <div className={s.navWrapper}>
    <p className={s.brand}>
      LOGO
    </p>
    <a href="#" className={cn(s.menuButton, {[s.active]: isActive})} onClick={handleClick}> 
      <span />
    </a>
  </div>
</nav>
)

}

export default NavBar;