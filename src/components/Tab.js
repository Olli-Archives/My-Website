import React from 'react';
import PropTypes from 'prop-types';
import TabIndicator from '../images/bracket.svg';
import './tab.css';

export default function Tab({ title }) {

  return (
    <div className='tab' style={
      {
        width: '125px',
        backgroundColor: '#2A2A2E',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
        
      }
    }>
      <TabIndicator style={{
   
      }} />
      <h2 style={{
        color: '#9c0',
        alignSelf: 'center',
      

        fontSize: '50px'
      }}>{title}</h2>
    
    </div>
  )

}

Tab.propTypes = {
  title: PropTypes.string.isRequired
}