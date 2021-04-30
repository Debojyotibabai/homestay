import React from "react";

// css
import "../Css/CatagoryCard.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const CatagoryCard = (props) => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  return (
    <div className="catagory__card" data-aos="zoom-in">
      <div className="catagory__card__img">
        <img src={props.img} alt="" />
      </div>
      <div className="catagory__card__details">
        <h1>{props.type}</h1>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default CatagoryCard;
