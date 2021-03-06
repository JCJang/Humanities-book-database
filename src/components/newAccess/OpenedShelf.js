//icons
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import {useState,useEffect,useRef} from 'react'
import createSvgIcon from "@material-ui/icons/utils/createSvgIcon";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useTranslation } from 'react-i18next'


const ArrowForwardCircleIcon = createSvgIcon(
  <>
  <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
  <path d="M11.999 1.993c-5.514.001-10 4.487-10 10.001s4.486 10 10.001 10c5.513 0 9.999-4.486 10-10c0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8s3.589-8 8-8.001C16.411 3.994 20 7.583 20 11.994c-.001 4.411-3.59 8-8 8z" fill="currentColor"/>
  <path d="M12 10.994H8v2h4V16l4.005-4.005L12 7.991z" fill="currentColor"/>
  </>
);

const OpenedShelf = ({xs,s,m,l,xl,selectedShelf, selectedBook, setSelectedBook, setBookIdentifier, setAuthorFocus, slideOut, setSlideOut, bookNumber, setDisplayEarliestPublicationYear, setColumnFocus,setAuthorView, authorView, setAuthorToGet, setDisplayBookTitle,columnFocus,setIsbnOrId}) => {

  const [googleId, setGoogleId] = useState("")
  const [isbn, setIsbn] = useState("")
  const [contentOrSubjectKeywords,setContentOrSubjectKeywords]=useState(true)
  const {t, i18n} = useTranslation();

  const [copySuccess, setCopySuccess] = useState('');
  const [toCopy, setToCopy] = useState('');
  const [showKeywords, setShowKeywords] = useState(true)
  const [bookHighlights, setBookHighlights] = useState([])

   const copyToClipboard = async copyMe => {
       try {
         await navigator.clipboard.writeText(copyMe);
         setCopySuccess('Copied!');
       } catch (err) {
         setCopySuccess('Failed to copy!');
       }
     };

       const getYear = (date)=> {
         if(!date){return "undefined"}
         const newDate = date.toString()
         if(newDate.slice(0,1)==="-"){
           const year = `${newDate.slice(1,5)} B.C.`
           return year;

         }else{
           const year = newDate.match(/^\d*/);
           return year;
         }
       }

 const [displayShelfScroll, setDisplayShelfScroll] = useState(true)

       const shelfScroll = useRef();

         const detectShelfScrollBottom = () => {
             if (shelfScroll.current) {
               const { scrollTop, scrollHeight, clientHeight } = shelfScroll.current;
               if (scrollTop + clientHeight > scrollHeight - 200) {
                 // TO SOMETHING HERE
                 setDisplayShelfScroll(false)
               }else{
                 setDisplayShelfScroll(true)
               }
             }
           };

   const [displayBookScroll, setDisplayBookScroll] = useState(true)

       const bookScroll = useRef();

         const detectBookScrollBottom = () => {
             if (bookScroll.current) {
               const { scrollTop, scrollHeight, clientHeight } = bookScroll.current;
               if (scrollTop + clientHeight > scrollHeight - 200) {
                     // TO SOMETHING HERE
                 setDisplayBookScroll(false)
               }else{
                 setDisplayBookScroll(true)
               }
             }
         };

 //reset copy success message upon book change

       useEffect(()=>{
        setCopySuccess('')
      },[selectedBook])

  //set book identifer for GoogleBooksViewer upon book change
    useEffect(()=>{
        if(isbn.length>1){
          setBookIdentifier(isbn)
          setIsbnOrId(true)
          setDisplayBookTitle(selectedBook.bookTitle)
          setDisplayEarliestPublicationYear(selectedBook.earliestPublicationYear)
        }else{
          if(googleId.length>1)
          setBookIdentifier(googleId)
          setIsbnOrId(false)
          setDisplayBookTitle(selectedBook.bookTitle)
          setDisplayEarliestPublicationYear(selectedBook.earliestPublicationYear)

        }
    },[googleId])

//autoset selectedBook as first book upon shelfChange


useEffect(()=>{
  setToCopy(`${selectedShelf.shelfBooks[bookNumber].bookTitle} by ${selectedShelf.shelfBooks[bookNumber].bookAuthor.join(", ")}`)
  setSelectedBook(selectedShelf.shelfBooks[bookNumber])
  setDisplayBookTitle(selectedShelf.shelfBooks[bookNumber].bookTitle)
  setGoogleId(selectedShelf.shelfBooks[bookNumber].googleId)
  setIsbn(selectedShelf.shelfBooks[bookNumber].isbn13)
  getAndSet(selectedShelf.shelfBooks[bookNumber].bookHighlights);

},[selectedShelf, bookNumber])


useEffect(()=>{
  detectBookScrollBottom();
  detectShelfScrollBottom()
},[selectedShelf])

//onClick functions
  const setNewBook = (book) =>{
    setGoogleId(book.googleId);
    setIsbn(book.isbn13);
    setSelectedBook(book);
    setDisplayBookTitle(book.bookTitle)
    setToCopy(`${book.bookTitle} by ${book.bookAuthor.join(", ")}`);
    getAndSet(book.bookHighlights);
    detectBookScrollBottom();
    detectShelfScrollBottom()
  }

const setNewAuthor = (author) =>{
  setAuthorView(true);
  setAuthorToGet(author);
  setColumnFocus("detailspanel");
}

const setNewPreview = () =>{
  setAuthorView(false);
  setColumnFocus("detailspanel");
}

const getAndSet = async(highlights) =>{
    if(highlights.length===0){setBookHighlights([]); return}
      const parseHighlights = async() => {
      let  paragraphArr = highlights.trim().split("``")
      if(paragraphArr.length>1){
        paragraphArr = paragraphArr.slice(1).map(a=>{return a.replace(/\n*/g,"")})
      }
      function splitArray( array ) {
      const arrayOfArrays = [];
          while (array.length > 0) {
              let arrayElement = array.splice(0,2);
              arrayOfArrays.push(arrayElement);
          }
          return arrayOfArrays;
      }
      return splitArray(paragraphArr)
      }
    await parseHighlights().then((res)=>{
      setBookHighlights(res)
    })
  }

  const splitSections = (section) => {
    let sectionfy = section
    .match(/(?<!\/)`([^`]|`\/`)+?`(?!\/)/g)
    if(sectionfy === null || sectionfy === undefined){return}else{
      return sectionfy.map((subsection)=>{return subsection.replace(/`/g,"").trim()})
    }
  }

//if tablet, do nothing. If mobile, slide out from top. stop at shelf if toggling from shelfpanel. Stop at bottom is toggling from preview panel.
  const shelfNavTop = () =>{
    if(m){
       if(columnFocus === "shelfpanel"){
        return "7.5rem"
       }else if(columnFocus === "detailspanel"){
        return "11.5rem"
       }
    } else if(!m && slideOut){
       if(columnFocus === "shelfpanel"){
         return "6rem"
       }else if(columnFocus === "detailspanel"){
         return "9rem"
       }
   } else if (!m){
       return "-100vh"
     }
  }


  const openedShelfHeight = () =>{
    if(l){
      return "var(--panelheight)";
    } else if (m){
      if(columnFocus!=="shelfpanel"){
        return "4rem"
      }else{
        return "var(--focusedpaneltablet)"
      }
    }else if (!m){
      if(columnFocus!=="shelfpanel"){
        return "3rem"
      }else{
        return "var(--focusedpanelmobile)"
      }
    }
  }

  return (
      <div className={l?"Row":"Column"} style={{color:"var(--shelfpaneltext)",height:openedShelfHeight()}}>

      < div className = "transition"
            style = {
              {
                zIndex: "4",
                flex: "1 1",
                position: l ? "" : "absolute",
                left: l ? "" : slideOut ? "0px" : m ? "-100vw" : "0px",
                top: shelfNavTop(),
                height: l ? "" : m ? "var(--focusedpaneltablet)" : "var(--focusedpanelmobile)",
                display: columnFocus === "init" ? "none" : columnFocus === "shelfpanel" ? "block" : authorView === true ? "none" : "block",
                background: "var(--shelfpanel)",
                width: l ? "" : "100vw",
                maxWidth:l?"20vw":"",
                margin: l ? "2rem 2rem" : "0",
                padding: l ? "0" : m ? "2rem 5rem" : "7rem 0 2rem 0",
                boxShadow: !l && "var(--panelshadowtop)",
              }
            } >
        <div style={{margin:m?"":"0 1rem"}}>
        <p className="subtitle1">{t("Find.Shelf.keywordSwitch.title")}</p>
        </div>
        <div className="Row" style={{margin:m?"0.5rem 0 0 0":"0.5rem 1rem 0 1rem"}}>
        <p onClick={()=>{setContentOrSubjectKeywords(true)}} className="subtitle2" style={{backgroundColor:contentOrSubjectKeywords?"white":"#907e73",color:contentOrSubjectKeywords?"var(--shelfpaneltext)":"white", borderLeft:"none",border:"1.5px solid #907e73", borderRadius:"5px 0 0 5px", padding:"0 1rem"}}>{t("Find.Shelf.keywordSwitch.content")}</p>
        <p onClick={()=>{setContentOrSubjectKeywords(false); detectBookScrollBottom(); detectShelfScrollBottom()}} className="subtitle2" style={{backgroundColor:contentOrSubjectKeywords?"#907e73":"white", color:contentOrSubjectKeywords?"white":"var(--shelfpaneltext)",borderLeft:"none",border:"1.5px solid #907e73", borderRadius:"0 5px 5px 0", padding:"0 1rem"}}>{t("Find.Shelf.keywordSwitch.background")}</p>
        </div>
    <div className="noScrollBar" onScroll={()=>detectShelfScrollBottom()} ref={shelfScroll} style={{alignItems:"center",height:m?"75vh":"var(--shelfnavheightmobile)",overflowY:"auto", marginTop:"1rem"}}>
      {selectedShelf.shelfBooks.map((book)=>{
        return <div className="transition" key={book.googleId} onClick={()=>{setNewBook(book); setSlideOut(false)}}
         style = {
             {
               cursor: book.googleId === googleId ? "" : "pointer",
               color: "searchpaneltext",
               backgroundColor: book.googleId === googleId ? "var(--shelfpanellistpressed)" : "var(--shelfpanellist)",
               border: book.googleId === googleId ? "1.5px solid var(--shelfpanellistpressedborder)" : "1.5px solid var(--shelfpanellistborder)",
               transform: book.googleId === googleId ? "translateY(0.3rem)" : "translateY(0px)",
               boxShadow: book.googleId === googleId ? "none" : "var(--heavyshadow)",
               padding: "0.6rem 1rem",
               margin: m?"1rem 0":"1rem"
             }
           }>
        <div className="subtitle1" style={{margin:"0 0 0.3rem 0"}}>{book.bookTitle}</div>
        <div className="subtitle2" style={{margin:"0 0 0.5rem 0"}}>{book.bookAuthor.join(", ")}</div>
        <div className="body2">{contentOrSubjectKeywords?book.contentKeywords.map((tag)=>{return <p className="tag" style={{display:"inline-block", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>}):book.subjectLinks.map((tag)=>{return <p className="tag" style={{display:"inline-block", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
        </div>
      })}
      {displayShelfScroll &&  <div class="scrollIndicator-container">
        <div class="scrollIndicatorShelf" ></div>
      </div>
    }
    </div>
      </div>


<div className="Column noScrollBar"  onScroll={()=>detectBookScrollBottom()} ref={bookScroll} style={{display:columnFocus==="shelfpanel"?"":"none",flex:"2 2",height:l?"var(--panelheight)":m?"var(--focusedpaneltablet)":"var(--focusedpanelmobile)",width:l?"":m?"var(--tabletWidth)":"var(--mobileWidth)", overflowY:"auto",scrollBehavior:"smooth", margin:!m?"0 2rem":!l?"0 5rem":"", paddingTop:!m && "5rem"}}>
      <h4 className="h4-details" id="title" style={{paddingTop:"1.5rem"}}>{selectedBook.bookTitle}</h4>


<div className="Row" style={{justifyContent:"space-between"}}>
  <div className="Column" style={{width:"auto",flex:"1 1"}}>
      <div className="subtitle1" style={{padding:"1.5rem 0"}}>
      {selectedBook.bookAuthor && selectedBook.bookAuthor.join(", ")}
      {document.queryCommandSupported('copy') && <span  value={toCopy}><FileCopyOutlinedIcon  style={{margin:"0 0.5rem", cursor:"pointer"}} onClick={()=>{copyToClipboard(toCopy)}}/><span className="caption" style={{color:"var(--shelfpanellistpressedborder)"}}>{copySuccess}</span>
    </span>
}
</div>

  {selectedBook.earliestPublicationYear &&
      <div className="Row">
      <div className="caption" style={{textAlign:"right",width:"50%",paddingRight:"0.5rem"}}>
      {t("Find.Shelf.publication")}:
      </div>
      <div className="subtitle2" style={{textAlign:"left",width:"50%"}}>
        {getYear(selectedBook.earliestPublicationYear)}
      </div>
      </div>}

{selectedBook.bookLength &&
    <div className="Row" style={{height:"auto"}}>
    <div className="caption" style={{textAlign:"right",width:"50%",paddingRight:"0.5rem"}}>
    {t("Find.Shelf.pages")}:
    </div>
    <div className="subtitle2" style={{textAlign:"left",width:"50%"}}>
      {selectedBook.bookLength}
    </div>
    </div>}
      </div>

      <div className="Column" style={{flex:"1 1"}}>
        <span className="btn lightbtn" onClick={()=>{setNewPreview()}} style={{width:"6rem", display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1.5rem"}}><span  style={{width:"85%"}}>{t("Find.Shelf.preview")}</span><ArrowForwardCircleIcon/></span>
        {selectedBook.bookAuthor && selectedBook.bookAuthor.map((author) => {
          return <span className="btn lightbtn" onClick={()=>{setNewAuthor(author);setAuthorFocus("init")}} style={{width:"6rem", marginTop:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}}><p style={{width:"85%"}}>{`${t("Find.Shelf.about")} ${author}`}</p><ArrowForwardCircleIcon/></span>
        })}
        <span className="btn" style={{width:"10rem",color:"var(--shelfpanellistpressedborder)",position:"relative"}}
       onClick={()=>{setShowKeywords(!showKeywords); detectBookScrollBottom(); detectShelfScrollBottom()}}><span style={{bottom:"0.5rem", position:"absolute"}}>{showKeywords?t("Find.Shelf.hide"):t("Find.Shelf.show")}</span></span>
    </div>
  </div>

  <div style={{ borderTop: "1.5px solid var(--shelfpanellistpressedborder) "}}></div>
  <div style={{ borderTop: "1.5px solid var(--shelfpanellistpressedborder) ", marginTop:"0.2rem" }}></div>

  <div className="Row" style={{marginTop:"1rem", display:showKeywords?"flex":"none"}}>
    {selectedBook.contentKeywords &&
      <div className="subtitle2" style={{width:"50%"}}>
        <div className="Row" style={{alignItems:"center",marginBottom:"0.5rem"}}>
        {t("Find.Shelf.contentKeywords")} <LaunchRoundedIcon style={{marginLeft:"0.5rem"}}/>
          </div>
      <div>{selectedBook.contentKeywords[0] && selectedBook.contentKeywords.map((tag)=>{return <p className="tag" style={{display:"inline-block", border:"1.5px solid var(--shelfpanellistpressedborder)", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.2rem"}}><a href={`https://en.wikipedia.org/wiki/${tag.replace(/\s/g,'_')}`} target="_blank" className="shelfPanelLink">{tag}</a></p>})}</div>
  </div>}

    {selectedBook.subjectLinks &&
      <div style={{width:"50%"}} className="subtitle2">
        <div className="Row" style={{alignItems:"center",marginBottom:"0.5rem"}}>
        {t("Find.Shelf.backgroundKeywords")} <LaunchRoundedIcon style={{marginLeft:"0.5rem"}}/>
          </div>
      <div>{selectedBook.subjectLinks[0] && selectedBook.subjectLinks.map((tag)=>{return <p className="tag" style={{display:"inline-block", border:"1.5px solid var(--shelfpanellistpressedborder)", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.2rem"}}><a href={`https://en.wikipedia.org/wiki/${tag.replace(/\s/g,'_')}`} target="_blank" className="shelfPanelLink">{tag}</a></p>})}</div>
  </div>}
  </div>

  {bookHighlights[0] ? bookHighlights.map((section)=>{
    return <div style={{backgroundColor:"var(--paper)", color:"var(--ink)",padding:"1rem",border:"1.5px solid #C4C4C4", marginTop:"1rem", boxShadow:"var(--heavyshadow)"}}>
    <div className="overline-details" style={{textAlign:"center", marginTop:"0.5rem"}}>
        {section[1]? section[0]:t("Find.Shelf.highlights").toUpperCase()}
      </div>

    <div className="body1-details" style={{ textAlign:"justify", height:"auto"}}>
      {section[1]?
        splitSections(section[1]).map((subsection, index)=>{
        return <div style={{margin:index===0?"1rem 1rem":"1.5rem 1rem"}}>
        {subsection.split("/").map((x, index)=>{return <div style={{textIndent:index===0?"":"2rem"}}>{x}</div>})}
        </div>})
        :
        splitSections(section[0]).map((subsection, index)=>{
          return <div style={{margin:index===0?"1rem 1rem":"1.5rem 1rem"}}>
          {subsection.split("/").map((x, index)=>{return <div style={{textIndent:index===0?"":"2rem"}}>{x}</div>})}
          </div>})}
      </div>
      </div>
  }):
      <div className="body1-details" style={{backgroundColor:"var(--paper)", color:"var(--ink)",padding:"1rem",border:"1.5px solid #C4C4C4", marginTop:"1rem", padding:"1rem 3rem", boxShadow:"var(--heavyshadow)",textAlign:"justify", height:"auto"}}>
      {t("Find.Shelf.noHighlights")}
      </div>
    }


      <div style={{display:"flex",alignItems:"center", justifyContent:"center",marginBottom:"2rem"}}>
      <a style={{textDecoration:"none",color:"var(--shelfpanellistpressedborder)",padding:"1.5rem"}} href="#title" className="btn">{t("Util.backToTop")}</a>
      </div>
      {displayBookScroll &&  <div class="scrollIndicator-container" style={{alignSelf:"center"}}>
        <div class="scrollIndicatorBook"></div>
      </div>}
    </div>
    <h5 className={l?"tabshelf tab-lr h5tab-l":m?"h5tab-m":"h5tab-s"} style={{opacity:"0.8", cursor:columnFocus==="init"&&l?"":columnFocus!=="shelfpanel"?"pointer":"",display:l?"":columnFocus==="shelfpanel"?"none":"flex",alignItems:"center",justifyContent:"space-between",padding:l?"":m?"2rem":"1.6rem"}} onClick={()=>{if(l && columnFocus==="init"){return;}else{setColumnFocus("shelfpanel")}}}>
    {selectedBook.bookTitle && l? selectedBook.bookTitle.slice(0,45):selectedBook.bookTitle?`${t("Find.Shelf.placeholder")} ${selectedBook.bookTitle.slice(0,12)}...`:t("Find.Shelf.placeholder")}
    {columnFocus!=="shelfpanel" &&  <span className="subtitle2" style={{display:"flex",textTransform: "none"
,position:l?"absolute":"relative", left:l?"1rem":"", bottom:l?"0":""}}><p>{t("Util.expand")}</p><AddCircleOutlineOutlinedIcon style={{alignSelf:"center",width:"1rem",height:"1rem",marginLeft:!l&&"0.5rem",marginTop:l&&"0.5rem"}}/></span>}
    </h5>
  </div>

  )
}

export default OpenedShelf
