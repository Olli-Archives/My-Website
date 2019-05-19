import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function Contact({ contactArray }) {
  const contact = contactArray.map(contact => {
    return (
      <li>
        <div>
          <Img fluid={contact.image} />
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