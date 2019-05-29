import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';


//style={{ color: 'white', display: 'flex', textAlign: 'center', paddingBottom: '20px',marginBottom: '20px', borderBottom: '1px solid #8FBE0D'}}

export default function Profile({ data }) {

  return (
    <>
  
      <div style={{ height: '70px' }}></div>
      <div className='profile' css={{
        flexDirection: 'column',
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        paddingBottom: '20px',
        marginBottom: '20px',
        '@media (min-width: 720px)': {
          flexDirection: `row`,
        },

      }}>
        <div css={{
          width:'100%',
          height:'auto',
          margin:'auto',
      
          '@media (min-width: 720px)': {
           minWidth: `250px`,
          },
        
        }}>
          <Img fluid={data.faceShot.childImageSharp.fluid} />
        </div>
        <div style={{ backgroundColor: '', alignSelf: 'center', justifyContent: 'center' }}>

          <p style={{ fontSize: '18px', margin: '25px' }}>
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