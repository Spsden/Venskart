import React from "react";
import Mobile from "../public/Images/mobile.jpg";
import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const dummyData = {
    name: "iPhone 13 pro Max Ultra Samsung 256GB",
    price: "1,02,000",
    image: Mobile,
    quantity: 1,
    seller: "Apple",
    color: "Black",
  };

  const ProductContainer = (dummyData) => {
    const { image, name, color, seller, price } = dummyData.dummyData;
    console.log(dummyData.dummyData);
    return (
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <Image src={image} />
        </div>
        <div className={styles.itemDetails}>
          <p className={styles.itemName}>{name}</p>
          <div className={styles.detailsSection}>
            <div>
              <p className={styles.itemPrice}>Price: {price}</p>
              <p className={styles.colorText}>Color: {color}</p>
            </div>
            <div>
              <p className={styles.seller}>Seller: {seller}</p>
              <p className={styles.mediatorName}>Fulfilled by Venskart</p>
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
