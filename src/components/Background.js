import React from 'react'
import './Background.css'

function Background() {
  return (
    <>
        <video autoPlay loop muted>
            <source src='/videos/vid_01.mp4' type='video/mp4'></source>
        </video>
    </>
  )
}

export default Background