import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd,btnColor, btnText}) => {
    const location = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/add' && (<Button color={btnColor} text={btnText} onClick={onAdd}/>)}
      {/*REUSABLE components
        <Button color="green" text="another text for another button"/>
        <Button color="pink" text="more buttons using the same component"/>
  */}
    </header>
  )
}
Header.defaultProps = {
  title:"Task Management App",
}

Header.propTypes ={
  title: PropTypes.string.isRequired,
}

export default Header

{/*  <h1 style ={{color:'red', backgroundColor:'blue'}}>{title}</h1>*/}
{/*  <h1 style ={headingStyle}>{title}</h1>

const headingStyle = {
color:"red",
backgroundColor:"blue",
}
*/}
