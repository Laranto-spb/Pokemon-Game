import s from './style.module.css';
import cn from 'classnames';


const NavBar = () => {


return (
  <nav className={s.root}>
  <div className={s.navWrapper}>
    <p className={s.brand}>
      LOGO
    </p>
    <button href="#" className={cn(s.menuButton, s.active)}> 
      <span />
    </button>
  </div>
</nav>
)

}

export default NavBar;