import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

//style={{ color: 'white', display: 'flex', textAlign: 'center', paddingBottom: '20px',marginBottom: '20px', borderBottom: '1px solid #8FBE0D'}}

export default function Profile({ data }) {

  return (
    <>
      <div style={{ height: '120px' }}></div>
      <div className='profile' css={{
        flexDirection: 'column',
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        paddingBottom: '20px',
        marginBottom: '20px',
        borderBottom: '1px solid #8FBE0D',
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
          {/* <p style={
          {
            margin: ' 0 0 0 30px',
            padding: '20px 0 0 0 ',
            textAlign: 'left',
            fontSize: '50px'
          }}>"</p> */}
          <p style={{ fontSize: '25px', margin: '25px' }}>
            Full Stack Software Developer with a
            passion for diving under the hood to get a
            deeper understanding on new technology.
            When I'm not helping my friends fix something
             they broke, you can find me enjoying the outdoors.
      </p>
          {/* <p style={{
          textAlign: 'right',
          fontSize: '50px',
          marginRight: '30px',
          padding: '0 0 30px 0'
        }}>"</p> */}
        </div>
      </div>
    </>
  )
}

Profile.propTypes = {
  data: PropTypes.object.isRequired
}