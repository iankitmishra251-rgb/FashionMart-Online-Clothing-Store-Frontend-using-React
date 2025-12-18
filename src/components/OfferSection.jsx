import React from 'react'

function OfferSection() {
    return (
        <div className='container mt-5 p-3'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='card-bg-green mt-2 offer-card '>
                        <img src="/assets/images/achievments/diamond 1.png" alt="85% Off" height={100} />
                        <span className='upper-text playfair'>Hurry Up!</span>
                        <span className='center-text playfair'>85% OFF</span>
                        <span className='bottom-text playfair'>Sale</span>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='card-bg-pink mt-2 offer-card'>
                        <img src="/assets/images/achievments/discount 1.png" alt="85% Off" height={100} />
                        <span className='upper-text playfair'>Hurry Up!</span>
                        <span className='center-text playfair'>75% OFF</span>
                        <span className='bottom-text playfair'>Sale</span>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferSection
