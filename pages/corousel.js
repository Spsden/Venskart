import React from "react";
import styles from "../styles/carousel.module.css";


export const CarouselItem=({children, width}) =>{
    return(
        <div classname={CarouselItem} style={{width:width}}>
            {children}
        </div>
    );
}

const Carousel=({children}) =>{
    return(
        <div classname={styles.Carousel}>
            <div classname={styles.inner} style={{transform:"translatex(-0%)"}}>
                {React.Children.map(children, (child, index) =>{
                    return React.cloneElement(child,{width:"100%"});
                })}
            </div>
        </div>
    );
};

export default Carousel;