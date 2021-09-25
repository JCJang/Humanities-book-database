import {Link} from 'react-router-dom'
const Links = ({Icon, routeName, setRouteFocus, label}) => {
  return (



    <Link to={routeName} style={{color:"inherit",textDecoration: "none"}}>
      <div className="WebNavLink Row transition"  onClick={()=>setRouteFocus(routeName)} style={{alignItems:"center", justifyContent:"center", whiteSpace:"nowrap"}}>
      <Icon style={{fontSize:"1.2rem", marginRight:"0.5rem"}}/>
    {label}
    </div>
    </Link>


  )
}

export default Links
