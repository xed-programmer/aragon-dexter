import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams(); // Access the dynamic route parameter
    return <h2>Product ID: {id}</h2>
}

export default ProductDetails