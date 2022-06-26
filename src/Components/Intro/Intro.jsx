import React, {useEffect, useRef} from 'react';
import Typed from "typed.js";
import './Intro.scss'
const Intro = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['JavaScript', 'React JS'], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/old-man.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, Im </h2>
                    <h1>Oleksandr Kovalyov</h1>
                    <h3>Frontend Developer <span ref={el}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/scroll.png" alt=""/>
                </a>
            </div>

        </div>
    );
};

export default Intro;
