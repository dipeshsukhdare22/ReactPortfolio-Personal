import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profileimg from '../assets/profileimg.png';
import './About1.css';

const About1 = () => {
  useEffect(() => {
    const lenis = new window.Lenis();
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    let mm = window.gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
      let tl = window.gsap.timeline({
        scrollTrigger: {
          trigger: '.section2',
          start: '0% 50%',
          end: '50% 50%',
          scrub: 1,
        }
      });

      tl.to(".one-img", { x: -500, rotate: -30 }, 'a');
      tl.to(".three-img", { x: 500, rotate: 30 }, 'a');
      tl.to(".two-img", { x: -500, rotate: -30, delay: -0.5 }, 'b');
      tl.to(".four-img", { x: 500, delay: -0.5, rotate: 30 }, 'b');
      tl.to(".innerText h2", { y: -100, opacity: 1, delay: -0.4 }, 'b');
      tl.to(".innerText a", { y: -100, opacity: 1, delay: -0.4 }, 'b');
    });

    mm.add("(max-width: 799px)", () => {
      let tl = window.gsap.timeline({
        scrollTrigger: {
          trigger: '.section2',
          start: '0% 50%',
          end: '100% 90%',
          scrub: 1,
        }
      });

      tl.to(".one-img", { x: -200, rotate: -30 }, 'a');
      tl.to(".three-img", { x: 200, rotate: 30 }, 'a');
      tl.to(".two-img", { x: -200, rotate: -30, delay: -0.5 }, 'b');
      tl.to(".four-img", { x: 200, delay: -0.5, rotate: 30 }, 'b');
      tl.to(".innerText h2", { y: -100, opacity: 1, delay: -0.4 }, 'b');
      tl.to(".innerText a", { y: -100, opacity: 1, delay: -0.4 }, 'b');
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div id='main'>
      <section className="d-flex-c section1">
        <h1>About Me!!</h1>
        <h2>Check Now!</h2>
        <p className='page1'>
          I’m a web developer with a passion for creating interactive, user-friendly websites. I specialize in frontend technologies and love bringing designs to life with modern tools and techniques.
        </p>


        <div id="page1-something">
          <h4>Brand design</h4>
          <h4>User Experience</h4>
          <h4>and</h4>
          <h4>Digital product design</h4>
        </div>
      </section>

      <section className="d-flex section2">
        <div className="innerText d-flex-c">
          <img src={Profileimg} alt="profileimg" />
          <h2>
            I believe that design and functionality go hand in hand. Creating an experience that feels intuitive and delightful is what drives me to continuously refine my craft. In addition to my web development expertise, I am also passionate about UI/UX design, ensuring that the websites I create not only work well but look great too.
          </h2>

          <Link to="/about"><button>More About Me!!</button></Link>
        </div>
        <div className="img-div d-flex">
          <div className="lft d-flex-c">
            <div className="imge one-img"></div>
            <div className="imge two-img"></div>
          </div>
          <div className="rght d-flex-c">
            <div className="imge three-img"></div>
            <div className="imge four-img"></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About1;
