import { useContext } from 'react'
import '../assets/css/global.css'
import '../assets/css/NavBar.css'
import {Link} from "react-router-dom"
import { Page } from '../contexts/PageContext'

const site_pages = [
  ['/', 'Home'],
  ['projects', 'Projects'],
]

function NavBar() {

  const {page} = useContext(Page)

  return (
    <div className="navbar-container"> 

      {site_pages.map((this_page) => {

        return page === this_page[0] ? (
          <Link 
            to={this_page[0]} 
            className="navbar-element-active" 
            key={this_page[0]}
          >
            {this_page[1]}
          </Link>
        ) : (
          <Link 
            to={this_page[0]} 
            className="navbar-element" 
            key={this_page[0]}
          >
            {this_page[1]}
          </Link>
        )
      })}

    </div>
  )
}

export default NavBar;