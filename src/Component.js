import React, {useState} from "react";
import './_component.scss';
import Interaction from "./Interaction";
import imgWoman from './images/illustration-woman-online-desktop.svg';
 import imgBox from './images/illustration-box-desktop.svg';
import backImg from './images/bg-pattern-desktop.svg';
import mobileWom from './images/illustration-woman-online-mobile.svg';
import mobileBack from './images/bg-pattern-mobile.svg';
import { questions } from "./Questions";

export default function Component(){
    const [quests]=useState(questions);
    return (
        <main>
            
        <div className="container">
        
            <div className="content">
            
                <div className="row">
                
                    <div className="col-md-6 content__picture">
                        <img className="content__picture-mobile--woman" src={mobileWom} alt="mobile woman"/>
                        <img className="content__picture-mobile--pattern" src={mobileBack} alt="mobile back"/>
                        
                         <img className="content__picture-pattern"src={backImg} alt="background pic"/>
                         <img className="content__picture-woman"src={imgWoman} alt="woman"/>
                         <img className="content__picture-box"src={imgBox} alt="box"/>
                    </div>
                    <div className="col-md-6 content__faq text-start"><h3>FAQ</h3>
                    {quests.map((quest, index)=>(
                        <Interaction key={index} question={quest.question} answer={quest.answer}/>
                    ))}
                    </div>
                </div>
            </div>
        </div>
        </main>
    );
}