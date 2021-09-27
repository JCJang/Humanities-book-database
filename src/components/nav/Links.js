import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import {useEffect, useState} from 'react';
const Links = ({Icon, routeName, colorForNav, routeFocus, setRouteFocus, label}) => {

  const location = useLocation();
  const [hover, setHover] = useState(false)
  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])

const borderBottom = () =>{
  if(hover){
    return `2px solid ${colorForNav()}`
  }else if(routeFocus === routeName){
    return `1.5px solid ${colorForNav()}`
  }
}

  return (



    <Link to={routeName} style={{color:"inherit",textDecoration: "none"}}>
      <div className="WebNavLink Row transition" onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {setHover(false)}} onClick={()=>setRouteFocus(routeName)} style={{alignItems:"center", justifyContent:"center",height:"3.5rem", whiteSpace:"nowrap", borderBottom:borderBottom()}}>
      <Icon style={{fontSize:"1.2rem", marginRight:"0.5rem"}}/>
    {label}
    </div>
    </Link>


  )
}

export default Links
