import {useState, useEffect} from 'react';
import SearchForm from './SearchForm'
import Axios from 'axios'
import GoogleBooksViewer from './GoogleBooksViewer'
import OpenedAuthor from './OpenedAuthor'
import OpenedShelf from './OpenedShelf'
import {useCallback} from 'react'
import {motion, AnimatePresence} from 'framer-motion'


const Access =({googleScriptLoaded, languageSetting, setLanguageSetting})=>{

//search panel
    const [allShelves,setAllShelves]=useState([])
    const [columnFocus, setColumnFocus] = useState('init')
    const [bookNumber, setBookNumber] = useState('0')

//shelf panel
    const [shelfId,setShelfId] = useState('')
    const [displayBookTitle,setDisplayBookTitle] = useState('');
    const [displayEarliestPublicationYear, setDisplayEarliestPublicationYear] = useState('')
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

//author panel
    const [authorFocus, setAuthorFocus] = useState('init')
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

//Google Books viewer
    const [bookIdentifier, setBookIdentifier] = useState(false);
    const [isbnOrId, setIsbnOrId] = useState(true)

    const stripLabels = useCallback((a) => {
      if(Array.isArray(a)){
        const result = []
        a.map((a)=>{
          result.push(a.value)
        })
        return result
      }
    }, [])




    useEffect(()=>{
      if(shelfId.length<10){return}
      Axios.post("http://localhost:3001/openedshelf",{
        shelfLanguage:languageSetting,
        shelfId:shelfId
      })
      .then((res) => {
        const newSelectedShelf = {
          shelfTitle:res.data.editions[0].details.shelfTitle,
          shelfDescription:res.data.editions[0].details.shelfDescription,
          shelfSubjects:res.data.shelfSubjects,
          shelfId: res.data._id,
          shelfBooks:
            res.data.shelfBooks.map((x) => {
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
      setSelectedShelf({
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
        }]})
      setBookIdentifier(false)
      setDisplayBookTitle('');
      setDisplayEarliestPublicationYear('')
      setIsbnOrId(true)
      setAllShelves([])
      setColumnFocus('init')
      setAuthorView(false)
      setAuthorToGet('')
      setSelectedAuthor({
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

      Axios.post("http://localhost:3001/allshelves",{
        languageSetting:languageSetting
      }).then((res)=>{

          const allShelves = res.data.map((shelf)=>{

          return {
          shelfTitle:shelf.editions[0].details.shelfTitle, shelfDescription:shelf.editions[0].details.shelfDescription,
          shelfSubjects:shelf.shelfSubjects,
          shelfId:shelf._id,
          shelfText: shelf.shelfBooks.map((book)=>{
             const authors = book.editions[0].details.bookAuthor.join(' ')
             const subjects = book.editions[0].details.subjectLinks.join(' ')
             const content = book.editions[0].details.contentKeywords.join(' ')
             const highlights = book.editions[0].details.bookHighlights
          return `${authors} ${subjects} ${content} ${highlights}`
          }).join(' ')
      }})

      setAllShelves(allShelves)

      }).then( console.log("reloaded shelves"))
    },[languageSetting])


    useEffect(()=>{
      if(authorToGet.length<2){return}
      setSelectedAuthor({
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
      Axios.post("http://localhost:3001/openedauthor",{
        authorLanguage:languageSetting,
        authorToGet:authorToGet
      })
      .then((res) => {
          if(res.data===""){
            console.log(`no author page found for ${authorToGet}`);
            return;
          }
        const newSelectedAuthor = {
          authorCountry:res.data.authorCountry,
          authorInfluenced:res.data.authorInfluenced,
          authorInfluences:res.data.authorInfluences,
          authorWikiUrl: res.data.authorWikiUrl,
          authorWikiImage:res.data.authorWikiImage,
          authorBirthDate:res.data.authorBirthDate,
          authorDeathDate:res.data.authorDeathDate,
          authorLifespan:res.data.authorLifespan,
          authorWikiTitle:res.data.editions[0].details.authorWikiTitle,
          authorLifeWorkKeywords:res.data.editions[0].details.authorLifeWorkKeywords,
          timelineLinks:res.data.editions[0].details.timelineLinks,
          authorBgKeywords:res.data.editions[0].details.authorBgKeywords,
          authorWikiExtract:res.data.editions[0].details.authorWikiExtract,
          }
        setSelectedAuthor({...newSelectedAuthor})
      })
    .then((res)=>{
      console.log(selectedAuthor)
    })
  },[authorToGet,languageSetting])

  return (

    <div className="Row">
        <div  className="col-1" style={{width:columnFocus==="init"?"var(--initpanel)":columnFocus==="shelfpanel"?"30vw":"4rem",height:"var(--panelheight)"}}>

        <SearchForm allShelves={allShelves} columnFocus={columnFocus} setLanguageSetting={setLanguageSetting} languageSetting={languageSetting} setColumnFocus={setColumnFocus} shelfId={shelfId} setShelfId={setShelfId} selectedShelf={selectedShelf} setSelectedShelf={setSelectedShelf} setBookNumber={setBookNumber}/>

        </div>
        <div className="col-2"  style={{width:columnFocus==="shelfpanel"?"var(--focusedpanel)":columnFocus==="init"?"4rem":authorView===true?"4rem":"30vw",boxShadow:"var(--panelshadow)",height:"var(--panelheight)"}}>
          {selectedShelf && <OpenedShelf setAuthorFocus={setAuthorFocus} setAuthorToGet={setAuthorToGet} setDisplayEarliestPublicationYear={setDisplayEarliestPublicationYear} setColumnFocus={setColumnFocus} authorView={authorView} setAuthorView={setAuthorView} columnFocus={columnFocus} setIsbnOrId={setIsbnOrId} setBookIdentifier={setBookIdentifier} selectedShelf={selectedShelf} setDisplayBookTitle={setDisplayBookTitle} bookNumber={bookNumber}/>}
          </div>

        <AnimatePresence>
          {authorView===false &&
            <motion.div className="col-3"  style={{width:columnFocus==="detailspanel"?"var(--focusedpanel)":"4rem",boxShadow:"var(--panelshadow)",height:"var(--panelheight)"}} >
            <GoogleBooksViewer columnFocus={columnFocus} authorView={authorView} setAuthorView={setAuthorView} bookIdentifier={bookIdentifier} setColumnFocus={setColumnFocus} displayBookTitle={displayBookTitle} googleScriptLoaded={googleScriptLoaded} isbnOrId={isbnOrId}/>
            </motion.div>
          }
        </AnimatePresence>
        <AnimatePresence>
          {authorView===true &&
              <motion.div className="col-3"  style={{width:columnFocus!=="detailspanel"?"4rem":authorView===true?"var(--initpanel)":"var(--focusedpanel)",boxShadow:"var(--panelshadow)",height:"var(--panelheight)"}}>
                <OpenedAuthor  languageSetting={languageSetting} authorFocus={authorFocus} setAuthorFocus={setAuthorFocus} displayEarliestPublicationYear={displayEarliestPublicationYear} columnFocus={columnFocus} authorView={authorView} setAuthorView={setAuthorView} setColumnFocus={setColumnFocus} displayBookTitle={displayBookTitle} selectedAuthor={selectedAuthor} setShelfId={setShelfId} setBookNumber={setBookNumber} bookNumber={bookNumber}/>
              </motion.div>
          }
        </AnimatePresence>
    </div>
  )
}

export default Access;
