import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items:center;
  background: #141124;
  margin: 0.5rem 25%;
  box-shadow: 5px 5px 10px -5px #f5b70a;
  border-radius: 20px;
  //   border: 1px dashed #f76e11;
  width: 50%;

  &:hover {
    background: #3d317c;
    box-shadow: 5px 5px 10px -5px #141124;
  }
`;

const ProductDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Category = styled.span`
  color: #f76e11;
  text-transform: capitalize;
  font-size: 22px;
`;

const Products = styled.h5`
  color: #f5b70a;
  flex: 1;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const ImageSmall = styled.img`
  width: 50%;
  margin-left: 49%;
  border-radius: 20px;
  visibility: visible;

`;
const ImageLarge = styled.img`
  width: 80%;
  margin-left: 49%;
  border-radius: 20px;
  visibility: hidden;

`;

const Product = (props) => {
  const product = props.item;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Container key={props.index}>
        {product.categories.map((cat) => (
          <Category>{cat.title}</Category>
        ))}
        <ProductDisplay>
          <Products > {product.title}</Products>
          <ImgContainer>
            {product.images.map((img) => (
              <>
                <ImageSmall src={img.small} />
                {/* <ImageLarge src={img.large} /> */}
              </>
            ))}
          </ImgContainer>
        </ProductDisplay>
      </Container>
    </>
  );
};

export default Product;
