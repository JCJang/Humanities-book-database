import {Link} from 'react-router-dom'

const LinksMobile = ({Icon, m, routeName, label}) => {
  return (
    <div className="Column"  style={{alignItems:"center"}}>
    <Icon style={{fontSize:"24px"}}/>
    <Link to={routeName} className="MobileNavLink">
    {label}
    </Link>
    </div>
  )
}

export default LinksMobile
