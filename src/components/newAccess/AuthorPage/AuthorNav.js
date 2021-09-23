import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'

const AuthorNav = ({xs, s, m, l, xl, selectedAuthor, setAuthorFocus, setColumnFocus,authorBookTitle}) => {


  return (
    <div className={l?"Row":"Column"} style={{width:"100%"}}>
    <div  className="Column" style={{order:l?"1":"2", height:"7rem",width:"100%", alignItems: "center", display:"flex",color:"var(--paper)", justifyContent:"center",backgroundColor:"var(--ink)",padding:"0 2rem"}}>
      {l && <nav className="body2-details Row" style={{ height:"3.5rem", alignItems: "center", display:"flex",color:"var(--paper)", justifyContent:"center",backgroundColor:"var(--ink)"}}>
    <span  onClick={()=>{setAuthorFocus("bg")}} className="AuthorLink">
    Historical Background
    </span>
    <div style={{width:"0.1px",height:"1.5rem",borderLeft:"1px solid var(--paper)"}}></div>
    <span onClick={()=>{setAuthorFocus("bio")}} className="AuthorLink">
    Author's Biography
    </span>
    </nav>}
    {selectedAuthor && <div className="overline-details">{`${authorBookTitle} // By ${selectedAuthor.authorWikiTitle}`}</div>}
      {!l && <div style={{width:"100vw",marginTop:"1rem",borderTop:"1px solid var(--paper)"}}></div>}
      {!l && <div style={{width:"100vw",margin:"0.5rem 0",borderTop:"1px solid var(--paper)"}}></div>}
  <div>
  </div>
  </div>
  <div className="Column" style={{order:l?"2":"1",justifySelf:"flex-end",marginTop:"1rem"}}>
  <span className="btn darkbtn" onClick={()=>{setColumnFocus("shelfpanel")}} style={{width:l?"6rem":"auto",alignSelf:l?"":"flex-start",alignItems:"center",marginTop:"1rem",marginLeft:l?"":m?"3rem":"", display:"flex",justifyContent:"center"}}><ArrowBackRoundedIcon/><span  style={{width:"85%", padding:"0 0.5rem"}}>Back to Shelf</span></span>
  </div>
  </div>
  )
}

export default AuthorNav
