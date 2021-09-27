import Links from './Links'
import {useState,useEffect} from 'react'
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';

const Nav = ({xs, s, m, l, xl, authorView, columnFocus, setColumnFocus, languageSetting, setLanguageSetting}) => {

const [routeFocus, setRouteFocus] = useState("/")


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


  //
  // <label htmlFor="languageSetting" className="subtitle2">site language:</label>
  // <select className="form-control" id="languageSetting" value={languageSetting}
  //  onChange={(e)=>setLanguageSetting(e.target.value)} placeholder="toggles auto input settings">
  //  <option value="en">English</option>
  //  <option value="zh-tw">Traditional Chinese</option>
  //  <option value="zh-cn">Simplified Chinese</option>
  //  </select>

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
        <Links routeName="/" label="Home" routeFocus={routeFocus} colorForNav={colorForNav} setRouteFocus={setRouteFocus} Icon={SearchOutlinedIcon}/>

        <Links routeName="/suggest" label="Suggest" routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={RateReviewOutlinedIcon}/>

        <Links routeName="/map" label="Lit map" routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={MapOutlinedIcon}/>

        <Links routeName="/saved" label="Accounts" routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={BookmarkBorderOutlinedIcon}/>

        <Links routeName="/about" label="About" routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={CodeOutlinedIcon}/>
        </div>

  </nav>
  )
}

export default Nav
