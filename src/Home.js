import React from 'react';
import video from './lady.mov';
import image from './contact.png';
import imageEcomm from "./ecomm.png";
import imageNutrition from "./nutrition.png";
import imageDating from "./dating app.png";
import imageG from "./grocery list.png";
import imageMeal from "./meal.png";
import imageBored from "./bored.png";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const location = useLocation();
    
    useEffect (() => {
        const params = new URLSearchParams(location.search);
        if (params.get('scrollTo') === 'contact') {
            const contactSection = document.getElementById("contact-section");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        } else if (params.get('scrollTo') === 'projects') {
            const projectsSection = document.getElementById('projects-section');
            if (projectsSection) {
                projectsSection.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, [location]);

    const projectsData = [
        {
            id: 1,
            title: 'E-Commerce Site',
            imgUrl:imageEcomm,
            siteUrl: "https://its-e-commerce.netlify.app",
        },

        {
            id: 2,
            title: 'Grocery List App',
            imgUrl:imageG,
            siteUrl: "https://a-grocery-list.netlify.app",
        },
        {
            id: 3,
            title: 'Meal Planner',
            imgUrl:imageMeal,
            siteUrl: "https://the-meal-planner.netlify.app",
        },
        {
            id: 4,
            title: 'If Bored App ',
            imgUrl:imageBored,
            siteUrl: "https://read-me-if-bored.netlify.app",
        },
        {
            id: 5,
            title: 'Dating App',
            imgUrl:imageDating,
            siteUrl: "https://dating-app-simple.netlify.app",
        },
        {
            id: 6,
            title: 'Food Analysis',
            imgUrl:imageNutrition,
            siteUrl: "https://the-food-analysis.netlify.app",
        },
    ];

    return (
        <div className="main">
            <h1>Front-End Developer</h1>
            <video src={video} width="290px" height="290px"/>
            <p>Hello, I'm Victoria. I’m committed to deliver solutions <br/>
                and achieve the most optimal results for your company.
            </p>
        
            <span>
                <a aria-label="linkedin" rel="noreferrer" target="_blank" 
                href="https://www.linkedin.com/in/victoria-badrajan-9b4b1218a/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin">
                </svg></a>
                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/torry91">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github">
                </svg></a>
            </span>
                <div className='skills'>
                    <p className='main'>Dev Stack</p>
                    <img className="icon" src="https://skillicons.dev/icons?i=html,css" alt="skill-icon"></img>
                    <img className="icon"src="https://skillicons.dev/icons?i=js,figma" alt="skill-icon"></img>
                    <img className="icon"src="https://skillicons.dev/icons?i=bootstrap" alt="skill-icon"></img>
                    <img className="icon"src="https://skillicons.dev/icons?i=react,redux,node" alt="skill-icon"></img>
                </div>
                <div className='space'></div>
                
                <div id="projects-section" className='projects'>
                    <h1 className='project-list'>Projects</h1>
                    <div className='project-list'>
                        {projectsData.map(project => (
                            <div key={project.id}>
                            <h3>{project.title}</h3>
                            <a href={project.siteUrl} target="blank">
                            <img src={project.imgUrl} alt="pic" width="350px" height="250px"/>
                            </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='space'></div>
                <div className='container2'>
                <h1 className='titleContact project-list'>Contact</h1>
                <div className='info'>
                    <div className='image'>
                <img src={image} className="lastPic"alt="pic" width="450px" height="350px"/>
                </div>
                <div id="contact-section" className="reach">
                    <h2>Reach out to me</h2>
                    <p>victoriabadrajann@gmail.com</p>
                    <p> Location : Roswell , GA , USA</p>
                    <p> +1 407 394 0017 </p>
                    </div>
            <div className='space'></div>
        
        </div>
        </div>
        </div>
        
    )
}

export default Home;