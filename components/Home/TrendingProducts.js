import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Card, Grid, Row, Text, css } from "@nextui-org/react";
import styles from "../../styles/TrendingProducts.module.css";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const { parentContainer, heading } = styles;
  return (
    <>
      <h2 className={heading}>Trending Today</h2>
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
};

export default TrendingProducts;
