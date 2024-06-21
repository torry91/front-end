import image from  './torry.jpg';
import React from 'react';

const About = () => {
    return (
        <div className='container project-list'>
        <p className="about">Being easy adaptable I have transitioned into Tech Industry having
        <p></p> background in retailing(Data Entry Clerk,4years) and trucking industry<br/>
        <p></p>(CDL A truck driver,2years).

        With over 2 years of experience in Front End <br/><p></p>development and proficiency in JavaScript and React.js. my goal is <p></p>creating inovative user 
        interfaces,optimizing performance and problem-<p></p>solving through complex algorithms.
        <p></p>
        <p></p>
        <p></p>I’m committed to deliver solutions and achieve the most optimal results.</p>

        <img src={image} alt="pic" width="370px" height="550px"/>
        </div>
    )
}

export default About;