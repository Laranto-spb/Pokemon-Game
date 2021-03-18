import s from './style.module.css';
import cn from 'classnames';

const MENU = [
  {
    title: "HOME",
    to: "#Home"
  },
  {
    title: "GAME",
    to: "#Game"
  },
  {
    title: "ABOUT",
    to: "#About"
  },
  {
    title: "CONTACT",
    to: "#Contact"
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
                  <a href={to} onClick={handlerClicker}>{title} </a>
                </li>
            ))
          }
        </ul>
      </div>
    </div>
  )

}

export default Menu;