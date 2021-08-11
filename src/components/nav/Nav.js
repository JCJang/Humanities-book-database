import Links from './Links'

const Nav = () => {
  return (
    <nav className="Nav">
    <Links routeName="/add" label="add"/>
    <Links routeName="/" label="home"/>
  </nav>
  )
}

export default Nav
