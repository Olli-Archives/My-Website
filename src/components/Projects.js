import React from 'react';
import Tab from './Tab';
import Project from './Project';
import MobileDevider from './MobileDevider';


export default function Projects({ className, tabTitle }) {

  const studioTaimela = ` I am excited to be collaborating with Studio Taimela
  in creating their olince precense.`;


  return (
    <>
      <MobileDevider title='WORKING ON' />
      <section className={className} css={{
        margin: '0 20px 0 20px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#2A2A2E',
        borderBottom: 'green'
      }}>
        <Tab title={tabTitle} />
        <div css={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Project about={studioTaimela} title='STUDIO TAIMELA' />

        </div>

      </section>
    </>
  )
}