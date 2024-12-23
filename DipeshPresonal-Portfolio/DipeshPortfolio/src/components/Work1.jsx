import React, { useRef } from 'react';
import './Work1.css';
import { Work_Experience } from '../assets/work_data';
import WorkCard from './WorkCard';
import Slider from 'react-slick';
import { skills } from '../assets/work';
import { history } from '../assets/work';
import { Link } from 'react-router-dom'; // For linking

// Importing the arrow-right-line icon from Remix Icons
import { RiArrowRightLine } from 'react-icons/ri';

const Work1 = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769, // Adjusts settings for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className='work'>
    <section className="experience-container">
        <h5>Work Experience</h5>
        <div className="experience-content">
          <Slider ref={sliderRef} {...settings}>
            {Work_Experience.map((item) => (
              <WorkCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
      </section>

      {/* Education */}
      <section className="experience_container" id="experience">
        <h2 className="experience_title">Working Skills</h2>
        <div className="experience_content">
          <div className="experience_skills">
            {skills.map((skill, id) => (
              <div className="experience_skill" key={id}>
                <div className="experience_skillimagecontainer">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>

          <ul className="experience_history">
            <h1>Education</h1>
            {history.map((historyItem, id) => (
              <li key={id} className="experience_historyItem">
                <img src={historyItem.imageSrc} alt={historyItem.role} />
                <div className="experience_historyDetails">
                  <h3>
                    {historyItem.role}, {historyItem.organisation}
                  </h3>
                  <p>
                    {historyItem.startDate} - {historyItem.endDate}
                  </p>
                  <ul>
                    {historyItem.experiences.map((experience, expId) => (
                      <li key={expId}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="experience_buttons">
          <Link to="/work" className="experience_button">
            MyWork   <RiArrowRightLine  style={{ marginLeft: '8px' }} /> 
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default Work1;
