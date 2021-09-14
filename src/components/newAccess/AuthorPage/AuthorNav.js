import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
const Nav = ({selectedAuthor, setAuthorFocus, displayBookTitle}) => {
  return (
    <div  className="Column" style={{ height:"7rem", alignItems: "center", display:"flex",color:"var(--paper)", justifyContent:"center",backgroundColor:"var(--ink)",padding:"0 2rem"}}>
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
  )
}

export default Nav
