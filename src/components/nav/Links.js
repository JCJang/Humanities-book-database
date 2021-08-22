import {Link} from 'react-router-dom'
const Links = ({routeName, label}) => {
  return (
    <Link to={routeName} className="Link">
    {label}
    </Link>
  )
}

export default Links
