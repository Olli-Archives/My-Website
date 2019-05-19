import React from 'react';
export default function Project() {
  return (
    <section style={{
      flexGrow: 1,
      textAlign: 'center',
      display: 'flex'

    }}>
      <div style={{ flexGrow: 2, backgroundColor: 'purple' }}>
        <ul>
          <li><h2>Studio Taimela</h2></li>
          <li><p>
              We are Excited to be collaborating with Studio Taimela in creating their olince precense.
            </p></li>
 
        </ul>
      </div>
      <div style={{ flexGrow: 1, backgroundColor: 'orange' }}></div>

    </section>
  )
}