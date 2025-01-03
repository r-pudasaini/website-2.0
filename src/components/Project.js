import '../assets/css/global.css'
import '../assets/css/Project.css'
import { useContext, useEffect } from 'react'
import {Page} from '../contexts/PageContext'

  
function Project() {

  const {setPage} = useContext(Page)
  
  useEffect(() => {
    setPage('projects')
  }, [setPage])

  return (
    <div className="margin-top flex-col"> 
      <h1 className="center-text margin-bottom home-about-header">
        My Software Projects 
      </h1>

      <div className="flex-col center-contents-horizontal project-link-container">
        <div className='project-link-element'> 
          <a href="http://webdev.cs.vt.edu:8080/RiyosBookstoreReactTransact/" target="_blank" rel="noopener noreferrer">Vivil Books</a> 
          <div>A fictitious, model bookstore I made. The front-end was created using React, and the Backend using Java/Tomcat.</div> 
        </div>
        <div className='project-link-element'> 
          <a href="https://sub20-362137876022.us-east4.run.app" target="_blank" rel="noopener noreferrer">Sub20 </a> 
          <div>A 2-player Chatroom game I made that runs over HTTP. The client App and server API are both publicly available on my GitHub</div> 
        </div>
        <div className='project-link-element'> 
          <a href="https://r-pudasaini.github.io/coin-watch/" target="_blank" rel="noopener noreferrer">CoinWatch </a> 
          <div>A React Application I made that tracks various cryptocurrencies</div> 
        </div>
      </div>

    </div>
  )
}

export default Project;