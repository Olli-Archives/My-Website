import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './contacts.css';


export default function Contacts({ data }) {
  console.log('data in contacts', data)
  const contactArray = [{ image: 'phone', contact: '814 410 7366', type: 'icon' },
  { image: 'github', contact: 'https://github.com/SteelFace87', type: 'brand' },
  { image: 'linkedin', contact: 'https://www.linkedin.com/in/nieminenolli/', type: 'brand' }
  ];
  const contactInfo = <Contact contactArray={contactArray} />


  return (
    <section id='contacts'
      css={{
        flexDirection: 'column',
        borderBottom: '1px solid #8FBE0D',
        '@media (min-width: 720px)': {
          display: `row`,
          flexDirection: 'row',
          borderBottom: 'none'
        },
      }}
    >
      <p css={{
        alignSelf: 'center',
        color: '#99CC00',
        fontFamily: 'georgia',
        letterSpacing: '8px',
        fontSize: '22px',
        '@media (min-width: 720px)': {
          display: `none`,
        },
      }}>CONTACT</p>
      <Tab title='CONTACT' />
      <ul css={{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: '12px',
        '@media (min-width: 720px)': {
          fontSize: `20px`,
        },
        
        
      }}>
        {contactInfo}
      </ul>

    </section>
  )
}

Contacts.propTypes = {
  data: PropTypes.object.isRequired
}
