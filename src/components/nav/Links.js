import {Link} from 'react-router-dom'
const Links = ({Icon, routeName, label}) => {
  return (



    <Link to={routeName} style={{color:"inherit",textDecoration: "none"}}>
      <div className="WebNavLink Row transition"  style={{alignItems:"center", justifyContent:"center"}}>
      <Icon style={{fontSize:"1.2rem", marginRight:"0.5rem"}}/>
    {label}
    </div>
    </Link>


  )
}

export default Links
