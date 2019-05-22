import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'


export default function Stack({ title, imgArray }) {
  console.log('title', title, 'array', imgArray);
  const images = imgArray.map(image => {
    return <li><Img fluid={image} /></li>
  })

  return (
    <div className='front-end-stack' style={{
      backgroundColor: '#2A2A2E',
      color: 'white',
      flexGrow: 1,
      textAlign: 'center',
      marginBottom: '30px',
      display:'flex',
      flexDirection:'column',
      flexBasis: '0'

    }}>

      <section>
      <p style={{
        color: '#99CC00',
        marginTop: '30px',
        fontSize: '22px',
        letterSpacing: '8px'
      }}>{title}</p>

      <div style={{display:'flex', justifyContent:'center', heigth:'100%', flexGrow:'1'}}>
        <ul style={
          {
            listStyle: 'none',
            margin: 'auto'
          }}>
          {images}
        </ul>
      </div>


      </section>


    </div>
  )

}

Stack.propTpes = {
  title: PropTypes.string.isRequired,
  imgArray: PropTypes.array.isRequired
}