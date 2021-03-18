import s from './style.module.css';
import cn from 'classnames';
import { Link } from "react-router-dom";

const MENU = [
  {
    title: "HOME",
    to: "/"
  },
  {
    title: "GAME",
    to: "/game"
  },
  {
    title: "ABOUT",
    to: "/about"
  },
  {
    title: "CONTACT",
    to: "/contact"
  }
]

const Menu = ({ changeActive, onClickMenu }) => {

  const handlerClicker = () => {
    onClickMenu && onClickMenu(false);
  }

  return (
    <div className={cn(s.menuContainer, { [s.active]: changeActive, [s.deactive]: !changeActive})}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {
            MENU.map(({title, to}, index) => (
                <li key={index}>
                  <Link to={to} onClick={handlerClicker}>{title} </Link>
                </li>
            ))
          }
        </ul>
      </div>
    </div>
  )

}

export default Menu;