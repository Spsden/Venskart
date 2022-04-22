import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Image from "next/dist/client/image";
import styles from "../../styles/Carousel.module.css";
import Image from "next/image";

//IMAGES
// import C1 from "../../assets/images/carousel1.png";
// import C2 from "../../assets/images/carousel2.png";
// import C3 from "../../assets/images/carousel1.png";
// import C4 from "../../assets/images/carousel2.png";
// import C5 from "../../assets/images/carousel1.png";
// import C6 from "../../assets/images/carousel2.png";

import C1 from "../../public/carouselImages/1.png";
// import C2 from "../../public/carouselImages/2.png";
import C3 from "../../public/carouselImages/3.jpg";
import C4 from "../../public/carouselImages/4.jpg";
import C5 from "../../public/carouselImages/5.jpg";
import C6 from "../../public/carouselImages/6.png";

const CarouselSection = () => {
  {
    return (
      <div className={styles.parentContainer}>
        {/* <h1 className="heading">ShowCase</h1> */}
        <Carousel
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          autoPlay="True"
          autoFocus="False"
          emulateTouch={false}
          interval={1500}
          infiniteLoop="True"
          swipeable={false}
          showThumbs={false}
          stopOnHover={false}
        >
          <Image src={C1} width={1700} height={500} />
          <Image src={C3} width={1700} height={500} />
          <Image src={C4} width={1700} height={500} />
          <Image src={C5} width={1700} height={500} />
          <Image src={C6} width={1700} height={500} />
        </Carousel>
      </div>
    );
  }
};

export default CarouselSection;
