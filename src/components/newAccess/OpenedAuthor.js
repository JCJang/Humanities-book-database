import AuthorNav from './AuthorPage/AuthorNav'
import AuthorInit from './AuthorPage/AuthorInit'
import AuthorPanel from './AuthorPage/AuthorPanel'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import createSvgIcon from "@material-ui/icons/utils/createSvgIcon";
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {useEffect, useState} from 'react'

const ArrowBackArrowCircle = createSvgIcon(
  <>
  <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path d="M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10c5.514-.001 10-4.487 10-10c0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8c.001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z" fill="currentColor"/><path d="M12.012 7.989l-4.005 4.005l4.005 4.004v-3.004h3.994v-2h-3.994z" fill="currentColor"/>
  </>
  );



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

const h5tabstyle = () => {
  return {
    opacity: "0.9",
    cursor: columnFocus === "shelfpanel" ? "pointer" : "",
    display: l ? "" : columnFocus === "detailspanel" ? "none" : "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: l ? "" : m ? "2rem" : "1.5rem"
  }
}

  return (
    <div className={l?"Row":"Column"} style={{color:"var(--paper)",backgroundColor:"var(--ink)",height:l?"var(--panelheight)":columnFocus!=="detailspanel"?"4rem":m?"var(--focusedpaneltablet)":"var(--focusedpanelmobile)",overflow:"hidden",position:"relative"}}>

  <div className="Column" style={{maxWidth:"100%", position:columnFocus==="detailspanel"?"relative":"absolute", visibility:columnFocus==="detailspanel"?"visible":"hidden", left:columnFocus==="detailspanel"?"0px":"110rem"}}>
  <AuthorPanel xs={xs} s={s} m={m} l={l} xl={xl} expandFurtherReading={expandFurtherReading} setExpandFurtherReading={setExpandFurtherReading} selectedAuthor={selectedAuthor} languageSetting={languageSetting} setShelfId={setShelfId} setBookNumber={setBookNumber} setColumnFocus={setColumnFocus}/>
  </div>

  <div className="Column" style={{flex:"4 4", maxWidth:"100%", position:columnFocus==="detailspanel"?"relative":"absolute", visibility:columnFocus==="detailspanel"?"visible":"hidden", left:columnFocus==="detailspanel"?"0px":"110rem"}}>
    <AuthorNav xs={xs} s={s} m={m} l={l} xl={xl} selectedAuthor={selectedAuthor} setColumnFocus={setColumnFocus} setAuthorFocus={setAuthorFocus} authorBookTitle={authorBookTitle}/>


  <AuthorInit xs={xs} s={s} m={m} l={l} xl={xl} selectedAuthor={selectedAuthor} authorFocus={authorFocus} expandFurtherReading={expandFurtherReading} setAuthorFocus={setAuthorFocus} authorBookTitle={authorBookTitle} authorPublicationYear={authorPublicationYear} languageSetting={languageSetting} setShelfId={setShelfId}/>
    </div>

    <h5 className={l?"tabauthor tab-lr h5tab-l":m?"h5tab-m":"h5tab-s"} style = {h5tabstyle()} onClick={()=>{if(l && columnFocus==="init"){return;}else{setColumnFocus("detailspanel")}}}>

    {selectedAuthor.authorWikiTitle?selectedAuthor.authorWikiTitle.slice(0,45):"Author Details"}

    {columnFocus!=="detailspanel"&&
    <span className="subtitle2" style={{display:"flex",textTransform: "none"
,position:l?"absolute":"relative", left:l?"1rem":"", bottom:l?"0":""}}><p>expand</p><AddCircleOutlineOutlinedIcon style={{alignSelf:"center",width:"1rem",height:"1rem",marginLeft:!l&&"0.5rem",marginTop:l&&"0.5rem"}}/></span>}

    </h5>
    </div>

  )
}

export default OpenedAuthor
