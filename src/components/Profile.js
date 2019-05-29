import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';



export default function Profile({ data }) {

  return (
    <>
    <div css={{height:'79px'}}></div>
      <div  css={{
        flexDirection: 'column',
        marginBottom: '0px',
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        margin: '0',
        padding: '0',
        '@media (min-width: 720px)': {
          flexDirection: `row`,
        },

      }}>
        <div css={{
          width:'100%',
          height:'auto',
        
      
          '@media (min-width: 720px)': {
           minWidth: `250px`,
          },
        
        }}>
          <Img fluid={data.faceShot.childImageSharp.fluid} />
        </div>
        <div css={{ backgroundColor: '', alignSelf: 'center', justifyContent: 'center', padding: '0', margin:'0' }}>

          <p style={{ fontSize: '18px', margin: '55px 25px 25px 25px' }}>
            Full Stack Software Developer with a
            passion for diving under the hood to get a
            deeper understanding on new technology.
            When I'm not helping my friends fix something
             they broke, you can find me enjoying the outdoors.
      </p>
       
        </div>
      </div>
    </>
  )
}

Profile.propTypes = {
  data: PropTypes.object.isRequired
}