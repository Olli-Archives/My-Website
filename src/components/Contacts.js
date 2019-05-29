import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import Tab from './Tab';
import MobileDevider from './MobileDevider';
import './contacts.css';


export default function Contacts({ data }) {
  console.log('data in contacts', data)
  const contactArray = [{ image: 'phone', contact: '814 410 7366', type: 'icon', website: 'www.olli.codes' },
  { image: 'github', contact: 'GIT-HUB', type: 'brand', website: 'https://github.com/SteelFace87' },
  { image: 'linkedin', contact: 'LINKEDIN', type: 'brand', website: 'https://www.linkedin.com/in/nieminenolli/' }
  ];
  const contactInfo = <Contact contactArray={contactArray} />


  return (
    <>
    <MobileDevider title='CONTAC'/>
      <section id='contacts'
        css={{
          flexDirection: 'column',
          '@media (min-width: 720px)': {
            display: `row`,
            flexDirection: 'row',
            marginTop:0,
            borderBottom: 'none'
          },
        }}
      >
      
        <Tab title='CONTACT' />
        <ul css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
          fontSize: '18px',
          '@media (min-width: 720px)': {
            fontSize: `20px`,
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%'
          },


        }}>
          {contactInfo}
        </ul>

      </section>
    </>
  )
}

Contacts.propTypes = {
  data: PropTypes.object.isRequired
}
