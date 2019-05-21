import React from 'react';
import Tab from './Tab';
import Project from './Project';

export default function Projects({ className, tabTitle }) {

  const studioTaimela = ` We are Excited to be collaborating with Studio Taimela
  in creating their olince precense.`;

  const usgsRiverData = `This full-stack browser based web application was the 
  product of my love for the outdoors and the need for a single go-to site for 
  river information used for white water kayaking and fishing.  The highlights 
  of this application is easy access to live river data by the use of favorites. 
   This app is powered by the USGS API, and the back end is powered by Firebase.`;

  return (
    <section className={className} style={{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#2A2A2E',
      borderBottom: 'green'
    }}>
      <Tab title={tabTitle} />
      <div style={{display:'flex', flexDirection:'column'}}>
        <Project about={studioTaimela} title='STUDIO TAIMELA' />
        <Project about={usgsRiverData} title='USGS RIVER DATA' />
      </div>

    </section>
  )
}