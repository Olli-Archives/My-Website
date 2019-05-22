import React from 'react';
import AOS from 'aos';
import classNames from 'classnames';
import 'aos/dist/aos.css'
import './tab.css';
import { Watch } from 'scrollmonitor-react';
import PropTypes from 'prop-types';
import TabIndicator from '../images/bracket.svg';
import './tab.css';
import Style from '../dynamic-style/Style.js';




function Tab({ title, isInViewport }) {




  const className = `tab-${isInViewport}`;
  return (
    <div className={className} style={
      {
        width: '100px',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
        
      }
    }>
      <TabIndicator style={{
      minHeight:'100px'
      }} />
      
      <Style>{title}</Style>
  
    
    </div>
  )

}

Tab.propTypes = {
  title: PropTypes.string.isRequired
}

export default Watch(Tab); 