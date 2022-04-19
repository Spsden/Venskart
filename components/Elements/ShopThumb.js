import Image from "next/image";
import { Card } from "@nextui-org/react";
import styles from "../../styles/ShopThumb.module.css";

function ShopThumb(props) {
  return (
    <Card className={styles.maincard}>
      <Image
        src={props.image}
        alt="Picture of the author"
        width="350px"
        height="300px"
      />
      <h2>
          {props.shopName}

      </h2>
      <p>
          {props.address}
      </p>
    </Card>
  );
}

export default ShopThumb;
