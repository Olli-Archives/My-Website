import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MobileDevider from './MobileDevider';


export default function Stack({ title, imgArray }) {
  console.log('imgArray', imgArray);
  console.log('title', title, 'array', imgArray);
  const images = imgArray.map(image => {
    return <li css={{alignSelf:'center'}}><Img fluid={image} /></li>
  })

  return (
    <>
    <MobileDevider title={title}/>
    <div className='front-end-stack' css={{
      
      backgroundColor: '#2A2A2E',
      color: 'white',
      flexGrow: 1,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '0',
      '@media (min-width: 720px)': {
        marginBottom: '30px'
      }
    }}>
      <section>
        
        <p css={{
          display: 'none',
          color: '#99CC00',
          marginTop: '30px',
          fontSize: '22px',
          letterSpacing: '8px',
          '@media (min-width: 720px)': {
            display: `block`,
          },
        }}>{title}</p>
        <div css={
          {
            display: 'flex',
            justifyContent: 'center',
            heigth: '100%',
            flexGrow: '1',     
          }}>
          <ul css={
            {
              listStyle: 'none',
              width:'100%',
              display:'flex',
              justifyContent:'space-between',
              padding:'25px 0 25px 0',
              '@media (min-width: 720px)': {
              flexDirection: `column`,
              }  
            }}>
            {images}
          </ul>
        </div>
      </section>
    </div>
    </>
  )

}

Stack.propTpes = {
  title: PropTypes.string.isRequired,
  imgArray: PropTypes.array.isRequired
}