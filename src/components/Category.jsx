import React from 'react'

function Category({categoryname, categoryImage}) {
  return (
    <>
    <div className='font-bold'>
        <p>{categoryname}</p>

        <img src={categoryImage} alt='' />
    </div>
    </>
  )
}

export default Category