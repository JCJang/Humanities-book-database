import Links from './Links'


const Nav = ({xs, s, m, l, xl, languageSetting, setLanguageSetting}) => {

  const navMobile = () => {
    return {
    width: "100vw",
    background: "var(--nav-text)",
    color: "var(--nav)",
    height: "2rem",
    alignItems: "center",
    display: "flex"}
  }

  const navWebsite = () => {
    return {
    width: "100vw",
    background: "var(--nav)",
    color: "var(--nav-text)",
    height: "3.5rem",
    alignItems: "center",
    display: "flex"}
  }

  return (
    <nav className={m?"Row":"Column"} style={!m?navMobile():navWebsite()}>
    <Links m={m} routeName="/" label="home"/>
    <Links m={m} routeName="/add" label="add"/>
    <label htmlFor="languageSetting" className="subtitle2">site language:</label>
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
