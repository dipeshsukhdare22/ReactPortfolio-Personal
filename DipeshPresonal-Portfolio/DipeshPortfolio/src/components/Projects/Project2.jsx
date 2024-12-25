import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Project2.css'

const Project2 = () => {
    useEffect (() => {
        //Resgister ScrollTrigger Plugin
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : ".mainproject",
                //markers : true,
                start: '38% 50%',
                end: '100% 50%',
                scrub: 2,
                pin: true,
            },
        })

    tl.to(".text",{
        margintop: '-20%',
    },'a')
    .to('#card-one',{
        top: '28%',
    },'a')
    .to('#card-two',{
        top: '25%'
    },'a')
    .to('#card-two',{
        top: '30%'
    },'b')
    .to('#card-one',{
        width: '65%',
        height: '65vh'
    },'b')
    .to('#card-three',{
        top: '20%'
    }, 'b')
    .to('#card-three',{
        top: '25%'
    },'c')
    .to('#card-two',{
        width: '70%',
        height: '70vh'
    },'c');

},[]);    


    return (
        <div className='Projects'>
            <div className='mainproject'>
                <div className='text'>
                    <div className='text-img'></div>
                    <h2>Create new feature at <br /> Dynamic Projects </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod exercitationem asperiores assumenda officia sit est
                        quae illo doloremque quas officiis! <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, corrupti.</p>
                </div>
                <div className='cards' id='card-one'></div>
                <div className='cards' id='card-two'></div>
                <div className='cards' id='card-three'></div>
            </div>
        </div>
    )
}

export default Project2
