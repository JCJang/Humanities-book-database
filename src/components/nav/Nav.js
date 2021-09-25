import Links from './Links'

import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';

const Nav = ({xs, s, m, l, xl, languageSetting, setLanguageSetting}) => {

  const navWebsite = () => {
    return {
    width: "100vw",
    background: "var(--nav)",
    color: "var(--nav-text)",
    height: "3.5rem",
    alignItems: "center",
    display: "flex"}
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
    <nav className={"Row"} style={navWebsite()}>


        <Links routeName="/" label="home" Icon={SearchOutlinedIcon}/>

        <Links routeName="/map" label="lit map" Icon={MapOutlinedIcon}/>

        <Links routeName="/saved" label="saved" Icon={BookmarkBorderOutlinedIcon}/>

        <Links routeName="/suggest" label="suggest" Icon={RateReviewOutlinedIcon}/>

        <Links routeName="/about" label="about" Icon={CodeOutlinedIcon}/>

  </nav>
  )
}

export default Nav
