import React from 'react'

function NewsLetter() {
    return (
        <div className='container mt-5'>
            <div className='layer1'>
                <h1 className='playfair'>Subscribe to get updates on exciting offers
                    & deals</h1>
                <div className='input-field'>
                    <input type="email" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
