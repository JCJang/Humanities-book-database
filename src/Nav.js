import Links from './Links'

const Nav = ({languageSetting, setLanguageSetting}) => {
  return (
    <nav className="Nav">
    <div class="overline-details">HUMANITIESDB</div>
    <Links routeName="/" label="home"/>
    <Links routeName="/add" label="add"/>
    <label htmlFor="languageSetting">site language:</label>
    <select className="form-control" id="languageSetting" value={languageSetting}
     onChange={(e)=>setLanguageSetting(e.target.value)} placeholder="toggles auto input settings">
     <option value="en">English</option>
     <option value="zh-tw">Traditional Chinese</option>
     <option value="zh-cn">Simplified Chinese</option>
     </select>
  </nav>
  )
}

export default Nav
