import React from 'react';



export default function Project({ about, image, title }) {
  return (
  
    
      <section css={{
        flexGrow: 1,
        textAlign: 'center',
        display: 'flex'

      }}>
        <div css={{ flexGrow: 2, backgroundColor: '2a2a2e' }}>
          <ul css={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <li><p css={{
              color: '#99CC00',
              marginTop: '25px',
              fontSize: '16px',
              letterSpacing: '8px'
            }}>{title}:</p></li>
            <li><p css={
              {
                textAlign: 'left',
                fontSize: '14px',
                paddingBottom: '30px',
                '@media (min-width: 720px)': {
                  fontSize: '25px'
                }
              }}>
              {about}
            </p></li>

          </ul>
        </div>
      </section>
  )
}