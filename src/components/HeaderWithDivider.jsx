import React from 'react'

function HeaderWithDivider({title}) {
  return (
    <div className='container mt-5 mb-3'>
        <h2 className='divider playfair text-truncate'>{title}</h2>
    </div>
  )
}

export default HeaderWithDivider
