
import './Add.css';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import {useState,useRef,useEffect} from 'react'
const OpenedShelf = ({selectedShelf, setBookIdentifier, columnFocus,setIsbnOrId}) => {

  const [googleId, setGoogleId] = useState("")
  const [isbn, setIsbn] = useState("")
  const [contentOrBgKeywords,setContentOrBgKeywords]=useState(true)
  const [selectedBook,setSelectedBook] = useState([])
  const [copySuccess, setCopySuccess] = useState('');
  const [toCopy, setToCopy] = useState('');

   const spanRef = useRef(null);

   const copyToClipboard = async copyMe => {
       try {
         await navigator.clipboard.writeText(copyMe);
         setCopySuccess('Copied!');
       } catch (err) {
         setCopySuccess('Failed to copy!');
       }
     };

 //reset copy success message upon book change

       useEffect(()=>{
        setCopySuccess('')
      },[selectedBook])

  //set book identifer for GoogleBooksViewer upon book change
    useEffect(()=>{
        if(isbn.length>1){
          console.log(isbn)
          setBookIdentifier(isbn)
          setIsbnOrId(true)
        }else{
          if(googleId.length>1)
          setBookIdentifier(googleId)
          setIsbnOrId(false)
        }
    },[googleId,isbn])

//autoset selectedBook as first book upon shelfChange

  useEffect(()=>{
    setToCopy(`${selectedShelf[4][0][0][2]} by ${selectedShelf[4][0][0][3].join(", ")}`)
    setSelectedBook(selectedShelf[4][0][0])
    setGoogleId(selectedShelf[4][0][1][1])
    setIsbn(selectedShelf[4][0][1][0])
  },[selectedShelf])


  return (
      <div style={{color:"var(--shelfpaneltext)",display:"flex",height:"var(--panelheight)"}}>

      <div style={{padding:"2rem 2rem", flex:"1 1"}}>
        <div>
        <p className="subtitle1">Keyword Display</p>
        </div>
        <div className="Row">
        <p onClick={()=>{setContentOrBgKeywords(true)}} className="subtitle2" style={{backgroundColor:contentOrBgKeywords?"white":"var(--shelfpanellistpressedborder)",color:contentOrBgKeywords?"var(--shelfpaneltext)":"white", borderLeft:"none",border:"1.5px solid var(--shelfpanellistpressedborder)", borderRadius:"5px 0 0 5px", padding:"0 1rem"}}>Content</p>
        <p onClick={()=>{setContentOrBgKeywords(false)}} className="subtitle2" style={{backgroundColor:contentOrBgKeywords?"var(--shelfpanellistpressedborder)":"white", color:contentOrBgKeywords?"white":"var(--shelfpaneltext)",borderLeft:"none",border:"1.5px solid var(--shelfpanellistpressedborder)", borderRadius:"0 5px 5px 0", padding:"0 1rem"}}>Background</p>
        </div>
    <div style={{height:"60vh",overflowY:"auto"}}>
      {selectedShelf[4].map((book)=>{
        return <div onClick={()=>{setGoogleId(book[1][1]); setIsbn(book[1][0]);setSelectedBook(book[0]);setToCopy(`${book[0][2]} by ${book[0][3].join(", ")}`);console.log(selectedBook)}}
         style={{
        color:"searchpaneltext", backgroundColor:book[1][1]===googleId?"var(--shelfpanellistpressed)":"var(--shelfpanellist)",
        border:book[1][1]==googleId?"1.5px solid var(--shelfpanellistpressedborder)":"1.5px solid var(--shelfpanellistborder)",
        transform:book[1][1]==googleId?"translateY(0.3rem)":"translateY(0px)",
        boxShadow:book[1][1]==googleId?"none":"var(--heavyshadow)",
       padding:"0.6rem 1rem",  margin:"1rem 0"}}>
        <div className="subtitle1" style={{margin:"0 0 0.3rem 0"}}>{book[0][2]}</div>
        <div className="subtitle2" style={{margin:"0 0 0.5rem 0"}}>{book[0][3].join(", ")}</div>
        <div className="body2">{contentOrBgKeywords?book[0][5].map((tag)=>{return <p className="tag" style={{display:"inline-block", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>}):book[0][4].map((tag)=>{return <p className="tag" style={{display:"inline-block", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
        </div>
      })}
    </div>
      </div>


<div className="Column" style={{display:columnFocus==="shelfpanel"?"block":"none",flex:"2 2",height:"var(--panelheight)"}}>
      <h4 style={{paddingTop:"1.5rem"}}>{selectedBook[2]}</h4>


<div className="Row">
  <div className="Column" style={{width:"auto"}}>
      <div className="subtitle1" style={{padding:"1rem 0"}}>
      {selectedBook[3] && selectedBook[3].join(", ")}
      {document.queryCommandSupported('copy') && <span ref={spanRef} value={toCopy}><FileCopyOutlinedIcon  onClick={()=>{copyToClipboard(toCopy)}}/><span>{copySuccess}</span>
    </span>
}
</div>

  {selectedBook[1]&&
      <div className="Row">
      <div className="caption" style={{textAlign:"right",width:"50%",paddingRight:"0.5rem"}}>
        Publication Date:
      </div>
      <div className="subtitle2" style={{textAlign:"left",width:"50%"}}>
        {selectedBook[1]}
      </div>
      </div>}

  <div className="Row">
  <div className="caption" style={{textAlign:"right",width:"50%",paddingRight:"0.5rem"}}>
    Author Age at time of Publication:
  </div>
  <div className="subtitle2" style={{textAlign:"left",width:"50%"}}>
    wait
  </div>
  </div>

{selectedBook[7]&&
    <div className="Row" style={{height:"auto"}}>
    <div className="caption" style={{textAlign:"right",width:"50%",paddingRight:"0.5rem"}}>
    Pages:
    </div>
    <div className="subtitle2" style={{textAlign:"left",width:"50%"}}>
      {selectedBook[7]}
    </div>
    </div>}
      </div>


      <div className="Column">
        <span className="btn lightbtn" style={{width:"6rem",display:"flex",justifyContent:"center",alignItems:"center"}}><span  style={{width:"85%"}}>Preview</span><ArrowForwardOutlinedIcon/></span>
        {selectedBook[3] && selectedBook[3].map((a) => {
          return <span className="btn lightbtn" style={{width:"6rem", marginTop:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}}><p style={{width:"85%"}}>{`More about ${a}`}</p><ArrowForwardOutlinedIcon/></span>
        })}
    </div>
  </div>


  <div className="Row">
    {selectedBook[5] &&
      <div className="subtitle2" style={{width:"50%"}}>
          Content Keywords
      <div>{selectedBook[5][0] && selectedBook[5].map((tag)=>{return <p className="tag" style={{display:"inline-block", border:"1.5px solid var(--shelfpanellistpressedborder)", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
  </div>}

    {selectedBook[4] &&
      <div style={{width:"50%"}} className="subtitle2">
          Background Keywords
      <div>{selectedBook[4][0] && selectedBook[4].map((tag)=>{return <p className="tag" style={{display:"inline-block", border:"1.5px solid var(--shelfpanellistpressedborder)", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
  </div>}
  </div>

  {selectedBook &&
    <div style={{backgroundColor:"var(--paper)", color:"var(--ink)",padding:"1rem",overflowY:"auto",border:"1.5px solid #C4C4C4",boxShadow:"var(--heavyshadow)"}}>
        <div className="overline-details" style={{textAlign:"center"}}>
              HIGHLIGHTS
      </div>

    <div className="body1-details" style={{ textAlign:"left", height:"auto", maxHeight:"70vh"}}>
      {selectedBook[6]}
      </div>
      </div>}
    </div>
    <h5 style={{width:"4rem", alignSelf:"center", height:"80vh", writingMode:"vertical-lr", transform:"rotate(180deg)", transformOrigin:"center center"}}>
    {selectedBook[2]}
    </h5>
  </div>

  )
}

export default OpenedShelf
