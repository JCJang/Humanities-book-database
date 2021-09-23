import {useState, useEffect} from 'react';
import SearchForm from './SearchForm'
import Axios from 'axios'
import GoogleBooksViewer from './GoogleBooksViewer'
import OpenedAuthor from './OpenedAuthor'
import OpenedShelf from './OpenedShelf'
import {useCallback} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';


const Access =({xs,s,m,l,xl,googleScriptLoaded, languageSetting, setLanguageSetting})=>{

  const [slideOut, setSlideOut] = useState(false)

  const col1heightS = () => {

    if(columnFocus === "init"){
      return "var(--focusedpanelmobile)";
    }else{
      return "3rem";
    }
  }

  const col2heightS = () => {

    if(columnFocus === "shelfpanel"){
      return "var(--focusedpanelmobile)";
    }else {
      return "3rem";
    }
  }

  const col3heightSpreview = () => {
    if(columnFocus === "detailspanel"){
      return "var(--focusedpanelmobile)";
    }else{
      return "3rem";
    }
  }

  const col3heightSauthor = () => {
    if(columnFocus === "detailspanel"){
      return "var(--focusedpanelmobile)";
    }else{
      return "3rem";
    }
  }

    const col1heightM = () => {

      if(columnFocus === "init"){
        return "var(--focusedpaneltablet)";
      }else{
        return "4rem";
      }
    }

    const col2heightM = () => {

      if(columnFocus === "shelfpanel"){
        return "var(--focusedpaneltablet)";
      }else {
        return "4rem";
      }
    }

    const col3heightMpreview = () => {
      if(columnFocus === "detailspanel"){
        return "var(--focusedpaneltablet)";
      }else{
        return "4rem";
      }
    }

    const col3heightMauthor = () => {
      if(columnFocus === "detailspanel"){
        return "var(--focusedpaneltablet)";
      }else{
        return "4rem";
      }
    }

    const col1widthL = () => {

      if(columnFocus === "init"){
        return "var(--initpanel)";
      }else if(columnFocus === "shelfpanel"){
        return "30vw";
      }else{
        return "4rem";
      }
    }

    const col2widthL = () => {

    if(columnFocus === "shelfpanel"){
      return "var(--focusedpanel)";
    }else if(columnFocus === "init"){
      return "4rem";
    }else if(authorView === true){
      return "4rem";
    }else{
      return "30vw";
    }
  }

    const col3widthLpreview = () => {
      if(columnFocus === "detailspanel"){
        return "var(--focusedpanel)";
      }else{
        return "4rem";
      }
    }

    const col3widthLauthor = () => {
      if(columnFocus !== "detailspanel"){
        return "4rem";
      }else if(authorView===true){
        return "var(--initpanel)";
      }else{
        return "var(--focusedpanel)";
      }
    }

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
    const [selectedBook,setSelectedBook] = useState({
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
             const title = book.editions[0].details.bookTitle
             const highlights = book.editions[0].details.bookHighlights
          return `${authors} ${subjects} ${content} ${title} ${highlights}`
          }).join(' ')
      }})

      setAllShelves(allShelves)
      console.log(res.data)

    }).then( console.log(`reloaded shelves in ${languageSetting}`))
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


  const prevBook = () =>{
  if(parseFloat(bookNumber)===0){
    return;
  }else{
    const prev = parseFloat(bookNumber)-1
    setBookNumber(prev)
  }
  }

  const nextBook = () =>{
  if(parseFloat(bookNumber)===parseFloat(selectedShelf.shelfBooks.length)-1){
    return;
  }else{
    const next = parseFloat(bookNumber)+1
    setBookNumber(next)
  }
  }

  return (

    <div className={l?"Row":"column"}>
        {!m && <div class="overline-details" style={{zIndex:"30", height:"3rem", display:"flex", alignItems:"center", justifyContent:"center", background:"var(--searchpanel)", color:"var(--searchpaneltext)",paddingTop:"1rem"}}>HUMANITIESDB</div>}

                {!l && m &&
                < div id = "shelfNav"
              className = "Column transition"
              style = {
                {
                  zIndex: "10",
                  position: "absolute",
                  left: columnFocus === "shelfpanel" ? "0px" : columnFocus === "init" ? "-100%" : authorView === true ? "-100%" : "0px",
                  bottom: "2rem",
                  height:"70vh",
                  width: "4rem",
                  justifyContent: "center"
                }
              } >

                <div className="shelfNav tab-lr mirror" style={{ height:"50%", width:"4rem", background:selectedShelf.shelfBooks.length===1?"var(--inactive)":columnFocus==="shelfpanel"?"var(--lightactionbtn)":"var(--darkactionbtn)",color:selectedShelf.shelfBooks.length===1?"var(--inactivetext)":columnFocus==="shelfpanel"?"var(--lightactionbtntext)":"var(--darkactionbtntext)"}} onClick={()=>{if(selectedShelf.shelfBooks.length===1){return;}else{ setSlideOut(!slideOut)}}}>SHELF</div>

                <div className="shelfNav" style={{height:"4rem", width:"4rem", background:parseFloat(bookNumber)===0?"var(--inactive)":columnFocus==="shelfpanel"?"var(--lightactionbtn)":"var(--darkactionbtn)",color:parseFloat(bookNumber)===0?"var(--inactivetext)":columnFocus==="shelfpanel"?"var(--lightactionbtntext)":"var(--darkactionbtntext)"}} onClick={()=>{prevBook()}}><ArrowLeftRoundedIcon/>prev</div>


                <div className="shelfNav" style={{order:"3",background:parseFloat(bookNumber)===parseFloat(selectedShelf.shelfBooks.length)-1?"var(--inactive)":columnFocus==="shelfpanel"?"var(--lightactionbtn)":"var(--darkactionbtn)",color:parseFloat(bookNumber)===parseFloat(selectedShelf.shelfBooks.length)-1?"var(--inactivetext)":columnFocus==="shelfpanel"?"var(--lightactionbtntext)":"var(--darkactionbtntext)",height:"4rem", width:"4rem"}} onClick={()=>{nextBook()}}><ArrowRightRoundedIcon/>next</div>
                </div>}


              {!m &&
                < div id = "shelfNav"
              className = "Row transition"
              style = {
                {
                  zIndex: "10",
                  position: "absolute",
                  top: columnFocus === "shelfpanel"?"7rem":columnFocus === "detailspanel" ? "10rem" : "-100vh",
                  height:"4rem",
                  width: "100vw",
                  justifyContent: "center"
                }
              } >
                <div className="shelfNav" style={{height:"4rem", width:"4rem", background:parseFloat(bookNumber)===0?"var(--inactive)":columnFocus==="shelfpanel"?"var(--lightactionbtn)":"var(--darkactionbtn)",color:parseFloat(bookNumber)===0?"var(--inactivetext)":columnFocus==="shelfpanel"?"var(--lightactionbtntext)":"var(--darkactionbtntext)"}} onClick={()=>{prevBook()}}><ArrowLeftRoundedIcon/>prev</div>

                <div className={"shelfNav"} style={{height:"4rem", width:"50%", background:selectedShelf.shelfBooks.length===1?"var(--inactive)":columnFocus==="shelfpanel"?"var(--lightactionbtn)":"var(--darkactionbtn)",color:selectedShelf.shelfBooks.length===1?"var(--inactivetext)":columnFocus==="shelfpanel"?"var(--lightactionbtntext)":"var(--darkactionbtntext)"}} onClick={()=>{if(selectedShelf.shelfBooks.length===1){return;}else{ setSlideOut(!slideOut)}}}>SHELF</div>

                <div className="shelfNav" style={{order:"3",background:parseFloat(bookNumber)===parseFloat(selectedShelf.shelfBooks.length)-1?"var(--inactive)":columnFocus==="shelfpanel"?"var(--lightactionbtn)":"var(--darkactionbtn)",color:parseFloat(bookNumber)===parseFloat(selectedShelf.shelfBooks.length)-1?"var(--inactivetext)":columnFocus==="shelfpanel"?"var(--lightactionbtntext)":"var(--darkactionbtntext)",height:"4rem", width:"4rem"}} onClick={()=>{nextBook()}}><ArrowRightRoundedIcon/>next</div>
                </div>
              }



        <div  className="col-1" style={{width:l?col1widthL():"100vw",height:l?"var(--panelheight)":m?col1heightM():col1heightS()}}>

        <SearchForm allShelves={allShelves} xs={xs} s={s} m={m} l={l} xl={xl} columnFocus={columnFocus} setLanguageSetting={setLanguageSetting} languageSetting={languageSetting} setColumnFocus={setColumnFocus} shelfId={shelfId} setShelfId={setShelfId} selectedShelf={selectedShelf} setSelectedShelf={setSelectedShelf} setBookNumber={setBookNumber}/>

        </div>
        <div className="col-2"  style={{width:l?col2widthL():"100vw",boxShadow:l?"var(--panelshadow)":"var(--panelshadowtop)",height:l?"var(--panelheight)":m?col2heightM():col2heightS()}}>
          {selectedShelf && <OpenedShelf xs={xs} s={s} m={m} l={l} xl={xl} setAuthorFocus={setAuthorFocus} setAuthorToGet={setAuthorToGet} setDisplayEarliestPublicationYear={setDisplayEarliestPublicationYear} setColumnFocus={setColumnFocus} authorView={authorView} setAuthorView={setAuthorView} columnFocus={columnFocus} setIsbnOrId={setIsbnOrId} setBookIdentifier={setBookIdentifier} selectedShelf={selectedShelf} setDisplayBookTitle={setDisplayBookTitle} bookNumber={bookNumber} setBookNumber={setBookNumber} slideOut={slideOut} setSlideOut={setSlideOut} selectedBook={selectedBook} setSelectedBook={setSelectedBook}/>}
          </div>

        <AnimatePresence>
          {authorView===false &&
            <motion.div className="col-3" style={{overflow:"hidden",width:l?col3widthLpreview():"100vw",boxShadow:l?"var(--panelshadow)":"var(--panelshadowtop)",height:l?"var(--panelheight)":m?col3heightMpreview():col3heightSpreview()}}
            >
            <GoogleBooksViewer xs={xs} s={s} m={m} l={l} xl={xl} authorView={authorView} columnFocus={columnFocus} authorView={authorView} setAuthorView={setAuthorView} authors={selectedBook.bookAuthor} bookIdentifier={bookIdentifier} setColumnFocus={setColumnFocus} displayBookTitle={displayBookTitle} googleScriptLoaded={googleScriptLoaded} isbnOrId={isbnOrId} slideOut={slideOut} setSlideOut={setSlideOut}/>
            </motion.div>
          }
        </AnimatePresence>
        <AnimatePresence>
          {authorView===true &&
              <motion.div className="col-3" style={{width:l?col3widthLauthor():"100vw",boxShadow:l?"var(--panelshadow)":"var(--panelshadowtop)",height:l?"var(--panelheight)":m?col3heightMauthor():col3heightSauthor()}}
              >
                <OpenedAuthor xs={xs} s={s} m={m} l={l} xl={xl} languageSetting={languageSetting} authorFocus={authorFocus} setAuthorFocus={setAuthorFocus} displayEarliestPublicationYear={displayEarliestPublicationYear} columnFocus={columnFocus} authorView={authorView} setAuthorView={setAuthorView} setColumnFocus={setColumnFocus} displayBookTitle={displayBookTitle} selectedAuthor={selectedAuthor} setShelfId={setShelfId} setBookNumber={setBookNumber} bookNumber={bookNumber}/>
              </motion.div>
          }
        </AnimatePresence>
    </div>
  )
}

export default Access;
