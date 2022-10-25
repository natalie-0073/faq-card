import React, {useState} from "react";
import './_component.scss';
import arrow from './images/icon-arrow-down.svg';
export default function Interaction(){
    return(
        <ul>
                        <li><span><img src={arrow} alt="arrow" className="arrow text-end"/></span></li>
                        <p></p>
                        <hr/>
                        <li><span><img src={arrow} alt="arrow" className="arrow text-end"/></span></li>
                        <p></p>
                        <hr/>
                        
                        <li><span><img src={arrow} alt="arrow" className="arrow text-end"/></span></li>
                        <p></p>
                        <hr/>
                        <li><span><img src={arrow} alt="arrow" className="arrow text-end"/></span></li>
                        <p></p>
                        <hr/>
                        <li><span><img src={arrow} alt="arrow" className="arrow text-end"/></span></li>
                        <p></p>
                        <hr/>
                    </ul>
    );
}