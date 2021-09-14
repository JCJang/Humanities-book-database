import AuthorNav from './AuthorPage/AuthorNav'
import AuthorInit from './AuthorPage/AuthorInit'
import AuthorPanel from './AuthorPage/AuthorPanel'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import {Route, BrowserRouter as Router} from 'react-router-dom'
import {useEffect, useState} from 'react'



const OpenedAuthor = ({ columnFocus, setColumnFocus, authorFocus, setAuthorFocus, displayBookTitle, languageSetting, authorView, setAuthorView, selectedAuthor, displayEarliestPublicationYear}) => {


  const [expandFurtherReading, setExpandFurtherReading] = useState(false)


  return (
    <div style={{color:"var(--paper)",backgroundColor:"var(--ink)",display:"flex",height:"var(--panelheight)",overflow:"hidden",position:"relative"}}>
    {columnFocus==="detailspanel" && <AuthorPanel expandFurtherReading={expandFurtherReading} setExpandFurtherReading={setExpandFurtherReading} selectedAuthor={selectedAuthor} languageSetting={languageSetting}/>}

  <div className="Column" style={{flex:"4 4", maxWidth:"100%", position:columnFocus==="detailspanel"?"relative":"absolute", visibility:columnFocus==="detailspanel"?"visible":"hidden", left:columnFocus==="detailspanel"?"0px":"110rem"}}>
    <AuthorNav selectedAuthor={selectedAuthor} setColumnFocus={setColumnFocus} setAuthorFocus={setAuthorFocus} displayBookTitle={displayBookTitle}/>


  <AuthorInit selectedAuthor={selectedAuthor} authorFocus={authorFocus} expandFurtherReading={expandFurtherReading} setAuthorFocus={setAuthorFocus} displayBookTitle={displayBookTitle} displayEarliestPublicationYear={displayEarliestPublicationYear} languageSetting={languageSetting}/>
    </div>


    <h5  className="tab-lr tabauthor h5tab" style={{opacity:"0.9",cursor:columnFocus==="shelfpanel"?"pointer":""}} onClick={()=>{if(columnFocus==="init"){return;}else{setColumnFocus("detailspanel")}}}>
    {selectedAuthor.authorWikiTitle?selectedAuthor.authorWikiTitle.slice(0,35):"Author Details"}    {columnFocus!=="detailspanel"&&
    <span className="subtitle2" style={{textTransform: "none"
,position:"absolute", bottom:"0"}}>expand <AddCircleIcon style={{alignSelf:"center",width:"1rem",height:"1rem"}}/></span>}
    </h5>
    </div>

  )
}

export default OpenedAuthor
