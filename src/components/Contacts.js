import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './contacts.css';


export default function Contacts({ data }) {
  console.log('data in contacts', data)
  const contactArray = [{ image: 'phone', contact: '814 410 7366',type:'icon' },
  { image:'github', contact: 'https://github.com/SteelFace87', type:'brand'},
  { image:'linkedin', contact: 'https://www.linkedin.com/in/nieminenolli/', type:'brand'}
];
  const contactInfo = <Contact contactArray={contactArray} />


  return (
    <section id='contacts'>
      <Tab title='CONTACT'/>
      <ul style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        {contactInfo}
      </ul>

    </section>
  )
}

Contacts.propTypes = {
  data: PropTypes.object.isRequired
}
