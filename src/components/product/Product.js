import React from "react";
import "./product.css";
import { useRef } from "react";

function Product(props) {
  console.log(props);

  let images = props.imgs;
  const bigImg = useRef();

  const changeImage = (e) => {
    bigImg.current.src = e.currentTarget.src;
  };

  return (
    <div className="productWrap">
      <section className="imageSection">
        <div className="fitBigImg">
          <img ref={bigImg} alt="bigImg" src={props.imgs[0]} />
        </div>
      </section>
      <section className="textSection">
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
        <div className="smolImg">
          {images.map(function (image, i) {
            return (
              <div className="fitImg">
                <img onClick={changeImage} alt={i} src={image} key={i} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Product;
