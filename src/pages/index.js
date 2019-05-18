import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from 'gatsby-image';
import './index.css';
import Stack from '../components/Stack';


const IndexPage = () => (

  <StaticQuery query={graphql`
  {
    faceShot: file(relativePath: {eq:"OllieNieminen.jpg"}){
          childImageSharp{
            fluid(maxWidth:1600){
              ...GatsbyImageSharpFluid
            }
          }
    }
    CSS: file(relativePath: {eq:"CSS.3.png"}){
      childImageSharp{
        fluid(maxWidth:300){
          ...GatsbyImageSharpFluid
        }
      }
}
react: file(relativePath: {eq:"react.png"}){
  childImageSharp{
    fluid(maxWidth:300){
      ...GatsbyImageSharpFluid
    }
  }
}
html: file(relativePath: {eq:"html.png"}){
  childImageSharp{
    fluid(maxWidth:300){
      ...GatsbyImageSharpFluid
    }
  }
}
node: file(relativePath: {eq:"node.png"}){
  childImageSharp{
    fluid(maxWidth:300){
      ...GatsbyImageSharpFluid
    }
  }
}
mongo: file(relativePath: {eq:"mongo.png"}){
  childImageSharp{
    fluid(maxWidth:300){
      ...GatsbyImageSharpFluid
    }
  }
}
express: file(relativePath: {eq:"express.png"}){
  childImageSharp{
    fluid(maxWidth:300){
      ...GatsbyImageSharpFluid
    }
  }
}
firebase: file(relativePath: {eq:"firebase.png"}){
  childImageSharp{
    fluid(maxWidth:300){
      ...GatsbyImageSharpFluid
    }
  }
}
  }
    `} render={(data) => {
      const frontEnd = {
        title:'FRONT END',
        imgArray: [data.CSS.childImageSharp.fluid, data.react.childImageSharp.fluid, data.html.childImageSharp.fluid ]
      };
      const backEnd = {
        title:'BACK END',
        imgArray: [data.node.childImageSharp.fluid, data.mongo.childImageSharp.fluid, data.express.childImageSharp.fluid, data.firebase.childImageSharp.fluid ]
      }
      const tools = {
        title:'TOOLS',
        imgArray: [data.CSS.childImageSharp.fluid, data.react.childImageSharp.fluid, data.html.childImageSharp.fluid ]
      }
      console.log('data', data);
      return (
        <Layout>
          {/* image and profile container*/}
          <div className='profile' style={{ display: 'flex', textAlign: 'center' }}>
            <Img fluid={data.faceShot.childImageSharp.fluid} />

            <div style={{ backgroundColor: '', alignSelf: 'center', justifyContent: 'center' }}>
              <p style={
                {
                  margin: ' 0 0 0 30px',
                  padding: '20px 0 0 0 ',
                  textAlign: 'left',
                  fontSize: '50px'
                }}>"</p>
              <p style={{ fontSize: '30px', margin: '30px' }}>
                Full Stack Software Developer with a
                passion for diving under the hood to get a
                deeper understanding on new technology.
                When I'm not helping my friends fix something
                 they broke, you can find me enjoying the outdoors.
              </p>
              <p style={{
                textAlign: 'right',
                fontSize: '50px',
                marginRight: '30px',
                padding: '0 0 30px 0'
              }}>"</p>
            </div>
          </div>
          {/* stack container */}
          <section className='stack-container' style={{
            display: 'flex',
            height: '600px',
            backgroundColor: 'silver'

          }}>
            <div className='tab' style={
              {
                width: '125px',
                backgroundColor: 'blue',
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                textAlign: 'center',
                display: 'flex'


              }
            }>
              <h2 style={{
                alignSelf: 'center',
                margin: 'auto',
                fontSize: '50px'
              }}>MY STACK</h2>
            </div>
            <section className='stack' style={
              {
                display: 'flex',
                flexGrow: '1'

              }
            }>
            <Stack title={frontEnd.title} imgArray={frontEnd.imgArray}/>
            <Stack title={backEnd.title} imgArray={backEnd.imgArray}/>
            <Stack title={tools.title} imgArray={tools.imgArray}/>
            </section>
          </section>


          <Link to="/page-2">Go back to the homepage</Link>
        </Layout>

      )
    }} />


)

export default IndexPage
