import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import Stack from './Stack';



export default function Section({ className, tabTitle, data }) {
  const frontEnd = {
    title: 'FRONT END',
    imgArray: [data.CSS.childImageSharp.fluid, data.react.childImageSharp.fluid, data.html.childImageSharp.fluid]
  };
  const backEnd = {
    title: 'BACK END',
    imgArray: [data.node.childImageSharp.fluid, data.mongo.childImageSharp.fluid, data.express.childImageSharp.fluid, data.firebase.childImageSharp.fluid]
  }
  const tools = {
    title: 'TOOLS',
    imgArray: [data.github.childImageSharp.fluid, data.jest.childImageSharp.fluid, data.npm.childImageSharp.fluid]
  }

  return (
    <section className={className} css={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Tab title={tabTitle} />
      <section className='stack' css={{
          display: 'flex',
          flexDirection:'column',
          flexGrow: '1',
          color: 'white',
          '@media (min-width: 720px)': {
            flexDirection: `row`,
          }
      }}>
   
        <Stack title={frontEnd.title} imgArray={frontEnd.imgArray} />
        <Stack title={backEnd.title} imgArray={backEnd.imgArray} />
        <Stack title={tools.title} imgArray={tools.imgArray} />
      </section>

    </section>
  )

}

Section.propTypes = {
  className: PropTypes.string.isRequired,
  tabTitle: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}