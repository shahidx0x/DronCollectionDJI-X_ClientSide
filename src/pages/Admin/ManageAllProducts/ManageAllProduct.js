import React from "react";
import { Container } from "react-bootstrap";
import MaCard from "./MaCard";

const ManageAllProduct = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dronsite.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <Container style={{ marginTop: "100px" }}>
      <h2 className="text-center">
        <span>Manage all Products</span>
      </h2>
      {products.map((product) => (
        <MaCard key={product._id} product={product}></MaCard>
      ))}
    </Container>
  );
};

export default ManageAllProduct;
