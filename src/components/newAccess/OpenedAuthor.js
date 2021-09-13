import AuthorNav from './AuthorPage/AuthorNav'
import AuthorInit from './AuthorPage/AuthorInit'
import AuthorBg from './AuthorPage/AuthorBg'
import AuthorBio from './AuthorPage/AuthorBio'
import AuthorPanel from './AuthorPage/AuthorPanel'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

import {Route, BrowserRouter as Router} from 'react-router-dom'
import {useEffect, useState} from 'react'



const OpenedAuthor = ({ columnFocus, setColumnFocus, displayBookTitle, languageSetting, authorView, setAuthorView, selectedAuthor, displayEarliestPublicationYear}) => {

  const [authorFocus, setAuthorFocus] = useState('init')
  return (
    <div style={{color:"var(--paper)",backgroundColor:"var(--ink)",display:"flex", flex:"1 1",height:"var(--panelheight)",overflow:"hidden",position:"relative"}}>
    <AuthorPanel/>

    <div className="Column" style={{flex:"3 3", position:columnFocus==="detailspanel"?"relative":"absolute", visibility:columnFocus==="detailspanel"?"visible":"hidden", left:columnFocus==="detailspanel"?"0px":"110rem"}}>
    <AuthorNav selectedAuthor={selectedAuthor} setAuthorFocus={setAuthorFocus} displayBookTitle={displayBookTitle}/>


  <AuthorInit selectedAuthor={selectedAuthor} authorFocus={authorFocus} setAuthorFocus={setAuthorFocus} displayBookTitle={displayBookTitle} displayEarliestPublicationYear={displayEarliestPublicationYear} languageSetting={languageSetting}/>
    </div>

    <div className="Column" style={{position:columnFocus==="detailspanel"?"relative":"absolute", visibility:columnFocus==="detailspanel"?"visible":"hidden", left:columnFocus==="detailspanel"?"0px":"110rem", marginTop:"1rem"}}>
    <span className="btn darkbtn" style={{width:"6rem",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1rem"}}><ArrowBackRoundedIcon/><span  style={{width:"85%", padding:"0 0.5rem"}} onClick={()=>{setColumnFocus("shelfpanel")}}>Back to Shelf</span></span>
    </div>
    <h5 onClick={()=>setColumnFocus("detailspanel")} style={{width:"4rem", alignSelf:"center", height:"80vh", writingMode:"vertical-lr", transform:"rotate(180deg)", transformOrigin:"center center"}}>
    {selectedAuthor.authorWikiTitle}</h5>
    </div>

  )
}

export default OpenedAuthor
