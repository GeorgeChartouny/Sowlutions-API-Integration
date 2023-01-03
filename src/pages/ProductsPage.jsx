import React, { useState } from "react";
import { useEffect } from "react";
import Product from "../components/Product";
import { manoRequest } from "../requestMethods";
import styled from "styled-components";

const Header = styled.h1`
  color: #f76e11;
  text-transform: capitalize;
  font-size: 22px;
`;

const ErrorMessage = styled.h3`
  color: #f5b70a;
  text-transform: capitalize;
  font-size: 22px;
`;

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const getProducts = async () => {
    try {
      await manoRequest.get("/v1/users/products/whats_new/").then((res) => {
        if (res.data.success === true) {
          setProducts(res.data.data.items);
          console.log("fetching");
          console.log(res.data.data.items);
        } else {
          setMessage(res.data.success);
          console.log(res.data);
        }
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header>ProductsPage</Header>

      {products ? (
        products.map((item,index) => (
          <>
            <Product index={index} item={item} />
          </>
        ))
      ) : (
        <ErrorMessage>{message}</ErrorMessage>
      )}
    </>
  );
};

export default ProductsPage;
