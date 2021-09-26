import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import {useEffect} from 'react';
const Links = ({Icon, routeName, setRouteFocus, label}) => {

  const location = useLocation();

  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])


  return (



    <Link to={routeName} style={{color:"inherit",textDecoration: "none"}}>
      <div className="WebNavLink Row transition"  onClick={()=>setRouteFocus(routeName)} style={{alignItems:"center", justifyContent:"center",height:"3.5rem", whiteSpace:"nowrap"}}>
      <Icon style={{fontSize:"1.2rem", marginRight:"0.5rem"}}/>
    {label}
    </div>
    </Link>


  )
}

export default Links
