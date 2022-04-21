import React from "react";
import styles from "../styles/Home.module.css";
import AllShops from "../components/Elements/AllShops";
import all_shops from "../components/Elements/AllShops";
import ShopThumb from "../components/Elements/ShopThumb";
import TrendingProducts from "../components/Home/TrendingProducts";
import HorizontalDivider from "../components/Elements/HorizontalDivider";
import Carousel from "./corousel";

function Home() {
  const { parentCard, childCard, container, heading } = styles;
  const AllShops = () => {
    return (
      <div className={styles.parentCard}>
        <div>
          <Carousel/>
        </div>
        <h2 className={styles.heading}>Shops Nearby</h2>
        {all_shops.map(({ id, shopName, address, image }) => (
          <div className={styles.childCard} key={id}>
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
      <div>
        <AllShops />
        {/* <TrendingProducts /> */}
        <HorizontalDivider />

        <h2 className={styles.heading}>Trending Today</h2>
        <TrendingProducts />
      </div>
    </div>
  );
}

export default Home;
