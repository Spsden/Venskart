import React from "react";
import styles from "../styles/ProductDetails.module.css";
import { useRouter } from "next/router";
import { Image } from "@nextui-org/react";

const productdetail = () => {
  const {
    parentContainer,
    imageContainer,
    detailsContainer,
    buttonContainer,
    priceRatingContainer,
    productTitle,
    descriptionText,
    priceRating,
    categoryText,
    assureText,
    ratingText,
    ratingContainer,
  } = styles;

  const router = useRouter();
  const {
    query: { title, price, description, category, image, rating, userRating },
  } = router;

  const props = {
    // index,
    title,
    price,
    description,
    category,
    image,
    rating,
    userRating,
  };

  return (
    <div className={parentContainer}>
      <div className={imageContainer}>
        <Image alt="product image" showSkeleton={true} src={image} />
      </div>
      <div className={detailsContainer}>
        <h2 className={productTitle}>{title}</h2>
        <p className={categoryText}>Category: {category}</p>
        <p className={assureText}>Venskart assured✅</p>

        <div className={priceRatingContainer}>
          <p className={priceRating}>Price: Rs.{price}0</p>
          <div className={ratingContainer}>
            <p className={ratingText}>
              Rating: {"⭐".repeat(Math.round(rating))}
            </p>
            <p className={ratingText}>Users purchased: {userRating}</p>
          </div>
        </div>
        <p className={descriptionText}>Description: {description}</p>
        <div className={buttonContainer}>
          <button className="button">Add to card</button>
          <button className="button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default productdetail;
