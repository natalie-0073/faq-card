import React from "react";
import './_component.scss';
import Interaction from "./Interaction";
import imgWoman from './images/illustration-woman-online-desktop.svg';
 import imgBox from './images/illustration-box-desktop.svg';
import backImg from './images/bg-pattern-desktop.svg';

export default function Component(){
    return (
        <main>
            
        <div className="container">
        
            <div className="content">
            
                <div className="row">
                
                    <div className="col-sm-6 content__picture">
                         <img className="content__picture-pattern"src={backImg} alt="big women"/>
                         <img className="content__picture-woman"src={imgWoman} alt="pattern"/>
                         <img className="content__picture-box"src={imgBox} alt="pattern"/>
                    </div>
                    <div className="col-sm-6 content__faq text-start"><h3>FAQ</h3>
                    <Interaction/>
                    </div>
                </div>
            </div>
        </div>
        </main>
    );
}