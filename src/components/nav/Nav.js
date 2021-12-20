import Links from './Links'
import {useState,useEffect} from 'react'
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import { useTranslation } from 'react-i18next'

const Nav = ({xs, s, m, l, xl, authorView, columnFocus, setColumnFocus, languageSetting, setLanguageSetting}) => {
  const [languageSelectOpen, setLanguageSelectOpen] = useState(false)
const [routeFocus, setRouteFocus] = useState("/")
const {t, i18n} = useTranslation();


const colorForNav = () => {
  if(routeFocus==="/about"){
    return "var(--paper)"
  }else if (routeFocus==="/suggest") {
    return "var(--ink)"
  }else if (routeFocus==="/map") {
    return "var(--paper)"
  }else if (routeFocus==="/saved") {
    return "var(--ink)"
  }else if (routeFocus==="/" && !l) {
  return "var(--searchpaneltext)"
  }else{

        if(columnFocus==="init"){
          return "var(--searchpaneltext)";
        }else if(columnFocus==="shelfpanel"){
            return "var(--shelfpaneltext)";
        }else if(columnFocus==="detailspanel"){
          if(authorView===true){
            return "var(--paper)"
          }else {
            return "var(--detailspaneltext)";
          }
        }

}
}
//edd1b8

const background = () => {
  if(routeFocus==="/about"){
    return "var(--ink)"
  }else if (routeFocus==="/suggest") {
    return "#e9e7e3"
  }else if (routeFocus==="/map") {
    return "var(--shelfpaneltext)"
  }else if (routeFocus==="/saved") {
    return "#e6e6e6"
  }else if (routeFocus==="/" && !l) {
  return "var(--searchpanel)"
  }else{


  if(columnFocus==="init"){
    return "var(--searchpanel)";
  }else if(columnFocus==="shelfpanel"){
      return "var(--shelfpanel)";
  }else if(columnFocus==="detailspanel"){
    if(authorView===true){
      return "var(--ink)"
    }else {
      return "var(--detailspanel)";
    }
  }
}
}


  return (
    <nav className="Row transition" style={{
    width: "100vw",
    position:"absolute",
    background: background(),
    color: colorForNav(),
    height: "3.5rem",
    alignItems: "center",
    justifyContent:"space-between",
    zIndex:"40",
    display: "flex"}}>

        <div className="overline-logo" style={{opacity:0.8, padding:"0.2rem 3rem 0 3rem"}}>Humanities Database</div>
        <div className="Row">
        <Links routeName="/" label={t("Nav.home")} routeFocus={routeFocus} colorForNav={colorForNav} setRouteFocus={setRouteFocus} Icon={SearchOutlinedIcon}/>

        <Links routeName="/suggest" label={t("Nav.suggest")} routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={RateReviewOutlinedIcon}/>

        <Links routeName="/map" label={t("Nav.map")} routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={MapOutlinedIcon}/>

        <Links routeName="/saved" label={t("Nav.saved")} routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={BookmarkBorderOutlinedIcon}/>

        <Links routeName="/about" label={t("Nav.about")} routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={CodeOutlinedIcon}/>
        </div>
        <div  id="languageDiv" onClick={()=>{setLanguageSelectOpen(!languageSelectOpen)}} style={{height:"3.5rem",display:"flex",alignItems:"center", justifyContent:"center", position:"relative", padding:"0.2rem 1rem 0 1.5rem", cursor:"pointer"}}>
        <label id="languageSetting" className="subtitle2" style={{opacity:0.8, cursor:"pointer"}}><LanguageOutlinedIcon/><ArrowDropDownOutlinedIcon/></label>
        <div  style={{position:"absolute",opacity:"1",top:"3.5rem",right:"0.5rem",boxShadow: "var(--heavyshadow)",borderRadius:"5px",overflow:"hidden",display:!languageSelectOpen&&"none",cursor:"pointer"}}>
     <div className="languageLabel" onClick={()=>{setLanguageSetting("en");setLanguageSelectOpen(false);}} value="en">English</div>
     <div className="languageLabel" onClick={()=>{setLanguageSetting("zh-tw");setLanguageSelectOpen(false);}} value="zh-tw">繁體中文</div>
     <div className="languageLabel" onClick={()=>{setLanguageSetting("zh-cn");setLanguageSelectOpen(false);}} value="zh-cn">简体中文</div>
      </div>

   </div>
  </nav>
  )
}

export default Nav
