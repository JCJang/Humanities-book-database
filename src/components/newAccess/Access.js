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
  const [shelfId,setShelfId] = useState('')
    const [bookIdentifier, setBookIdentifier] = useState(false);
    const [isbnOrId, setIsbnOrId] = useState(true)
    const [formToggleOn, setFormToggleOn] = useState(false)
    const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);
    const [languageSetting, setLanguageSetting] = useState('en')
    const [allShelves,setAllShelves]=useState([])
    const [shelfLanguage, setShelfLanguage] = useState(false)
    const [columnFocus, setColumnFocus] = useState('init')

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
      if(shelfId.length<10){return}
      Axios.post("http://localhost:3001/openedshelf",{
        shelfLanguage:shelfLanguage[0]?stripLabels(shelfLanguage)[0]:languageSetting,
        shelfId:shelfId
      })
      .then((res) => {
setSelectedShelf([res.data[0].editions[0].details.shelfTitle, res.data[0].editions[0].details.shelfDescription, res.data[0].shelfSubjects, res.data[0]._id, res.data[0].shelfBooks.map((x) => {
      return [[x.languageVersions, x.earliestPublicationYear, x.editions[0].details.bookTitle, x.editions[0].details.bookAuthor, x.editions[0].details.subjectLinks, x.editions[0].details.contentKeywords, x.editions[0].details.bookHighlights, x.editions[0].details.bookLength, x.editions[0].details.previewStatus], [x.editions[0].details.isbn13, x.editions[0].details.googleId]]
    })])})
    .then((res)=>{
      console.log(selectedShelf)
    })
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
        <div  className="col-1" style={{width:columnFocus==="init"?"var(--initpanel)":columnFocus==="shelfpanel"?"30vw":"5.6rem"}} onClick={()=>setColumnFocus("shelfpanel")}>

        <SearchForm allShelves={allShelves} columnFocus={columnFocus} setShelfLanguage={setShelfLanguage} shelfId={shelfId} setShelfId={setShelfId} selectedShelf={selectedShelf} shelfLanguage={shelfLanguage} setSelectedShelf={setSelectedShelf}/>

        </div>
        <div className="col-2"  style={{width:columnFocus==="shelfpanel"?"var(--focusedpanel)":columnFocus==="detailspanel"?"30vw":"5.6rem"}} onClick={()=>setColumnFocus("shelfpanel")}>
          {selectedShelf && <OpenedShelf selectedShelf={selectedShelf}/>}
          </div>
        <div className="col-3"  style={{width:columnFocus==="detailspanel"?"var(--focusedpanel)":"5.6rem"}} onClick={()=>setColumnFocus("detailspanel")}>
            <GoogleBooksViewer bookIdentifier={bookIdentifier} formToggleOn={formToggleOn} googleScriptLoaded={googleScriptLoaded} isbnOrId={isbnOrId}/>

        </div>
    </div>
  )
}

export default Access;
