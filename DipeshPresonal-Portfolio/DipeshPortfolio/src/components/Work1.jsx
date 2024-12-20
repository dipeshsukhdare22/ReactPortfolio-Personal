import React, { useRef } from 'react';
import './Work1.css';
import { Work_Experience } from '../assets/work_data';
import WorkCard from './WorkCard';
import Slider from 'react-slick'; 
import { skills } from '../assets/work';
import { history } from '../assets/work';

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
    <section className='experience_container' id='experience'>
     <h2 className='experience_title'>Education</h2>
     <div className='experience_content'>
      <div className='experience_skills'>
        {skills.map((skill, id)=>{
          return(
            <div className='experice_skill' key={id}>
              <div className='experience_skillimagecontainer'>
                 <img src={skill.imageSrc} alt=''/>
              </div>
              <p>{skill.title}</p>
            </div>
          )
        })}
      </div>
      
      <ul className='experience_history'>
       {history.map((historyItem, id)=>{
        return(
          <li key={id} className='experience_historyItem'>
            <img src={historyItem.imageSrc} alt=''/>
            <div className='experience_historyDetails'>
              <h3>{historyItem.role}, {historyItem.organisation}</h3>
              <p>{historyItem.startDate} - {historyItem.endDate}</p>
              <ul>
                {historyItem.experiences.map((experience,id)=>{
                  return <li key={id}>{experience}</li>
                })}
              </ul>
            </div>
          </li>
        )
       })}
      </ul>
     </div>
    </section>
    </>
    
  );
};

export default Work1;
