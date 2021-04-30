import React from "react";

// css
import "../App.css";
import "../Css/Home.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  return (
    // home__section
    <div className="home__section">
      {/* banner section */}
      <div className="banner__section">
        {/* banner left section */}
        <div className="banner__left__section" data-aos="fade-right">
          <h1>Check Into Your Desired Apartments</h1>
          <p>No leases. No landlords. No commitments.</p>
        </div>

        {/* banner right section */}
        <div className="banner__right__section" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1613144488732-19df6d7e8656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>
      </div>

      {/* banner form */}
      <div className="banner__form" data-aos="zoom-in">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Submitted");
          }}
        >
          <div>
            <label>Where are you going?</label>
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
    </div>
  );
};

export default Home;
