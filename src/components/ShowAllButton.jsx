import React from 'react'

function ShowAllButton({
    title = "View All",
}) {
  return (
    <div className='container d-flex justify-content-center mt-3 mb-1'>
        <button className='view-all-button'>
            {title}
        </button>
    </div>
  )
}

export default ShowAllButton
