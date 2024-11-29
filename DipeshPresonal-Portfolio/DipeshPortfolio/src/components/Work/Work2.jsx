import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Work2.css';
import { FaTimes } from 'react-icons/fa';
import logoimg from '../../assets/logoimg.png';

const Work2 = () => {
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
            <div className='Work'>
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
                        <i className="ri-menu-3-fill" height="26" viewBox="0 96 960 960" width="26"></i>
                    </div>
                </nav>

                <section className="qualification section">
                    <h1 className="section__title">My Work</h1>
                    <h2 className="section__title">My Qualification</h2>
                    <span className="section__subtitle">My personal journey</span>

                    <div className="qualification__container container">
                        <div className="qualification__tabs">
                            <div className="qualification__button qualification__active button--flex">
                                <i className="ri-graduation-cap-line qualification__icon"></i> Education
                            </div>
                        </div>
                        <div className="qualification__tabs">
                            <div className="qualification__button button--flex">
                                <i className="ri-briefcase-line qualification__icon"></i> Experience
                            </div>
                        </div>
                    </div>
                    <div className='qualification__sections'>
                        <div className='qualification__content-active'>
                            <div className='qualification__data'>
                                <div>
                                    <h3 className='qualification__title'>MERN Developer</h3>
                                    <span className='qualification__subtitle'>Mumbai - Institute</span>
                                    <div className='qualification__calender'>
                                        <i className="ri-calendar-line"></i> 2024 - Present
                                    </div>
                                    <div className='qualification__description'>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quia, corporis porro a voluptatibus harum adipisci odit aliquam mollitia voluptates!</p>
                                    </div>
                                </div>
                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                            </div>

                            <div className='qualification__data'>
                                <div></div>
                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                                <div>
                                    <h3 className='qualification__title'>Web Design</h3>
                                    <span className='qualification__subtitle'>Mumbai - Institute</span>
                                    <div className='qualification__calender'>
                                        <i className="ri-calendar-line"></i> 2024 - Present
                                    </div>
                                    <div className='qualification__description'>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quia, corporis porro a voluptatibus harum adipisci odit aliquam mollitia voluptates!</p>
                                    </div>
                                </div>
                            </div>

                            <div className='qualification__data'>
                                <div>
                                    <h3 className='qualification__title'>MERN Developer</h3>
                                    <span className='qualification__subtitle'>Mumbai - Institute</span>
                                    <div className='qualification__calender'>
                                        <i className="ri-calendar-line"></i> 2024 - Present
                                    </div>
                                    <div className='qualification__description'>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quia, corporis porro a voluptatibus harum adipisci odit aliquam mollitia voluptates!</p>
                                    </div>
                                </div>
                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                            </div>

                            <div className='qualification__data'>
                                <div></div>
                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                                <div>
                                    <h3 className='qualification__title'>Web Design</h3>
                                    <span className='qualification__subtitle'>Mumbai - Institute</span>
                                    <div className='qualification__calender'>
                                        <i className="ri-calendar-line"></i> 2024 - Present
                                    </div>
                                    <div className='qualification__description'>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quia, corporis porro a voluptatibus harum adipisci odit aliquam mollitia voluptates!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='qualification__content'>
                            <div className='qualification__data'>
                                <div>
                                    <h3 className='qualification__title'>MERN Full Stack Developer</h3>
                                    <span className='qualification__subtitle'>Mumbai - Institute</span>
                                    <div className='qualification__calender'>
                                        <i className="ri-calendar-line"></i> 2024 - Present
                                    </div>
                                    <div className='qualification__description'>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quia, corporis porro a voluptatibus harum adipisci odit aliquam mollitia voluptates!</p>
                                    </div>
                                </div>
                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                            </div>

                            <div className='qualification__data'>
                                <div></div>
                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                                <div>
                                    <h3 className='qualification__title'>Web Designer</h3>
                                    <span className='qualification__subtitle'>Mumbai - Institute</span>
                                    <div className='qualification__calender'>
                                        <i className="ri-calendar-line"></i> 2024 - Present
                                    </div>
                                    <div className='qualification__description'>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quia, corporis porro a voluptatibus harum adipisci odit aliquam mollitia voluptates!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Work2;
