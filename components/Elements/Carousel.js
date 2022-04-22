import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/dist/client/image";
import styles from "../styles/Carousel.module.css";
import { Fade } from "react-awesome-reveal";

import C1 from '../assets/images/carousel1.png'
import C2 from '../assets/images/carousel2.png'
// import C3 from '../assets/images/carousel3.png'
// import C4 from '../assets/images/carousel4.png'
// import C5 from '../assets/images/carousel5.png'
// import C6 from '../assets/images/carousel6.png'

// IMAGES
// import C1 from "../../assets/images/carousel1.png";
// import C2 from "../../assets/images/carousel2.png";
// import C3 from "../../assets/images/carousel3.png";
// import C4 from "../../assets/images/carousel4.png";
// import C5 from "../../assets/images/carousel5.png";
// import C6 from "../../assets/images/carousel6.png";

const CarouselSection = () => {
  {
    return (
      <Fade duration={3000}>
        <div className={styles.parentContainer}>
          <h1 className="heading">ShowCase</h1>
          <Carousel
            autoPlay="True"
            autoFocus="False"
            emulateTouch={false}
            interval={2000}
            infiniteLoop="True"
            swipeable="True"
            showStatus="False"
            showThumbs={false}
            stopOnHover={true}
          >
            <div>
              <Image src={C1} />
              <p className="legend">Moods & Genres</p>
            </div>
            <div>
              <Image src={C2} />
              <p className="legend">Image 2</p>
            </div>
            <div>
              <Image src={C3} />
              <p className="legend">Image 3</p>
            </div>
            <div>
              <Image src={C4} />
              <p className="legend">Image 4</p>
            </div>
            <div>
              <Image src={C5} />
              <p className="legend">Image 5</p>
            </div>
            <div>
              <Image src={C6} />
              <p className="legend">Image 5</p>
            </div>
          </Carousel>
        </div>
      </Fade>
    );
  }
};

export default CarouselSection;
