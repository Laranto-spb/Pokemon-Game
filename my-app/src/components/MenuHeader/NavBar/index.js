import s from './style.module.css';
import cn from 'classnames';


const NavBar = ({ onClickButton, changeActive }) => {

  const handlerClick = () => {
    
    !changeActive && onClickButton && onClickButton(true)
    changeActive && onClickButton && onClickButton(false)
  }

  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <button className={cn(s.menuButton, s.btn_reset, { [s.active]: changeActive })} onClick={handlerClick}>
          <span />
        </button>
      </div>
    </nav>
  )

}

export default NavBar;