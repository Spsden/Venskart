import React from "react";
import Mobile from "../public/Images/mobile.jpg";
// import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { Image } from "@nextui-org/react";

const Cart = () => {
  const dummyData = {
    name: "iPhone 13 pro Max Ultra Samsung 256GB",
    price: "1,02,000",
    image: "https://m.media-amazon.com/images/I/71gm8v4uPBL._SX522_.jpg",
    quantity: 1,
    seller: "Apple",
    color: "Black",
  };

  const ProductContainer = (dummyData) => {
    const { image, name, color, seller, price } = dummyData.dummyData;
    console.log(dummyData.dummyData);
    const {
      itemContainer,
      imageContainer,
      itemDetails,
      itemName,
      detailsSection,
      itemPrice,
      colorText,
      sellerText,
      mediatorName,
    } = styles;
    return (
      <div className={itemContainer}>
        <div className={imageContainer}>
          <Image showSkeleton src={image} alt="PRODUCT IMAGE" />
        </div>
        <div className={itemDetails}>
          <p className={itemName}>{name}</p>
          <div className={detailsSection}>
            <div>
              <p className={itemPrice}>Price: {price}</p>
              <p className={colorText}>Color: {color}</p>
            </div>
            <div>
              <p className={sellerText}>Seller: {seller}</p>
              <p className={mediatorName}>Fulfilled by Venskart</p>
            </div>
          </div>
          <button className="button">Remove from cart</button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.parentContainer}>
      <h1 className={styles.title}>My Cart</h1>
      <ProductContainer dummyData={dummyData} />
      <ProductContainer dummyData={dummyData} />
      <ProductContainer dummyData={dummyData} />
    </div>
  );
};

export default Cart;
