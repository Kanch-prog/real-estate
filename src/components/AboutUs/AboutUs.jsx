import React from 'react';
import data from "../../constants/data";
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import "./AboutUs.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
const AboutUs = () => {
    return(
        <div className='about section-padding'>
        <div className='container'>
            <div className='about-content' >                
                <h2 className='section-title text-center'>Display Latest & Featured Properties</h2>
                <p className='para-text text-grey text-center'>Get started by choosing from one of our pre-built page templates to showcase your properties.</p>
            
                <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {data.items.map((item, index) => (
                    <div className="items-item bg-white text-left para-text" key={index}>
                        <ul>
                        <Item>
                            <li><img src = {item.url} alt = "" className="icon" /></li>
                            <li className='text-blue'>{item.price} </li>
                            <li className='text-dark'>{item.title} </li>
                            <li className='text-grey'>{item.value} </li>
                            <li className='text-grey' style={{fontSize: `10px`}}>
                                {item.detail}
                            </li>
                        </Item>
                        </ul>                        
                    </div>
                    ))}
                </Carousel>
                </div>
            </div>
                    
        </div>
    </div>
    )
    
}

export default AboutUs;