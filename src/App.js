import './App.css';
import Access from './components/newAccess/Access'
import Add from './components/add/Add'
import Nav from './components/nav/Nav'
import {Route, BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div>
    <Nav/>
    <Route path = "/" exact component ={Access}/>
    <Route path = "/add" exact component ={Add}/>
    </div>
    </Router>
  )
}

export default App
