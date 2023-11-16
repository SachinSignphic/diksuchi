import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AnimatedCursor from 'react-animated-cursor'
import { ReactLenis } from '@studio-freight/react-lenis'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ReactLenis root>
      <App />
      {/* <Cursor />  probably remove this and use blobity.. its more customizable*/}
      <AnimatedCursor
        color='164, 164, 164'
        trailingSpeed={10}
        // innerSize={8}
        innerScale={0.8}
        outerSize={20}
        outerScale={2}
        outerAlpha={0.2}
        // clickables={[{target: '.from-left img', color: '0, 0, 0'}]} // can change which element to target and change color
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
      />
    </ReactLenis>
  </BrowserRouter>

)
