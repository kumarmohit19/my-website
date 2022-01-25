import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ['Developer', 'Designer', 'Engineer'],
      backDelay: 1500,
      backSpeed: 60,
    })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='img-container'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There. I'm</h2>
          <h1>Kumar Mohit</h1>
          <h3>
            Application <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='down arrow' />
        </a>
      </div>
    </div>
  )
}
