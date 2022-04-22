import React from "react";
import styles from "../styles/Home.module.css";
// import AllShops from '../components/Elements/AllShops';
import all_shops from "../components/Elements/AllShops";
import ShopThumb from "../components/Elements/ShopThumb";
import TrendingProducts from "../components/Home/TrendingProducts";
import HorizontalDivider from "../components/Elements/HorizontalDivider";
import { Carousel } from "react-responsive-carousel";
import CarouselSection from "../components/Elements/Carousel";

function Home() {
  const { parentCard, childCard, container, heading } = styles;
  const AllShops = () => {
    return (
      <div className={parentCard}>
        {all_shops.map(({ id, shopName, address, image }) => (
          <div className={childCard} key={id}>
            <ShopThumb
              id={id}
              shopName={shopName}
              address={address}
              image={image}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={container}>
      <CarouselSection />
      <HorizontalDivider />
      <h2 className={heading}>Shops Nearby</h2>
      <div>
        <AllShops />
        {/* <TrendingProducts /> */}
        <HorizontalDivider />

        <h2 className={heading}>Trending Today</h2>
        <TrendingProducts />
      </div>
    </div>
  );
}

export default Home;
