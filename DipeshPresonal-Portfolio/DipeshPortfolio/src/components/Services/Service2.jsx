import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Service2.css';
import { FaTimes, FaArrowRight } from 'react-icons/fa'; // Import FaArrowRight for the arrow icon
import logoimg from '../../assets/logoimg.png';
import Services_Data from '../../assets/service_data';

const Service2 = () => {
    useEffect(() => {
        const anim = gsap.timeline();
        anim.from("nav", {
            y: -350,
            opacity: 5,
            duration: 1,
        })
            .from(".left h1", {
                y: 100,
                opacity: 5,
                duration: 1,
            })
            .from(".left p", {
                y: 100,
                opacity: 5,
                duration: 0.5,
            })
            .from(".left .btn", {
                y: 100,
                opacity: 5,
                duration: 0.5,
            })
            .from(".left video", {
                y: 100,
                opacity: 5,
                duration: 0.5,
            });
    }, []);

    return (
        <div className='Services'>
            <nav>
                <div className='left-nav'>
                    <a href='#'>
                        <img src={logoimg} alt='logoimg' />
                    </a>
                </div>
                <div className="Control-nav">
                    <Link to="/"><h4>Home</h4></Link>
                    <Link to="./about"><h4>About Me</h4></Link>
                    <Link to="./services"><h4>Services</h4></Link>
                    <Link to="/work"><h4>Work</h4></Link>
                    <Link to="/projects"><h4>Projects</h4></Link>
                    <Link to="/contact"><h4>Contact Me</h4></Link>
                </div>
                <div className='right-nav'>
                    <button>LET'S TALK <i className="ri-arrow-right-up-line" style={{ marginLeft: '8px' }}></i></button>
                    <button>
                        Hire Me <i className="ri-corner-down-left-line" style={{ marginLeft: '8px' }}></i>
                    </button>
                </div>
                <div className='menu-bar'>
                    <FaTimes />
                    <i className="ri-menu-3-fill" height="26" viewBox="0 96 960 960" width="26" ></i>
                </div>
            </nav>
            <div className='services'>
                <div className='services-title'>
                    <h1>My Services </h1>
                </div>
                <div className='services-container'>
                    {Services_Data.map((service, index) => (
                        <div key={index} className='services-format'>
                            <h3>{service.id}</h3>
                            <h3><service.icon /></h3>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <div className='services-readmore'>
                                <p>Read More <FaArrowRight style={{ marginLeft: '8px' }} /></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service2;
