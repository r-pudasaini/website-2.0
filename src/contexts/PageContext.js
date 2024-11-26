import { createContext } from "react";
import { useState } from "react";

export const Page = createContext()

function PageContext({children}) {

  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  return (
    <Page.Provider value={{page:currentPage, setPage:setCurrentPage}}>{children}</Page.Provider>
  )

}

export default PageContext;