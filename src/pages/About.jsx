import React from 'react';
import ab from "../assets/ab.jpg"

const Home = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={ab} class="d-block w-100" alt="hero" />
          <div class="carousel-caption d-none d-md-block">
            <div class="text">
            <h1>About Us Page</h1>
            <p>INFORMATIKA JAYA JAYA JAYA....</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
