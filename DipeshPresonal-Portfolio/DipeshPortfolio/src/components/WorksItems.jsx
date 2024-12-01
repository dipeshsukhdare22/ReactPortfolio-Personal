import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import "./Work1.css";
const WorksItems = ({ item }) => {
    return (
        <div className='"Work__card' key={item.id}>
            <img src={item.image} alt='' className='work__img' />
            <h3 className='work__title'>{item.title}</h3>
            <a href='#' className='work__button'>
                Demo  <i className="work__button-icon">
                    <BiRightArrowAlt />
                </i>
            </a>

        </div>
    )
}

export default WorksItems