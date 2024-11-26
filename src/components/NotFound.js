import '../assets/css/global.css';
import { useContext, useEffect } from 'react'
import '../assets/css/NotFound.css';
import {Page} from '../contexts/PageContext'

function NotFound() {
  const {setPage} = useContext(Page)
  
  useEffect(() => {
    setPage('not found')
  }, [])

  return (
    <div className="margin-top center-text"> 
      <h1 className="center-text margin-bottom home-about-header">
        Page Not Found
      </h1>

      <p>
        Looks like you landed somewhere I didn't write a Route for. 
      </p>
    </div>
  )
}

export default NotFound;