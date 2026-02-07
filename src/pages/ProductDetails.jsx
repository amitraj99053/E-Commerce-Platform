import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import Product from "../components/Product";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProductById() {
            const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(res.data);
        }

        fetchProductById();
    }, []);

    console.log(product);
    if (!product.id) {
        return <div>Loading...</div>
    }
    return (
        <Fragment>
            {product && <Product
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                showAddToCart
            />}
        </Fragment>
    );
};

export default ProductDetails;