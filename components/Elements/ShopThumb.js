import Image from "next/image";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import styles from "../../styles/ShopThumb.module.css";

function ShopThumb({ id, shopName, address, image }) {
  return (
    <Card hoverable cover css={{ w: "100%", cursor: "pointer" }}>
      <Card.Header
        css={{
          position: "absolute",
          zIndex: 1,
          bgBlur: "#000",
          // bgBlur: "#ffffff",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Col>
          {/* <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </Text> */}
          <Text h3 color="white">
            {shopName}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image showSkeleton src={image} height={400} width={250} alt="shop image" />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          bgBlur: "#ffffff",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text h4 color="#000" size={12}>
              {address}
            </Text>
            {/* <Text color="#000" size={12}>
              Get notified.
            </Text> */}
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="success">
                <Text
                  css={{ color: "#000" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Visit
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default ShopThumb;
