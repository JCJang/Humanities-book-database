import {Link} from 'react-router-dom'

const LinksMobile = ({Icon, m, routeName, label}) => {
  return (

    <Link to={routeName} className="MobileNavLink">
    <div className="Column"  style={{alignItems:"center"}}>
    <Icon style={{fontSize:"24px"}}/>
    {label}
    </div>
    </Link>
  )
}

export default LinksMobile
