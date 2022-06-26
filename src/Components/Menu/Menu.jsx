import React from 'react';
import "./Menus.scss"
const Menu = ({menuOpen, setMenuOpen}) => {
    const list = [
        {label:'Home', link:'#intro'},
        {label:'Portfolio', link:'#portfolio'},
        {label:'Works', link:'#works'},
        {label:'Contact', link:'#contact'},
    ]
    const elements = list.map(({label, link}) => (
        <li key={label} onClick={()=> setMenuOpen(false)}>
            <a href={link}>{label}</a>
        </li>
    ))

    return (
        <div className={'menu '+ (menuOpen && 'activeMenu')}>
            <ul>
                {elements}
            </ul>

        </div>
    );
};

export default Menu;
