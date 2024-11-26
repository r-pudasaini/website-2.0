import '../assets/css/global.css'
import '../assets/css/Project.css'
import { useContext, useEffect } from 'react'
import {Page} from '../contexts/PageContext'

  
function Project() {

  const {setPage} = useContext(Page)
  
  useEffect(() => {
    setPage('projects')
  }, [])

  return (
    <div className="margin-top flex-col"> 
      <h1 className="center-text margin-bottom home-about-header">
        My Software Projects 
      </h1>

      <div className="flex-col center-contents-horizontal">
        <div className='center-text'> 
          <a href="https://r-pudasaini.github.io/coin-watch/" target="_blank" rel="noopener noreferrer">CoinWatch: </a> A React Application I made that tracks various cryptocurrencies
        </div>
      </div>

    </div>
  )
}

export default Project;