import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
export default function Stack({ title, imgArray }) {
  console.log('title', title, 'array', imgArray);
  const images = imgArray.map(image => {
    return <li><Img fluid={image}/></li>
  })

  return (
    <div className='front-end-stack' style={{
      backgroundColor: '#2A2A2E',
      color: 'white',
      flexGrow: 1,
      textAlign: 'center',
      borderBottom: '1px solid white',
      marginBottom: '30px'

    }}>
      <h2 style={{
                  marginTop: '30px',
                  fontSize: '30px'
                }}>{title}</h2>
      <ul style={
                  {
                    listStyle: 'none'
                  }}>
        {images}
      </ul>
    </div>
  )

}

Stack.propTpes = {
  title: PropTypes.string.isRequired,
  imgArray: PropTypes.array.isRequired
}