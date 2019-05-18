import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from 'gatsby-image';
import './index.css';


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
  }
    `} render={(data) => {
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
              <div className='front-end-stack' style={{
                backgroundColor: 'green',
                flexGrow: 1,
                textAlign: 'center'

              }}>
                <h2 style={{
                  marginTop: '30px',
                  fontSize: '30px'
                }}>FRONT END</h2>
                <ul style={
                  {
                    listStyle: 'none'
                  }}>
                  <li ><Img fluid={data.CSS.childImageSharp.fluid} /></li>
                  <li>html</li>
                  <li>css</li>
                </ul>
              </div>
              <div className='back-end-stack' style={{ backgroundColor: 'red', flexGrow: 1 }}>
                <h2>BACK END</h2>
              </div>
              <div className='tools' style={{ backgroundColor: 'silver', flexGrow: 1 }}>
                <h2>TOOLS</h2>
              </div>
            </section>
          </section>


          <Link to="/page-2">Go back to the homepage</Link>
        </Layout>

      )
    }} />


)

export default IndexPage
