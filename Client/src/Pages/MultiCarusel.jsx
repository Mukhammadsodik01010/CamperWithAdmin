import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "./service/ProductService";
import ArrowDown from "../assets/down-arrow.svg";
import {
  MultiArrowDiv,
  MultiAsosiyDiv,
  MultiButton,
  MultiImg,
  MultiImgMainDiv,
  MultiMainDiv,
  ProductNameDiv,
  RecommendDiv,
  RecommendH1,
  RecommendUnderline,
} from "../Styles/MultiCarousel";

export const RecommendComp = () => {
  return (
    <RecommendDiv>
      <RecommendUnderline>
        <RecommendH1>Recommend</RecommendH1>
      </RecommendUnderline>
    </RecommendDiv>
  );
};

const MultiCaruselComponent = () => {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 4,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <MultiAsosiyDiv>
        <MultiMainDiv>
          <MultiImgMainDiv className="mb-3">
            <MultiImg src={`${product.image}`} alt={product.name} />
          </MultiImgMainDiv>
          <ProductNameDiv>
            <h4>{product.name}</h4>
            <MultiButton>Discover the range</MultiButton>
            <Tag
              value={product.inventoryStatus}
              severity={getSeverity(product)}
            ></Tag>
            <MultiArrowDiv>
              <p>Choose a model</p>
              <img src={ArrowDown} alt="Arrow" />
            </MultiArrowDiv>
          </ProductNameDiv>
        </MultiMainDiv>
      </MultiAsosiyDiv>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={4}
        numScroll={4}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
};
export default MultiCaruselComponent;
