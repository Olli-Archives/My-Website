import React from 'react';
import Tab from './Tab';
import Project from './Project';

export default function Projects({className, tabTitle}){
  return(
    <section className={className} style={{
      display: 'flex',
      height: '400px',
      backgroundColor: 'coral'
    }}>
      <Tab title={tabTitle} />
      <Project/>
   
    </section>
  )
}