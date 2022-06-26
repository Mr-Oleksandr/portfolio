import React, {useState} from 'react';
import './Work.scss'
import ProgressBar from "../ProgressBar/ProgressBar";
const Works = () => {

    const [currentSlider, setcurrentSlider] = useState(0);



    const data = [
        {
            id: "1",
            icon: "./assets/html.png",
            title: "HTML/CSS",
            desc:<ProgressBar bgcolor={"#6a1b9a"} completed={100}/>,
        },
        {
            id: "2",
            icon: "./assets/atom.png",
            title: "React Js",
            desc:<ProgressBar bgcolor={"#6a1b9a"} completed={50}/>,
        },
        {
            id: "3",
            icon: "./assets/javascript.png",
            title: "JavaScript",
            desc:<ProgressBar bgcolor={"#6a1b9a"} completed={60}/>
        },
    ];

    const handleClick = (way) => {
        way === 'left' ? setcurrentSlider(currentSlider > 0 ? currentSlider -1 : 2) :
            setcurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlider *100}vw)`}}>
                {data.map(d => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <div>{d.desc}</div>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/right-arrow.png" className="arrow left" alt="" onClick={() => handleClick('left')}/>
            <img src="assets/right-arrow.png" className="arrow right" alt=""onClick={() => handleClick('right')}/>
        </div>
    );
};

export default Works;
