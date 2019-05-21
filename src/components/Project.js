import React from 'react';
export default function Project({about, image, title}) {
  return (
    <section style={{
      flexGrow: 1,
      textAlign: 'center',
      display: 'flex'

    }}>
      <div style={{ flexGrow: 2, backgroundColor: '2a2a2e' }}>
        <ul>
          <li><p style={{
        color: '#99CC00',
        marginTop: '30px',
        fontSize: '22px',
        letterSpacing: '8px'
      }}>{title}:</p></li>
          <li><p style={{textAlign: 'left', fontSize: '25px'}}>
             {about}
            </p></li>
 
        </ul>
      </div>
      <div style={{ flexGrow: 1, backgroundColor: 'orange' }}></div>

    </section>
  )
}