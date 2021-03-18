import Menu from './Menu';
import NavBar from './NavBar';
import {useState} from 'react';

import './style.module.css';

const MenuHeader = ({bgActive}) => {

    const [isActive, setActive] = useState(null);

    const handlerClicker = (state) => {
        setActive(state);
    }

    return (
        <>
            <Menu changeActive={isActive}
                  onClickMenu={handlerClicker}
            />
            <NavBar
                onClickButton={handlerClicker}
                changeActive={isActive}
                bgActive={bgActive}
            />
        </>
    )
}


export default MenuHeader;