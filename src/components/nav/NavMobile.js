import LinksMobile from './LinksMobile'

import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';

const NavMobile = ({xs, s, m, l, xl, languageSetting, setLanguageSetting}) => {

  const navMobile = () => {
    return {
    width: "100vw",
    background: "var(--nav-text)",
    color: "var(--nav)",
    height: "4rem",
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    padding:"0.5rem 1.5rem 0 1.5rem",
    }
  }


  return (
    <nav className="Row" style={navMobile()}>

    <LinksMobile routeName="/" label="home" m={m} Icon={SearchOutlinedIcon}/>

    <LinksMobile routeName="/map" label="lit map" m={m} Icon={MapOutlinedIcon}/>

    <LinksMobile routeName="/saved" label="saved" m={m} Icon={BookmarkBorderOutlinedIcon}/>

    <LinksMobile routeName="/suggest" label="suggest" m={m} Icon={RateReviewOutlinedIcon}/>

    <LinksMobile routeName="/about" label="about" m={m} Icon={CodeOutlinedIcon}/>

    </nav>
  )
}

export default NavMobile
