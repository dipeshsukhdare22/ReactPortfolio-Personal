import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './About2.css';
import { FaTimes } from 'react-icons/fa';
import logoimg from '../../assets/logoimg.png';
import profileimg from '../../assets/profileimg.png';

const About2 = () => {
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
        <div className='app'>
            <div className='About'>
                <nav>
                    <div className='left-nav'>
                        <a href='#'>
                            <img src={logoimg} alt='logoimg' />
                        </a>
                    </div>
                    <div className="Control-nav">
                        <Link to="/"><h4>Home</h4></Link>
                        <Link to="./about"><h4>About Me</h4></Link>
                        <Link to="/services"><h4>Services</h4></Link>
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


                <div className='hero'>
                    <img className='hero-img' src={profileimg} alt='' />
                    <h1> <span>I'm Dipesh Sukhdare,</span> MERN Full Stack Developer based in Mumbai</h1>
                    <p>I am a Full stack developer from Mumbai, Maharashtra with 6-7 months of experience in multiple projects like landing pages, and e-commerce websites.</p>

                    <div className='hero-action'>
                        <div className="hero-connect">Connect with me</div>
                        <div className="hero-resume">My resume</div>
                    </div>
                </div>
            </div>

            <div className='about'>
                <div className='about-title'>
                    <h1>About Me</h1>
                </div>
                <div className='about-sections'>
                    <div className='about-left'>
                        <img src={profileimg} alt='' />
                    </div>
                    <div className='about-right'>
                        <div className='about-para'>
                            <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                        </div>
                        <div className='about-skills'>
                            <div className='about-skill'><p>HTML5 & CSS </p> <hr style={{ width: "100%" }} /> 100%</div>
                            <div className='about-skill'><p>JavaScript</p> <hr style={{ width: "50%" }} />50%</div>
                            <div className='about-skill'><p>Bootstrap</p> <hr style={{ width: "70%" }} />70%</div>
                            <div className='about-skill'><p>ReactJs</p> <hr style={{ width: "70%" }} />70%</div>
                            <div className='about-skill'><p>MERN Stack</p> <hr style={{ width: "70%" }} />70%</div>
                            <div className='about-skill'><p>Api Integration</p> <hr style={{ width: "50%" }} />50%</div>
                            <div className='about-skill'><p>Php & MySql</p> <hr style={{ width: "40%" }} />40%</div>
                        </div>
                    </div>
                </div>
                <div className='about-achievements'>
                    <div className='about-achievement'>
                        <h1>7-8+ months</h1>
                        <p>Years of Experience</p>
                    </div>
                    <hr />
                    <div className='about-achievement'>
                        <h1>30+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <hr />
                    <div className='about-achievement'>
                        <h1>1+</h1>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About2;
