import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
const Nav = () => {
  return (
    <nav className="body2-details Row" style={{ height:"3.5rem", alignItems: "center", display:"flex",color:"var(--paper)", justifyContent:"center",backgroundColor:"var(--ink)"}}>


    <Link  to="/background" className="AuthorLink">
    Historical Background
    </Link>
    <div style={{width:"0.1px",height:"1.5rem",borderLeft:"1px solid var(--paper)"}}></div>
    <Link to="/bio" className="AuthorLink">
    Author's Biography
    </Link>
  </nav>
  )
}

export default Nav
