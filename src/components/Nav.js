import SearchBar from './SearchBar'
import Links from './Links'

const Nav = () => {
  return (
    <nav className="Nav">
    <Links/>
    {false && <SearchBar/>}
  </nav>
  )
}

export default Nav
