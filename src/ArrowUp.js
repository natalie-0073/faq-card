import React from "react";
import './_component.scss';
import arrow from './images/icon-arrow-down.svg';
export default function ArrowUp(props){
    return(
        <span><img src={arrow} alt="arrow" className="arrow  arrow-up text-end"/></span>
    );
}