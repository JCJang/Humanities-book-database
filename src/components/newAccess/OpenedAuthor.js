import AuthorNav from './AuthorPage/AuthorNav'
import AuthorInit from './AuthorPage/AuthorInit'
import AuthorBg from './AuthorPage/AuthorBg'
import AuthorBio from './AuthorPage/AuthorBio'
import AuthorPanel from './AuthorPage/AuthorPanel'

import {Route, BrowserRouter as Router} from 'react-router-dom'
import {useEffect, useState} from 'react'



const OpenedAuthor = ({ columnFocus, setColumnFocus, displayBookTitle, selectedAuthor}) => {
  return (

    <Router>

    <div style={{color:"var(--paper)",backgroundColor:"var(--ink)",display:"flex", flex:"1 1",height:"var(--panelheight)"}}>
    <AuthorPanel/>

    <div className="Column" style={{flex:"3 3"}}>
    <AuthorNav selectedAuthor={selectedAuthor}/>
    <Route path = "/" exact>
    <AuthorInit selectedAuthor={selectedAuthor}/>
    </Route>
    <Route path = "/bio">
    <AuthorBio selectedAuthor={selectedAuthor}/>
    </Route>
    <Route path = "/background">
    <AuthorBg selectedAuthor={selectedAuthor}/>
    </Route>
    </div>

    <div className="Column" style={{flex:"1 1"}}>
    hi
    </div>
    <h5 onClick={()=>setColumnFocus("detailspanel")} style={{width:"4rem", alignSelf:"center", height:"80vh", writingMode:"vertical-lr", transform:"rotate(180deg)", transformOrigin:"center center"}}>
    {selectedAuthor.authorWikiTitle}</h5>
    </div>
    </Router>

  )
}

export default OpenedAuthor
