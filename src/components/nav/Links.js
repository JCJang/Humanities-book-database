import {Link} from 'react-router-dom'
const Links = ({routeName, label}) => {
  return (
    <Link to={routeName}>
    {label}
    </Link>
  )
}

export default Links
