import s from './style.module.css';
import cn from 'classnames';


const NavBar = ({ onClickButton, changeActive, bgActive}) => {
  console.log(bgActive)
  const handlerClick = () => {
    !changeActive && onClickButton && onClickButton(true)
    changeActive && onClickButton && onClickButton(false)
  }

  return (
    <nav className={cn(s.root, { [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <div className={cn(s.menuButton, { [s.active]: changeActive })} onClick={handlerClick}>
          <span />
        </div>
      </div>
    </nav>
  )

}

export default NavBar;