//icons
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import AddCircleIcon from '@material-ui/icons/AddCircle'


import {useState,useEffect} from 'react'
const OpenedShelf = ({selectedShelf, setBookIdentifier, setAuthorFocus, bookNumber, setDisplayEarliestPublicationYear, setColumnFocus,setAuthorView, authorView, setAuthorToGet, setDisplayBookTitle,columnFocus,setIsbnOrId}) => {

  const [googleId, setGoogleId] = useState("")
  const [isbn, setIsbn] = useState("")
  const [contentOrSubjectKeywords,setContentOrSubjectKeywords]=useState(true)
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


//onClick functions
  const setNewBook = (book) =>{
    setGoogleId(book.googleId);
    setIsbn(book.isbn13);
    setSelectedBook(book);
    setDisplayBookTitle(book.bookTitle)
    setToCopy(`${book.bookTitle} by ${book.bookAuthor.join(", ")}`);
    getAndSet(book.bookHighlights);
    console.log(selectedBook)
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
      let  paragraphArr = highlights.split("``")
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
      console.log(res)
    })
  }

  const splitSections = (section) => {
    let sectionfy = section
    .match(/(?<!\/)`([^`]|`\/`)+?`(?!\/)/g)
    if(sectionfy === null || sectionfy === undefined){return}else{
      return sectionfy.map((subsection)=>{return subsection.replace(/`/g,"").trim()})
    }
  }




  return (
      <div style={{color:"var(--shelfpaneltext)",display:"flex",height:"var(--panelheight)"}}>

      <div style={{padding:"2rem 2rem", flex:"1 1", display:columnFocus==="init"?"none":columnFocus==="shelfpanel"?"block":authorView===true?"none":"block"}}>
        <div>
        <p className="subtitle1">Keyword Display</p>
        </div>
        <div className="Row" style={{marginTop:"0.5rem"}}>
        <p onClick={()=>{setContentOrSubjectKeywords(true)}} className="subtitle2" style={{backgroundColor:contentOrSubjectKeywords?"white":"var(--shelfpanellistpressedborder)",color:contentOrSubjectKeywords?"var(--shelfpaneltext)":"white", borderLeft:"none",border:"1.5px solid var(--shelfpanellistpressedborder)", borderRadius:"5px 0 0 5px", padding:"0 1rem"}}>Content</p>
        <p onClick={()=>{setContentOrSubjectKeywords(false)}} className="subtitle2" style={{backgroundColor:contentOrSubjectKeywords?"var(--shelfpanellistpressedborder)":"white", color:contentOrSubjectKeywords?"white":"var(--shelfpaneltext)",borderLeft:"none",border:"1.5px solid var(--shelfpanellistpressedborder)", borderRadius:"0 5px 5px 0", padding:"0 1rem"}}>Background</p>
        </div>
    <div className="noScrollBar" style={{height:"70vh",overflowY:"auto", marginTop:"1rem"}}>
      {selectedShelf.shelfBooks.map((book)=>{
        return <div className="transition" key={book.googleId} onClick={()=>{setNewBook(book)}}
         style={{cursor:book.googleId===googleId?"":"pointer",
        color:"searchpaneltext", backgroundColor:book.googleId===googleId?"var(--shelfpanellistpressed)":"var(--shelfpanellist)",
        border:book.googleId===googleId?"1.5px solid var(--shelfpanellistpressedborder)":"1.5px solid var(--shelfpanellistborder)",
        transform:book.googleId===googleId?"translateY(0.3rem)":"translateY(0px)",
        boxShadow:book.googleId===googleId?"none":"var(--heavyshadow)",
       padding:"0.6rem 1rem",  margin:"1rem 0"}}>
        <div className="subtitle1" style={{margin:"0 0 0.3rem 0"}}>{book.bookTitle}</div>
        <div className="subtitle2" style={{margin:"0 0 0.5rem 0"}}>{book.bookAuthor.join(", ")}</div>
        <div className="body2">{contentOrSubjectKeywords?book.contentKeywords.map((tag)=>{return <p className="tag" style={{display:"inline-block", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>}):book.subjectLinks.map((tag)=>{return <p className="tag" style={{display:"inline-block", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
        </div>
      })}
    </div>
      </div>


<div className="Column noScrollBar" style={{display:columnFocus==="shelfpanel"?"block":"none",flex:"2 2",height:"var(--panelheight)" ,overflowY:"auto",scrollBehavior:"smooth"}}>
      <h4 id="title" style={{paddingTop:"1.5rem"}}>{selectedBook.bookTitle}</h4>


<div className="Row" style={{justifyContent:"spaceBetween"}}>
  <div className="Column" style={{width:"auto",flex:"1 1"}}>
      <div className="subtitle1" style={{padding:"1rem 0"}}>
      {selectedBook.bookAuthor && selectedBook.bookAuthor.join(", ")}
      {document.queryCommandSupported('copy') && <span  value={toCopy}><FileCopyOutlinedIcon  style={{margin:"0 0.5rem", cursor:"pointer"}} onClick={()=>{copyToClipboard(toCopy)}}/><span className="caption" style={{color:"var(--shelfpanellistpressedborder)"}}>{copySuccess}</span>
    </span>
}
</div>

  {selectedBook.earliestPublicationYear &&
      <div className="Row">
      <div className="caption" style={{textAlign:"right",width:"50%",paddingRight:"0.5rem"}}>
        Publication Date:
      </div>
      <div className="subtitle2" style={{textAlign:"left",width:"50%"}}>
        {getYear(selectedBook.earliestPublicationYear)}
      </div>
      </div>}

{selectedBook.bookLength &&
    <div className="Row" style={{height:"auto"}}>
    <div className="caption" style={{textAlign:"right",width:"50%",paddingRight:"0.5rem"}}>
    Pages:
    </div>
    <div className="subtitle2" style={{textAlign:"left",width:"50%"}}>
      {selectedBook.bookLength}
    </div>
    </div>}
      </div>

      <div className="Column" style={{flex:"1 1"}}>
        <span className="btn lightbtn" onClick={()=>{setNewPreview()}} style={{width:"6rem", display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1rem"}}><span  style={{width:"85%"}}>Preview</span><ArrowForwardRoundedIcon/></span>
        {selectedBook.bookAuthor && selectedBook.bookAuthor.map((author) => {
          return <span className="btn lightbtn" onClick={()=>{setNewAuthor(author);setAuthorFocus("init")}} style={{width:"6rem", marginTop:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}}><p style={{width:"85%"}}>{`About ${author}`}</p><ArrowForwardRoundedIcon/></span>
        })}
        <span className="btn" style={{width:"10rem",color:"var(--shelfpanellistpressedborder)",position:"relative"}}
       onClick={()=>{setShowKeywords(!showKeywords)}}><span style={{bottom:"0.5rem", position:"absolute"}}>{showKeywords?"Hide Keywords":"Show Keywords"}</span></span>
    </div>
  </div>

  <div style={{ borderTop: "1.5px solid var(--shelfpanellistpressedborder) "}}></div>
  <div style={{ borderTop: "1.5px solid var(--shelfpanellistpressedborder) ", marginTop:"0.2rem" }}></div>

  <div className="Row" style={{marginTop:"1rem", display:showKeywords?"flex":"none"}}>
    {selectedBook.contentKeywords &&
      <div className="subtitle2" style={{width:"50%"}}>
        <div className="Row" style={{alignItems:"center",marginBottom:"0.5rem"}}>
          Content Keywords <LaunchRoundedIcon style={{marginLeft:"0.5rem"}}/>
          </div>
      <div>{selectedBook.contentKeywords[0] && selectedBook.contentKeywords.map((tag)=>{return <p className="tag" style={{display:"inline-block", border:"1.5px solid var(--shelfpanellistpressedborder)", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
  </div>}

    {selectedBook.subjectLinks &&
      <div style={{width:"50%"}} className="subtitle2">
        <div className="Row" style={{alignItems:"center",marginBottom:"0.5rem"}}>
          Background Keywords <LaunchRoundedIcon style={{marginLeft:"0.5rem"}}/>
          </div>
      <div>{selectedBook.subjectLinks[0] && selectedBook.subjectLinks.map((tag)=>{return <p className="tag" style={{display:"inline-block", border:"1.5px solid var(--shelfpanellistpressedborder)", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
  </div>}
  </div>

  {bookHighlights[0] ? bookHighlights.map((section)=>{
    return <div style={{backgroundColor:"var(--paper)", color:"var(--ink)",padding:"1rem",border:"1.5px solid #C4C4C4", marginTop:"1rem", boxShadow:"var(--heavyshadow)"}}>
    <div className="overline-details" style={{textAlign:"center", marginTop:"0.5rem"}}>
        {section[1]? section[0]:"HIGHLIGHTS"}
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
      No Highlights yet for this book.
      </div>
    }


      <div style={{display:"flex",alignItems:"center", justifyContent:"center",marginBottom:"2rem"}}>
      <a style={{textDecoration:"none",color:"var(--shelfpanellistpressedborder)",padding:"1.5rem"}} href="#title" className="btn">Back to Top</a>
      </div>
    </div>
    <h5 className="tab-lr h5tab tabshelf" style={{opacity:"0.8", cursor:columnFocus!=="shelfpanel"?"pointer":""}} onClick={()=>{if(columnFocus==="init"){return;}else{setColumnFocus("shelfpanel")}}}>
    {selectedBook.bookTitle? selectedBook.bookTitle.slice(0,45):"Book Title"}
    {columnFocus!=="shelfpanel"&&
    <span className="subtitle2" style={{textTransform: "none"
,position:"absolute", bottom:"0"}}>expand <AddCircleIcon style={{alignSelf:"center",width:"1rem",height:"1rem"}}/></span>}
    </h5>
  </div>

  )
}

export default OpenedShelf
