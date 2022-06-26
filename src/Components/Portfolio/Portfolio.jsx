import React, {useEffect, useState} from 'react';
import './Portfolio.scss'
import PortfolioList from "../PortfolioList/PortfolioList";
import {featuredPortfolio, designPortfolio, mobilePortfolio, webPortfolio, contentPortfolio} from '../../data'
const Portfolio = () => {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {
            id:'html',
            title:'Html Template'
        },
        {
            id:'javascript',
            title:'JavaScript'
        },
        {
            id:'react',
            title:'React JS'
        },
        {
            id:'redux',
            title:'Redux Js'
        },
    ]

    useEffect(() => {
        switch (selected){
            case 'html':setData(featuredPortfolio);
            break;
            case 'javascript':setData(webPortfolio);
            break;
            case'react':setData(mobilePortfolio);
            break;
            case'redux':setData(designPortfolio);
            break;
            default:
                setData(featuredPortfolio)
        }
    },[selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(({id,title}) => (
                    <PortfolioList title={title} active={selected === id} setSelected={setSelected} id={id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt=""/>
                        <h3><a style={{textDecoration:'none', color:'white'}} target='_blank' href={d.link}>{d.title}</a></h3>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default Portfolio;
