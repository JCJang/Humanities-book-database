import {useState, useEffect} from 'react';
import SearchForm from './SearchForm'
import Axios from 'axios'
import GoogleBooksViewer from './GoogleBooksViewer'
import OpenedShelf from './OpenedShelf'
import {useCallback} from 'react'


const Access =({googleScriptLoaded})=>{
  const [selectedShelf, setSelectedShelf] = useState({
    shelfTitle:'',
    shelfDescription:'',
    shelfSubjects:[],
    shelfBooks:[{
      languageVersions:[],
      earliestPublicationYear:"",
      bookTitle:"",
      bookAuthor: [],
      contentKeywords: [],
      subjectLinks:[],
      bookHighlights:"",
      bookLength:"",
      previewStatus:"",
      isbn13:"",
      googleId:""

    }]
  })
  const [shelfId,setShelfId] = useState('')

    const [bookIdentifier, setBookIdentifier] = useState(false);
    const [displayBookTitle,setDisplayBookTitle] = useState('');

    const [isbnOrId, setIsbnOrId] = useState(true)
    const [languageSetting, setLanguageSetting] = useState('en')
    const [allShelves,setAllShelves]=useState([])
    const [shelfLanguage, setShelfLanguage] = useState(false)
    const [columnFocus, setColumnFocus] = useState('init')
    const [authorView, setAuthorView] = useState(false)
    const [authorToGet, setAuthorToGet] = useState('')
    const [selectedAuthor, setSelectedAuthor]=useState({
      authorInfluences:[],
      authorInfluenced:[],
      authorCountry:[],
      authorWikiUrl:"",
      authorWikiImage:"",
      authorBirthDate:"",
      authorDeathDate:"",
      authorLifespan:"",
      authorWikiTitle:"",
      authorLifeWorkKeywords: [],
      timelineLinks:[],
      authorBgKeywords:[],
      authorWikiExtract:"",
    })

    const stripLabels = useCallback((a) => {
        const result = []
        a.map((a)=>{
          result.push(a.value)
        })
        return result

    }, [])




    useEffect(()=>{
      if(shelfId.length<10){return}
      Axios.post("http://localhost:3001/openedshelf",{
        shelfLanguage:shelfLanguage[0]?stripLabels(shelfLanguage)[0]:languageSetting,
        shelfId:shelfId
      })
      .then((res) => {
        const newSelectedShelf = {
          shelfTitle:res.data[0].editions[0].details.shelfTitle,
          shelfDescription:res.data[0].editions[0].details.shelfDescription,
          shelfSubjects:res.data[0].shelfSubjects,
          shelfId: res.data[0]._id,
          shelfBooks:
            res.data[0].shelfBooks.map((x) => {
                  return {
                    languageVersions:x.languageVersions,
                    earliestPublicationYear:x.earliestPublicationYear,
                    bookTitle:x.editions[0].details.bookTitle,
                    bookAuthor: x.editions[0].details.bookAuthor,
                    contentKeywords: x.editions[0].details.contentKeywords,
                    subjectLinks:x.editions[0].details.subjectLinks,
                    bookHighlights:x.editions[0].details.bookHighlights,
                    bookLength:x.editions[0].details.bookLength,
                    previewStatus:x.editions[0].details.previewStatus,
                    isbn13:x.editions[0].details.isbn13,
                    googleId: x.editions[0].details.googleId}
                })

        }
        setSelectedShelf({...newSelectedShelf})})
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


    useEffect(()=>{
      if(authorToGet.length<2){return}
      Axios.post("http://localhost:3001/openedauthor",{
        authorLanguage:shelfLanguage[0]?stripLabels(shelfLanguage)[0]:languageSetting,
        authorToGet:authorToGet
      })
      .then((res) => {
        const newSelectedAuthor = {
          authorInfluences:res.data[0].authorInfluences,
          authorInfluenced:res.data[0].authorInfluenced,
          authorCountry:res.data[0].authorCountry,
          authorWikiUrl: res.data[0].authorWikiUrl,
          authorWikiImage:res.data[0].authorWikiImage,
          authorBirthDate:res.data[0].authorBirthDate,
          authorDeathDate:res.data[0].authorDeathDate,
          authorLifespan:res.data[0].authorLifespan,
          authorWikiTitle:res.data[0].editions[0].details.bookTitle,
          authorLifeWorkKeywords:res.data[0].editions[0].details.authorLifeWorkKeywords,
          timelineLinks:res.data[0].editions[0].details.timelineLinks,
          authorBgKeywords:res.data[0].editions[0].details.authorBgKeywords,
          authorWikiExtract:res.data[0].editions[0].details.authorWikiExtract,
          }
        setSelectedAuthor({...newSelectedAuthor})
      })
    .then((res)=>{
      console.log(selectedAuthor)
    })
    },[authorToGet])

  return (

    <div className="Row">
        <div  className="col-1" style={{width:columnFocus==="init"?"var(--initpanel)":columnFocus==="shelfpanel"?"30vw":"4rem",height:"var(--panelheight)"}} onClick={()=>setColumnFocus("shelfpanel")}>

        <SearchForm allShelves={allShelves} columnFocus={columnFocus} setShelfLanguage={setShelfLanguage} shelfId={shelfId} setShelfId={setShelfId} selectedShelf={selectedShelf} shelfLanguage={shelfLanguage} setSelectedShelf={setSelectedShelf}/>

        </div>
        <div className="col-2"  style={{width:columnFocus==="shelfpanel"?"var(--focusedpanel)":columnFocus==="detailspanel"?"30vw":"4rem",boxShadow:"var(--panelshadow)",height:"var(--panelheight)"}} onClick={()=>setColumnFocus("shelfpanel")}>
          {selectedShelf && <OpenedShelf setAuthorToGet={setAuthorToGet} setAuthorView={setAuthorView} columnFocus={columnFocus} setIsbnOrId={setIsbnOrId} setBookIdentifier={setBookIdentifier} selectedShelf={selectedShelf} setDisplayBookTitle={setDisplayBookTitle}/>}
          </div>
        <div className="col-3"  style={{width:columnFocus==="detailspanel"?"var(--focusedpanel)":"4rem",boxShadow:"var(--panelshadow)",height:"var(--panelheight)"}} onClick={()=>setColumnFocus("detailspanel")}>
            <GoogleBooksViewer columnFocus={columnFocus} bookIdentifier={bookIdentifier} displayBookTitle={displayBookTitle} googleScriptLoaded={googleScriptLoaded} isbnOrId={isbnOrId}/>

        </div>
    </div>
  )
}

export default Access;
