import { useContext, useEffect } from 'react';
import '../assets/css/global.css';
import '../assets/css/Home.css';
import { Page } from '../contexts/PageContext';

import LinkedIn from '../assets/images/linkedin.png'
import GitHub from '../assets/images/github.png'
import Email from '../assets/images/email.png'

function Home() {

  const {setPage} = useContext(Page)
  
  useEffect(() => {
    setPage('/')
  }, [])

  return (
    <div className="margin-top flex-col"> 
      <h1 className="center-text margin-bottom home-about-header">
        About: Riyos Pudasaini
      </h1>

      <p className="center-text home-about-information">
        I am a graduate Computer Science student at Virginia Tech. I received my Bachelor's of Science in Computer Science from Virginia Tech in May 2024. This website contains various information about myself, my work, and my links if you'd like to connect. 
        <br></br>
        <br></br>
        Thanks for stopping by!
      </p>

      <div className="center-contents-horizontal center-contents-vertical home-link-row">

        <figure className="center-text">
              <img src={LinkedIn} width="48" height="48" />
              <figcaption><a href="https://www.linkedin.com/in/riyos-p-607157253/" target="_blank" rel="noopener noreferrer">LinkedIn</a></figcaption>
        </figure>

        <figure className="center-text">
              <img src={GitHub} width="48" height="48" />
              <figcaption><a href="https://github.com/r-pudasaini" target="_blank" rel="noopener noreferrer">GitHub</a></figcaption>
        </figure>

        <figure className="center-text">
              <img src={Email} width="48" height="48" />
              <figcaption><a href="mailto:riyos.kp@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></figcaption>
        </figure>

      </div>

    </div>
  )
}

export default Home;