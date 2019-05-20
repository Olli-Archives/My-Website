import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from 'gatsby-image';
import './index.css';
import Stack from '../components/Stack';
import Tab from '../components/Tab';
import Section from '../components/Section';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {  faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons';


 
library.add(fab, faCoffee, faPhone );


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
github: file(relativePath: {eq:"github.png"}){
  childImageSharp{
    fluid(maxWidth:300){
      ...GatsbyImageSharpFluid
    }
  }
}
jest: file(relativePath: {eq:"jest.png"}){
  childImageSharp{
    fluid(maxWidth:300){
      ...GatsbyImageSharpFluid
    }
  }
}
npm: file(relativePath: {eq:"npm.png"}){
  childImageSharp{
    fluid(maxWidth:300){
      ...GatsbyImageSharpFluid
    }
  }
}
phone: file(relativePath: {eq:"phone-white.jpg"}){
  childImageSharp{
    fluid(maxWidth:300){
      ...GatsbyImageSharpFluid
    }
  }
}
  }
    `
  } render={(data) => {
      return (
        <Layout>
          <Profile data={data}/>
          <Contacts data={data}/>
          <Section className='stack-container' tabTitle='STACK' data={data}/>
          <Projects className='projects-container' tabTitle='PROJECTS' data={data}/>
          <Link to="/page-2">Go back to the homepage</Link>
        
        </Layout>
      )
    }} />


)

export default IndexPage
