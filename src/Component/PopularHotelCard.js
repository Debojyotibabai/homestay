import React from "react";

// css
import "../Css/PopularHotelCard.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const PopularHotelCard = (props) => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  return (
    <div className="popular__hotel__card" data-aos="zoom-in">
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <div className="details">
        <div className="left__side">
          <h2>{props.location}</h2>
          <p>{props.landmark}</p>
          <span>{props.star}</span>
        </div>
        <div className="right__side">
          <p>$ {props.price}</p>
          <span>{props.shift}</span>
        </div>
      </div>
    </div>
  );
};

export default PopularHotelCard;
