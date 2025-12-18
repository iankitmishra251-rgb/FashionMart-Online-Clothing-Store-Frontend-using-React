import React from 'react'
import { products } from '../data/ecommerce'
import ProductCard from './ProductCard'

function ProductList() {
    return (
        <div className='container'>
            <div className='row'>
            {products.map((product, index) => <ProductCard key={index} product={product} />)}
            </div>
        </div>
    )
}

export default ProductList