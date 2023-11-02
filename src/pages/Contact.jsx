import React from 'react';
import abc from "../assets/abc.jpg"

const Home = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={abc} class="d-block w-100" alt="hero" />
          <div class="carousel-caption d-none d-md-block">
            <div class="text">
            <h1>Contact Page</h1>
             <p>Address: Jl. Raya Tlogomas No.246, Jawa Timur 65144, Indonesia <br /> Phone:
                (0341) 464318, ext 252 - SMS/WA/Telegram (Quick Response) +62
                896-896-01317 <br />
                Email 1 : lab.informatika@umm.ac.id <br />
                Email 2 :
                lab.informatika.umm@gmail.com
             </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
