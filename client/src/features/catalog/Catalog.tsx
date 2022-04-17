import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
 const [loading, setLoading] = useState(true);
    
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        agent.Catalog.list()
            .then(p => setProducts(p))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <LoadingComponent message="Loading products..." />;
    
    return (
        <>
            <ProductList products={products}  />
        </>
    );
}