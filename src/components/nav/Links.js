import {Link} from 'react-router-dom'
const Links = ({Icon, routeName, label}) => {
  return (



    <div className="WebNavLink Row transition"  style={{alignItems:"center", justifyContent:"center"}}>
    <Icon style={{fontSize:"1.2rem", marginRight:"0.5rem"}}/>
    <Link to={routeName} style={{ color: "var(--detailspaneltext)",
      textDecoration: "none"}}>
    {label}
    </Link>
    </div>


  )
}

export default Links
