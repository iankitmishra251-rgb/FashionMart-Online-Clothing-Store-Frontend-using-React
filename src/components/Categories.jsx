import React from 'react'
import { categories } from '../data/ecommerce'

function Categories() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                {
                    categories.map((category, index) => (
                        <div key={index} className="category-card col-4 col-lg-2 col-md-3 col-sm-4">
                            <img src={category.image} alt={category.name} className="category-image image-fluied w-100" />
                            <p className="playfair category-text text-center mt-3">{category.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
