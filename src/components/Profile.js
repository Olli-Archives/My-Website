import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Logo from "../images/logo.svg";

export default function Profile({ data }) {
  return (
    <>
      <div css={
        { height: '79px',
        '@media (min-width: 720px)': {
          display: 'none'
        }
     }}></div>

      <secttion>
        <div css={{
          '@media (min-width: 720px)': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

          }
        }}>
          <Img fluid={data.faceShot.childImageSharp.fluid} css={{
            '@media (min-width: 720px)': {
              borderRadius: '100%',
              width: '200px',
              height: '200px',
              alignSelf: 'center',
              zIndex: '2',
              shapeOutside: 'circle()',
            }
          }} />
          <div css={{
            '@media (min-width: 720px)': {
              backgroundColor: '8E8686',
              width: '100%',
              alignSelf: 'center',
              height: '100px',
              position: 'relative',
              top: '-100px',
              borderLeft: '1px solid white',
              borderTop: '1px solid white',
              borderRight: '1px solid white',
           
             
              
            }
          }}>
          </div>
          <div css={{
            '@media (min-width: 720px)': {
              backgroundColor: '8E8686',
              width: '100%',
              alignSelf: 'center',
              position: 'relative',
              top: '-100px',
              textAlign: 'left',
              padding:'60px',
              borderBottom: '1px solid white',
              borderLeft: '1px solid white',
              borderRight: '1px solid white',
              
            }
          }}>
            <Logo
              css={{
                height: 'auto',
                width: '250px',
                float: 'left',
                paddingRight: '20px'
              }}
            />
            <p
              css={{
                '@media (min-width: 720px)': {
                  fontSize: '22px',
                  color: '#99CC00'


                }
              }}
            >
              Full Stack Software Developer with 8 years of Engineering
              experience and a passion for diving under the hood to get a
          deeper understanding on new technology.
          When I'm not helping my friends fix something
           they broke, you can find me enjoying the outdoors.
              </p>
          </div>


        </div>

      </secttion>
      {/* <section css={{
        '@media (min-width: 720px)': {
          width: '80%',
          height: '100%',
          margin: '20px auto 0 auto',
          color: 'white',
        }
      }}>
        <Img fluid={data.faceShot.childImageSharp.fluid} css={{
          '@media (min-width: 720px)': {
            borderRadius: '100%',
            width: '200px',
            height: '200px',
            alignSelf: 'center',
            float: 'left',
            shapeOutside: 'circle()',
          }
        }} />
        <p css={{
          fontSize:'14px',
          '@media (min-width: 720px)': {
            minHeight:'250px',
            fontSize: '26px',
            position: 'relative',
            left: '20px',   
          }
        }}>
          Full Stack Software Developer with a
          passion for diving under the hood to get a
          deeper understanding on new technology.
          When I'm not helping my friends fix something
           they broke, you can find me enjoying the outdoors.
      </p>
      </section> */}
      {/* <div css={{
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
          width: '100%',
          height: 'auto',
          '@media (min-width: 720px)': {
            minWidth: `250px`,
          },

        }}>
          <Img fluid={data.faceShot.childImageSharp.fluid} css={{
            '@media (min-width: 720px)': {
              borderRadius: '100%',
              width: '300px',
              height: '300px',
              alignSelf: 'center',
            }
          }} />
        </div>
        <div css={{ backgroundColor: '', alignSelf: 'center', justifyContent: 'center', padding: '0', margin: '0' }}>

          <p style={{ fontSize: '18px', margin: '55px 25px 25px 25px' }}>
            Full Stack Software Developer with a
            passion for diving under the hood to get a
            deeper understanding on new technology.
            When I'm not helping my friends fix something
             they broke, you can find me enjoying the outdoors.
      </p>
        </div>
      </div> */}
    </>
  )
}

Profile.propTypes = {
  data: PropTypes.object.isRequired
}