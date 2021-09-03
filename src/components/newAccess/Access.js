import {useState, useEffect} from 'react';
import './Add.css';
import SearchForm from './SearchForm'
import SubmissionForm from './SubmissionForm'
import TranslationForm from './TranslationForm'
import Axios from 'axios'
import GoogleBooksViewer from './GoogleBooksViewer'
import OpenedShelf from './OpenedShelf'
import {Route, BrowserRouter as Router} from 'react-router-dom'


const Access =()=>{
  const [shelfResults, setShelfResults] = useState(false)
  const [selectedShelf, setSelectedShelf] = useState(false)
  const [shelfId,setShelfId] = useState(false)
    const [bookIdentifier, setBookIdentifier] = useState(false);
    const [isbnOrId, setIsbnOrId] = useState(true)
    const [formToggleOn, setFormToggleOn] = useState(false)
    const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);
    const [languageSetting, setLanguageSetting] = useState('en')
    const [allShelves,setAllShelves]=useState([])
    const [shelfLanguage, setShelfLanguage] = useState(false)

     const toggleForm = (e) =>{
       e.preventDefault()
       setFormToggleOn(!formToggleOn)
     }

     function stripLabels(a){
       const result = []
       a.map((a)=>{
         result.push(a.value)
       })
       return result
     }

         // Was able to fix first load bug by setting google script load not within the useEffect, but as part of a component.
        const loadGoogleBooksViewer = (() =>{
            const scriptTag = document.createElement('script')
            scriptTag.src= 'https://www.google.com/books/jsapi.js'
            scriptTag.type="text/javascript"
            scriptTag.id = "google-script"
            document.body.appendChild(scriptTag);

          })()

          useEffect(()=>{document.getElementById("google-script").addEventListener('load', ()=>setGoogleScriptLoaded(true))},[])

    useEffect(()=>{
      
      setSelectedShelf(shelfId)
    },[shelfId])

    // useEffect(()=> {
    //   if(selectedShelf!==false){
    //     const getIsbn=(isbn)=>{
    //       if(selectedShelf.volumeInfo.hasOwnProperty("industryIdentifiers")){
    //       const res = selectedShelf.volumeInfo.industryIdentifiers.filter(a=>a.type===isbn)
    //       if(res[0]!==undefined){return res[0].identifier}else{return ""}}else{return ""}
    //     }
    //
    //   console.log(getIsbn("ISBN_10"))
    //     if(getIsbn("ISBN_10").length>10){setBookIdentifier(getIsbn("ISBN_10")); setIsbnOrId(true)}else if (getIsbn("ISBN_13").length>10){setBookIdentifier(getIsbn("ISBN_13")); setIsbnOrId(true)}else if(selectedShelf.hasOwnProperty("id")){
    //         setBookIdentifier(selectedShelf.id);
    //         setIsbnOrId(false)
    //       } else {
    //         console.log("no identifier found")
    //         setBookIdentifier(false)
    //     }
    //     console.log(bookIdentifier);
    // }}, [selectedShelf]);

    useEffect(()=>{
      Axios.post("http://localhost:3001/allshelves",{
        shelfLanguage:shelfLanguage[0]?stripLabels(shelfLanguage)[0]:languageSetting
      }).then((res)=>{
        setAllShelves(res.data.map((x)=>{ return [x.editions[0].details.shelfTitle, x.editions[0].details.shelfDescription,  x.shelfSubjects, x._id]}))
      }).then( console.log("reloaded shelves"))
    },[])



  return (

    <div className="Row">
        <div  className=" Column col-1">

        <SearchForm allShelves={allShelves} setShelfLanguage={setShelfLanguage} shelfId={shelfId} setShelfId={setShelfId} selectedShelf={selectedShelf} shelfLanguage={shelfLanguage} setSelectedShelf={setSelectedShelf}/>

        </div>
        <div className="Column col-2">
          <OpenedShelf selectedShelf={selectedShelf}/>
          </div>
        <div className="Column col-3">
            <GoogleBooksViewer bookIdentifier={bookIdentifier} formToggleOn={formToggleOn} googleScriptLoaded={googleScriptLoaded} isbnOrId={isbnOrId}/>

        </div>
    </div>
  )
}

export default Access;
