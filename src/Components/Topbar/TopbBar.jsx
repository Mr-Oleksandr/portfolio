import React from 'react';
import './Topbar.scss'
import {AiOutlineUser, AiTwotoneMail } from 'react-icons/ai';
const TopbBar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Oleksandr</a>
                    <div className="itemContainer">
                        <AiOutlineUser className="icon"/>
                        <span>+380964926330</span>
                    </div>
                    <div className="itemContainer">
                        <AiTwotoneMail className="icon"/>
                        <span>skovalov777@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <button type='button' className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopbBar;
