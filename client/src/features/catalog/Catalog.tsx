import { Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
    
    
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/Products/getProducts")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    
    return (
        <>
            <Container>
                <ProductList products={products} />
            </Container>
        </>
    );
}