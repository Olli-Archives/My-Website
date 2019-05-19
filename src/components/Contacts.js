import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import './contacts.css';


export default function Contacts({data}){
  console.log('data in contacts', data)
  const contactArray=[{image:data.phone.childImageSharp.fluid, contact:'814 410 7366'}]
  const contactInfo= <Contact contactArray={contactArray}/>

  return(
    <ul>
      {contactInfo}
    </ul>
  )
}

Contacts.propTypes={
data:PropTypes.object.isRequired
}
