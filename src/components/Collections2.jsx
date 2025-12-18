import React from 'react'
import { collections } from '../data/ecommerce'

function Collections2() {
    return (
        <div className='container mt-5 mb-3'>
            <div className='row'>
                {
                    collections.map((collection, index) => (<div key={index} className="collection-card col-6 col-lg-4 col-md-4 col-sm-6 mb-4">
                        <div className='w-100' style={{ objectFit: "cover"
                        }} >
                            <img src={collection.image} alt={collection.name} 
                            width={"100%"}
                            
                            />
                        </div>
                        <div className='collection-name text-center playfair'>
                            {collection.name}
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}

export default Collections2
