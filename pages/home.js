import React from "react";
import styles from "../styles/Home.module.css";
// import AllShops from '../components/Elements/AllShops';
import all_shops from "../components/Elements/AllShops";
import ShopThumb from "../components/Elements/ShopThumb";

function Home() {
  const { parentCard, childCard, container, heading } = styles;
  const AllShops = () => {
    return (
      <div className={parentCard}>
        {all_shops.map(({ id, shopName, address, image }) => (
          <div className={childCard}>
            <ShopThumb
              key={id}
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
      <h2 className={heading}>Shops in your area</h2>
      <div>
        <AllShops />
      </div>
    </div>
  );
}

export default Home;
