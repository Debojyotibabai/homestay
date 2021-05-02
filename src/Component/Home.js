import React from "react";

// css
import "../App.css";
import "../Css/Home.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// data
import { CatagoryData } from "./CatagoryData";
import { PopularDestinationData } from "./PopolarDestinationData";
import { PopularHotelData } from "./PopularHotelData";

// component
import CatagoryCard from "./CatagoryCard";
import PopularHotelCard from "./PopularHotelCard";

// image
import feature__apartment__img from "../Image/feature__apartment__img.svg";
import feature__lifestyle__img from "../Image/feature__lifestyle__img.svg";
import feature__yoga__img from "../Image/feature__yoga__img.svg";

// splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Home = () => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  return (
    <>
      {/* home section */}
      <div className="home__section">
        {/* banner section */}
        <div className="banner__section">
          <div className="banner__left__section">
            <h1>Check Into Your Desired Apartments</h1>
            <p>No leases. No landlords. No commitments.</p>
          </div>
          <div className="banner__right__section" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1613144488732-19df6d7e8656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
              alt=""
            />
          </div>
        </div>

        {/* banner form */}
        <div className="banner__form" data-aos="fade-up">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Submitted");
            }}
          >
            <div>
              <label>Where are you coming?</label>
              <input type="text" placeholder="City name" />
            </div>
            <div>
              <label>When will you come?</label>
              <input type="text" placeholder="Set a date" />
            </div>
            <div>
              <label>How many people?</label>
              <input type="text" placeholder="Total guest" />
            </div>
            <button type="submit">Search</button>
          </form>
        </div>

        {/* catagory section */}
        <div className="catagory__section">
          {CatagoryData.map((eachData, eachDataIndex) => {
            return (
              <CatagoryCard
                key={eachDataIndex}
                img={eachData.img}
                type={eachData.type}
                details={eachData.details}
              />
            );
          })}
        </div>

        {/* feature section */}
        <div className="feature__section">
          <h1>A New Way of Living</h1>
          <div className="features">
            <div>
              <img src={feature__apartment__img} alt="" />
              <h1>Flexible Apartments</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div>
              <img src={feature__lifestyle__img} alt="" />
              <h1>All - Inslusive Lifestyle</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div>
              <img src={feature__yoga__img} alt="" />
              <h1>Hassle - Free Experience</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>

        {/* popular destination section */}
        <div className="popular__destination__section">
          <div className="left__side" data-aos="fade-right">
            <h1>Popular Destinations</h1>
          </div>
          <Splide
            className="right__side"
            options={{
              type: "loop",
              gap: "1rem",
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              pagination: false,
              arrows: false,
            }}
          >
            {PopularDestinationData.map((eachItem, eachItemIndex) => {
              return (
                <SplideSlide key={eachItemIndex}>
                  <img className="slider__img" src={eachItem.img} alt="" />
                  <h1 className="slider__text">{eachItem.title}</h1>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>

        {/* best deal section */}
        <div className="best__deal__section">
          <h1>Best Deals</h1>

          <div>
            {PopularHotelData.map((eachData, eachDataIndex) => {
              return (
                <PopularHotelCard
                  key={eachDataIndex}
                  img={eachData.img}
                  name={eachData.name}
                  location={eachData.location}
                  landmark={eachData.landmark}
                  star={eachData.star}
                  price={eachData.price}
                  shift={eachData.shift}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
