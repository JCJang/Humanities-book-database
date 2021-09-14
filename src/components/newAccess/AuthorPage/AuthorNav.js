import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'


const Nav = ({selectedAuthor, setAuthorFocus, setColumnFocus,displayBookTitle}) => {
  return (
    <div className="Row" style={{width:"100%"}}>
    <div  className="Column" style={{ height:"7rem",width:"100%", alignItems: "center", display:"flex",color:"var(--paper)", justifyContent:"center",backgroundColor:"var(--ink)",padding:"0 2rem"}}>
    <nav className="body2-details Row" style={{ height:"3.5rem", alignItems: "center", display:"flex",color:"var(--paper)", justifyContent:"center",backgroundColor:"var(--ink)"}}>


    <span  onClick={()=>{setAuthorFocus("bg")}} className="AuthorLink">
    Historical Background
    </span>
    <div style={{width:"0.1px",height:"1.5rem",borderLeft:"1px solid var(--paper)"}}></div>
    <span onClick={()=>{setAuthorFocus("bio")}} className="AuthorLink">
    Author's Biography
    </span>
  </nav>
  <div>
{selectedAuthor && <div className="overline-details">{`${displayBookTitle} // By ${selectedAuthor.authorWikiTitle}`}</div>}
  </div>
  </div>
  <div className="Column" style={{justifySelf:"flex-end",marginTop:"1rem"}}>
  <span className="btn darkbtn" onClick={()=>{setColumnFocus("shelfpanel")}} style={{width:"6rem",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1rem"}}><ArrowBackRoundedIcon/><span  style={{width:"85%", padding:"0 0.5rem"}}>Back to Shelf</span></span>
  </div>
  </div>
  )
}

export default Nav
