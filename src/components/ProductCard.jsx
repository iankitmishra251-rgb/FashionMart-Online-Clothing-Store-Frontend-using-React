import { faCartShopping, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    const sizes = [
        "S", "M", "L", "XL", "XXL"
    ];
    return (
        <div className='col-6 col-sm-6 col-lg-3 col-md-4 mb-4 product-card'>
            <div className='w-100 product-image-container'>
            <img className='image-fluied product-image w-100' src={product.image} alt={product.name} />
            <div className="overlay-buttons">
                <Link className='overlay-button'>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </Link>
                <Link className='overlay-button'>
                    <FontAwesomeIcon icon={faHeart}/>
                </Link>
                <Link className='overlay-button'>
                    <FontAwesomeIcon icon={faShareAlt}/>
                </Link>
            </div>
            </div>
            <div className='product-details'>
                <span className='product-name'>{product.name}</span>
                <span className='product-price'>₹{product.price} <span className='text-decoration-line-through text-danger product-original-price'>₹{product.originalPrice}</span></span>
                <div className='product-sizes'>
                    {sizes.map((size, index) => (
                        <div key={index} className='product-size-badge'>{size}</div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default ProductCard
