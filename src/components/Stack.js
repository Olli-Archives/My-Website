import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
export default function Stack({ title, imgArray }) {
  const images = imgArray.map(image => {
    return <li><Img fluid={image} /></li>
  })

  return (
    <div className='stack-container'>
      <h2>{title}</h2>
      <ul>
        {images}
      </ul>
    </div>
  )

}

Stack.propTpes = {
  title: PropTypes.string.isRequired,
  imgArray: PropTypes.array.isRequired
}