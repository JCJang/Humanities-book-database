import './App.css';
import Access from './components/newAccess/Access'
import Add from './components/add/Add'
import Nav from './components/nav/Nav'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {useEffect, useState, useCallback} from 'react'

const App = () => {
  const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);
  const [languageSetting, setLanguageSetting] = useState('en')

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
    <div>
    <Nav languageSetting={languageSetting} setLanguageSetting={setLanguageSetting}/>
    <Route path = "/" exact>
    <Access googleScriptLoaded={googleScriptLoaded} languageSetting={languageSetting} setLanguageSetting={setLanguageSetting}/>
    </Route>
    <Route path = "/add" exact>
    <Add googleScriptLoaded={googleScriptLoaded} languageSetting={languageSetting} setLanguageSetting={setLanguageSetting} />
    </Route>
    </div>
    </Router>
  )
}

export default App
