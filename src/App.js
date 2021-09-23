import './App.css';
import Access from './components/newAccess/Access'
import Add from './components/add/Add'
import Nav from './components/nav/Nav'
import NavMobile from './components/nav/NavMobile'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {useEffect, useState, useCallback} from 'react'
import useMediaQuery from "./components/customHooks/useMediaQuery";


const App = () => {
  const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);
  const [languageSetting, setLanguageSetting] = useState('en')

  /* Extra small devices (phones, 600px and down) */
  const xs = useMediaQuery('(max-width: 600px)');
  /* Small devices (portrait tablets and large phones, 600px and up) */
    const s = useMediaQuery('(min-width: 600px)');
    /* Medium devices (landscape tablets, 768px and up) */
    const m = useMediaQuery('(min-width: 768px)');
    /* Large devices (laptops/desktops, 992px and up) */
    const l = useMediaQuery('(min-width: 992px)');
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    const xl = useMediaQuery('(min-width: 1200px)');


  const loadGoogleBooksViewer = useCallback(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src= 'https://www.google.com/books/jsapi.js'
    scriptTag.type="text/javascript"
    scriptTag.id = "google-script"
    document.body.appendChild(scriptTag);

    document.getElementById("google-script").addEventListener('load', ()=>setGoogleScriptLoaded(true))
  }, [])



    useEffect(()=>{loadGoogleBooksViewer()},[])


  return (
    <Router>
    <div className="rootContainer">
    {m && <Nav xs={xs} s={s} m={m} l={l} xl={xl} languageSetting={languageSetting} setLanguageSetting={setLanguageSetting}/>}
    <Route path = "/" exact>
    <Access xs={xs} s={s} m={m} l={l} xl={xl} googleScriptLoaded={googleScriptLoaded} languageSetting={languageSetting} setLanguageSetting={setLanguageSetting}/>
    </Route>
    <Route path = "/add" exact>
    <Add xs={xs} s={s} m={m} l={l} xl={xl} googleScriptLoaded={googleScriptLoaded} languageSetting={languageSetting} setLanguageSetting={setLanguageSetting} />
    </Route>
    {!m && <NavMobile xs={xs} s={s} m={m} l={l} xl={xl} languageSetting={languageSetting} setLanguageSetting={setLanguageSetting}/>}
    </div>
    </Router>
  )
}

export default App
