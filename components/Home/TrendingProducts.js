import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import styles from "../../styles/TrendingProducts.module.css";
import { Loading } from "@nextui-org/react";
import TrendingProductsData from "../APIs/TrendingProductsData";

const TrendingProducts = () => {
  const [products, setProducts] = useState();


  // const TrendingItems = TrendingProductsData()
  useEffect(() => {
    // try {

    // } catch(err) 
    // console.log(TrendingItems)
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const RenderFunction = () => {
    return products ? (
      <LoadedProducts />
    ) : (
      <Loading type="gradient" size="xl" align="center" />
    );
  };

  //   When data is loaded
  const LoadedProducts = () => (
    <>
      <div className={parentContainer}>
        <Grid.Container gap={2} justify="center">
          {products.map(
            (
              { index, title, price, description, category, image, rating },
              item
            ) => (
              <Grid key={index}>
                {/* {console.log(rating.rate)} */}
                <div className={styles.cardlol}>
                  <Card hoverable css={{ height: 340 }} clickable>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        showSkeleton
                        objectFit="scale-down"
                        src={image}
                        width={170}
                        alt={item.title}
                      />
                    </Card.Body>
                    <Card.Footer css={{ height: 100 }} justify="flex-start">
                      <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>{title}</Text>
                        <Text
                          css={{ color: "$accents4", fontWeight: "$semibold" }}
                        >
                          Price: Rs {price}
                        </Text>
                        <Text
                          css={{ color: "$accents4", fontWeight: "$semibold" }}
                        >
                          Rating ⭐{rating.rate}
                        </Text>
                      </Row>
                    </Card.Footer>
                  </Card>
                </div>
              </Grid>
            )
          )}
        </Grid.Container>
      </div>
    </>
  );

  const { parentContainer, heading } = styles;

  return (
    <div className={styles.trendingParent}>
      <RenderFunction />
    </div>
  );
};

export default TrendingProducts;
