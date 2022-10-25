import React, {useState} from "react";
import './_component.scss';
import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";
export default function Interaction(props){
    const [isShowing, setIsShowing]=useState(false);
    return(
        <div>
            <ul>
                
            <li onClick={function(){setIsShowing(!isShowing)}} className={`${isShowing&&"clicked"}`}>{props.question}{isShowing ? <ArrowUp setIsShowing={setIsShowing}/>:<ArrowDown setIsShowing={setIsShowing}/>}</li>
            {isShowing&&(<p>{props.answer}</p>)}
            
            </ul>
            <hr/>
        </div>
    );
}