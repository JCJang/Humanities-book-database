import AuthorNav from './AuthorPage/AuthorNav'
import AuthorInit from './AuthorPage/AuthorInit'
import AuthorPanel from './AuthorPage/AuthorPanel'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import {Route, BrowserRouter as Router} from 'react-router-dom'
import {useEffect, useState} from 'react'



const OpenedAuthor = ({xs,s,m,l,xl,columnFocus, setColumnFocus, authorFocus, setAuthorFocus, displayBookTitle, languageSetting, authorView, setAuthorView, selectedAuthor, displayEarliestPublicationYear, setShelfId, setBookNumber}) => {


  const [expandFurtherReading, setExpandFurtherReading] = useState(false)
  const [authorBookTitle, setAuthorBookTitle] = useState('')
  const [authorPublicationYear, setAuthorPublicationYear] = useState('')

  useEffect(()=>{
    setAuthorBookTitle(displayBookTitle)
  },[selectedAuthor])

  useEffect(()=>{
  setAuthorPublicationYear(displayEarliestPublicationYear)
},[selectedAuthor])


  return (
    <div className={l?"Row":"Column"} style={{color:"var(--paper)",backgroundColor:"var(--ink)",height:l?"var(--panelheight)":columnFocus!=="detailspanel"?"4rem":m?"var(--focusedpaneltablet)":"var(--focusedpanelmobile)",overflow:"hidden",position:"relative"}}>

  <div className="Column" style={{maxWidth:"100%", position:columnFocus==="detailspanel"?"relative":"absolute", visibility:columnFocus==="detailspanel"?"visible":"hidden", left:columnFocus==="detailspanel"?"0px":"110rem"}}>
  <AuthorPanel expandFurtherReading={expandFurtherReading} setExpandFurtherReading={setExpandFurtherReading} selectedAuthor={selectedAuthor} languageSetting={languageSetting} setShelfId={setShelfId} setBookNumber={setBookNumber} setColumnFocus={setColumnFocus}/>
  </div>

  <div className="Column" style={{flex:"4 4", maxWidth:"100%", position:columnFocus==="detailspanel"?"relative":"absolute", visibility:columnFocus==="detailspanel"?"visible":"hidden", left:columnFocus==="detailspanel"?"0px":"110rem"}}>
    <AuthorNav selectedAuthor={selectedAuthor} setColumnFocus={setColumnFocus} setAuthorFocus={setAuthorFocus} authorBookTitle={authorBookTitle}/>


  <AuthorInit selectedAuthor={selectedAuthor} authorFocus={authorFocus} expandFurtherReading={expandFurtherReading} setAuthorFocus={setAuthorFocus} authorBookTitle={authorBookTitle} authorPublicationYear={authorPublicationYear} languageSetting={languageSetting} setShelfId={setShelfId}/>
    </div>


    <h5 className={l?"tabauthor tab-lr h5tab-l":m?"h5tab-m":"h5tab-s"} style={{opacity:"0.9",cursor:columnFocus==="shelfpanel"?"pointer":"",display:l?"":columnFocus==="detailspanel"?"none":""}} onClick={()=>{if(columnFocus==="init"){return;}else{setColumnFocus("detailspanel")}}}>
    {selectedAuthor.authorWikiTitle?selectedAuthor.authorWikiTitle.slice(0,45):"Author Details"}    {columnFocus!=="detailspanel"&&
    <span className="subtitle2" style={{textTransform: "none"
,position:"absolute", bottom:"0"}}>expand <AddCircleIcon style={{alignSelf:"center",width:"1rem",height:"1rem"}}/></span>}
    </h5>
    </div>

  )
}

export default OpenedAuthor
