import React, { useEffect } from "react";
import "./Service1.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis();

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        lenis.on("scroll", (e) => {
            console.log(e);
        });

        requestAnimationFrame(raf);

        // GSAP Timeline with ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".services-section",
                pin: true,
                start: "50% 60%",
                end: "300% 50%",
                scrub: true,
                pinSpacing: true,
            },
        });

        const services = [
            "#Web",
            "#Template-Design",
            "#html",
            "#css",
            "#javascript",
            "#bootstrap",
            "#wordpress",
            "#Mern",
            "#ReactBootstrap-Tailwind",
            "#Express",
            "#React",
            "#Node",
            "#Mongodb",
            "#Mysql-php"
        ];

        tl.to(services, {
            opacity: 2,
            filter: "blur(0.5px)",
            stagger: 0.5,
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            lenis.destroy();
        };
    }, []);
    
    return (
        <div className="Service" >
            <section id="services-section">
                <div className="intro-section d-flex-c">
                    <h1>My Services</h1>
                    <h4>What I Can Do for You??</h4>
                </div>
                <div className="services-section d-flex" data-lenis-prevent>
                    <div className="services-list d-flex">
                        <h2 id="Web">Web & UI Design</h2>
                        <h2 id="Template-Design">Template Design</h2>
                        <h2 id="html">HTML Development</h2>
                        <h2 id="css">CSS Styling</h2>
                        <h2 id="javascript">JavaScript Integration</h2>
                        <h2 id="bootstrap">BootStrap Development</h2>
                        <h2 id="wordpress">WordPress Websites</h2>
                        <h2 id="Mern">MERN - Full Stack</h2>
                        <h2 id="ReactBootstrap-Tailwind">ReactBootStrap / Tailwind</h2>
                        <h2 id="Express">Express.js</h2>
                        <h2 id="React">React.js +Api Integration</h2>
                        <h2 id="Node">Node.js</h2>
                        <h2 id="Mongodb">Mongodb</h2>
                        <h2 id="Mysql-php">Mysql & Php</h2>
                    </div>
                </div>
            </section>
            <div className="pricing">
                <div className="pricing-header">
                    <h1>Our Pricing Plans</h1>
                    <p>
                        Choose a plan that best fits your needs. Whether you're starting small or scaling big, we have you covered.
                    </p>
                </div>
                <div className="card-container">
                    <div className="card">
                        <h3>--Basic--</h3>
                        <span className="bar"></span>
                        <p className="dollar">$100 INR/- Hour</p>
                        <p>-3 Days-</p>
                        <p>-3 Pages-</p>
                        <p>-Featured-</p>
                        <p>-Responsive Design-</p>
                        <Link to={"/contact"} className="btns">
                            PURCHASE NOW
                        </Link>
                    </div>

                    <div className="card">
                        <h3>--Premium--</h3>
                        <span className="bar"></span>
                        <p className="dollar">$300 INR/- Week</p>
                        <p>-2 Days-</p>
                        <p>-5 Pages-</p>
                        <p>-Featured-</p>
                        <p>-Responsive Design-</p>
                        <Link to={"/contact"} className="btns">
                            PURCHASE NOW
                        </Link>
                    </div>

                    <div className="card">
                        <h3>--Business--</h3>
                        <span className="bar"></span>
                        <p className="dollar">$500 INR/- Month</p>
                        <p>-5 Days-</p>
                        <p>-8 Pages-</p>
                        <p>-Featured-</p>
                        <p>-Responsive Design-</p>
                        <Link to={"/contact"} className="btns">
                            PURCHASE NOW
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="./services">
                <button className="transparent-button">Explore More Services</button>
            </Link>
        </div>
    );
};

export default Services;
