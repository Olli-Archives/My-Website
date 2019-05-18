import React from 'react';
import PropTypes from 'prop-types'

export default function Tab({title}){

  return(
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
      }}>{title}</h2>
    </div>
  )

}

Tab.propTypes = {
  title: PropTypes.string.isRequired
}