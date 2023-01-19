import { ProductsNew } from "./ProductsNew";
import { ProductsIndex } from "./ProductsIndex";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function Content() {
  const [products, setProducts] = useState([{
  }]);

  const handleProductsIndex = () => {
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleProductsIndex,[]);  
  return (
    <div>
      <ProductsNew />
      <ProductsIndex products = {products}/>
    </div>
  );
}
