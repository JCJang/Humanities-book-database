import {Link} from 'react-router-dom'
const Links = ({m, routeName, label}) => {
  return (
    <Link to={routeName} className={m?"WebNavLink":"MobileNavLink"}>
    {label}
    </Link>
  )
}

export default Links
