import React from 'react'
import './Blog.css'

const Card = (props) => {
  return (
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} className="card__img"/>
        <div className="card__info">
          <h3 className="card-text">{props.dname} </h3>
          <a href={props.link} target="_blank">
            <button>Read More <i class='bx bx-chevrons-right'></i></button>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card