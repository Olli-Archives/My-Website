import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact({ contactArray }) {
  function RenderIcon({ contact }) {
    if (contact.type === 'brand') {
      console.log('rendering', contact.image);
      return <FontAwesomeIcon style={{ color: "white", alignSelf: 'center'}} icon={['fab', contact.image]} />
    }
    else {
      console.log('rendering', contact.image);
      return <FontAwesomeIcon icon={contact.image} style={{ color: "white", alignSelf: 'center' }} />
    }
  }

  const contact = contactArray.map(contact => {
    return (
      <li>
        <div>
          <a css={{display:'flex', justifyContent:'center', marginRight:'12px'}} href={contact.website}>
            <RenderIcon contact={contact} />
          </a>
        </div>
        <div>
          <p>{contact.contact}</p>
        </div>
      </li>
    )
  })
  return contact;
}

Contact.propTypes = {
  contactArray: PropTypes.array.isRequired
}