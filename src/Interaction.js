import React, {useState} from "react";
import arrow from './images/icon-arrow-down.svg';
export default function Interaction(){
    return(
        <ul>
                        <li>How many team members can I invite?<span><img src={arrow} alt="arrow" className="arrow text-end"/></span></li>
                        <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
                        <hr/>
                        <li>What is the maximum file upload size?<span><img src={arrow} alt="arrow" className="arrow text-end"/></span></li>
                        <p>No more than 2GB. All files in your account must fit your allowed storage space.</p>
                        <hr/>
                        
                        <li>How do I reset my password?<span><img src={arrow} alt="arrow" className="arrow text-end"/></span></li>
                        <p>Click "Forgot password" from the login page or "Change password" from your profile page. A reset link will be emailed to you.</p>
                        <hr/>
                        <li>Can I cancel my subscription?<span><img src={arrow} alt="arrow" className="arrow text-end"/></span></li>
                        <p>Yes! Send us a message and we'll process your request no questions asked.</p>
                        <hr/>
                        <li>Do you provide additional support?<span><img src={arrow} alt="arrow" className="arrow text-end"/></span></li>
                        <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                        <hr/>
                    </ul>
    );
}