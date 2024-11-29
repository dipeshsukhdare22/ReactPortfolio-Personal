import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import logoimg from '../assets/logoimg.png';
import Video from '../assets/video1.webm';
import './NavStyle.css';

const Navbar = () => {
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
    <div className='main'>
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
          <Link to="./work"><h4>MyWork</h4></Link>
          <Link to="/projects"><h4>Projects</h4></Link>
          <Link to="/contact"><h4>Contact Me</h4></Link>
        </div>
        <div className='right-nav'>
          <button>LET'S TALK <i className="ri-arrow-right-up-line" style={{ marginLeft: '8px' }}></i></button>
        </div>
        <div className='right-nav'>
        <button>
            Hire Me <i className="ri-corner-down-left-line" style={{ marginLeft: '8px' }}></i>
          </button>
        </div>
        <div className='menu-bar'><FaTimes />
          <i className="ri-menu-3-fill" height="26" viewBox="0 96 960 960" width="26" ></i>
        </div>
      </nav>

      
      <div className='left'>
        <h1>DIPESH <br /> SUKHDARE</h1>
        <p>
          I'm creative developer based in Mumbai , and I'm very passionate and dedicated to my work
        </p>
        <div className='btn'>
          <button>
            Get Started <FaArrowRight style={{ marginLeft: '8px' }} />
          </button>
          <button>Experiences Generator</button>
        </div>
      </div>
      <div className='right'>
        <video src={Video} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default Navbar;
