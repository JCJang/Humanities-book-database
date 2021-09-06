
import './Add.css';

//icons
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

import {useState,useRef,useEffect} from 'react'
const OpenedShelf = ({selectedShelf, setBookIdentifier, setDisplayBookTitle,columnFocus,setIsbnOrId}) => {

  const [googleId, setGoogleId] = useState("")
  const [isbn, setIsbn] = useState("")
  const [contentOrBgKeywords,setContentOrBgKeywords]=useState(true)
  const [selectedBook,setSelectedBook] = useState([])
  const [copySuccess, setCopySuccess] = useState('');
  const [toCopy, setToCopy] = useState('');
  const [showKeywords, setShowKeywords] = useState(true)

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
          setDisplayBookTitle(selectedBook[2])
        }else{
          if(googleId.length>1)
          setBookIdentifier(googleId)
          setIsbnOrId(false)
          setDisplayBookTitle(selectedBook[2])
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
        <div className="Row" style={{marginTop:"0.5rem"}}>
        <p onClick={()=>{setContentOrBgKeywords(true)}} className="subtitle2" style={{backgroundColor:contentOrBgKeywords?"white":"var(--shelfpanellistpressedborder)",color:contentOrBgKeywords?"var(--shelfpaneltext)":"white", borderLeft:"none",border:"1.5px solid var(--shelfpanellistpressedborder)", borderRadius:"5px 0 0 5px", padding:"0 1rem"}}>Content</p>
        <p onClick={()=>{setContentOrBgKeywords(false)}} className="subtitle2" style={{backgroundColor:contentOrBgKeywords?"var(--shelfpanellistpressedborder)":"white", color:contentOrBgKeywords?"white":"var(--shelfpaneltext)",borderLeft:"none",border:"1.5px solid var(--shelfpanellistpressedborder)", borderRadius:"0 5px 5px 0", padding:"0 1rem"}}>Background</p>
        </div>
    <div className="noScrollBar" style={{height:"70vh",overflowY:"auto", marginTop:"1rem"}}>
      {selectedShelf[4].map((book)=>{
        return <div className="transition" onClick={()=>{setGoogleId(book[1][1]); setIsbn(book[1][0]);setSelectedBook(book[0]);setToCopy(`${book[0][2]} by ${book[0][3].join(", ")}`);console.log(selectedBook)}}
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


<div className="Column noScrollBar" style={{display:columnFocus==="shelfpanel"?"block":"none",flex:"2 2",height:"var(--panelheight)" ,overflowY:"auto",scrollBehavior:"smooth"}}>
      <h4 id="title" style={{paddingTop:"1.5rem"}}>{selectedBook[2]}</h4>


<div className="Row">
  <div className="Column" style={{width:"auto"}}>
      <div className="subtitle1" style={{padding:"1rem 0"}}>
      {selectedBook[3] && selectedBook[3].join(", ")}
      {document.queryCommandSupported('copy') && <span ref={spanRef} value={toCopy}><FileCopyOutlinedIcon  style={{margin:"0 0.5rem"}} onClick={()=>{copyToClipboard(toCopy)}}/><span className="caption" style={{color:"var(--shelfpanellistpressedborder)"}}>{copySuccess}</span>
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
        <span className="btn lightbtn" style={{width:"6rem",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1rem"}}><span  style={{width:"85%"}}>Preview</span><ArrowForwardRoundedIcon/></span>
        {selectedBook[3] && selectedBook[3].map((a) => {
          return <span className="btn lightbtn" style={{width:"6rem", marginTop:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}}><p style={{width:"85%"}}>{`About ${a}`}</p><ArrowForwardRoundedIcon/></span>
        })}
        <span className="btn" style={{width:"10rem",color:"var(--shelfpanellistpressedborder)",position:"relative"}}
       onClick={()=>{setShowKeywords(!showKeywords)}}><span style={{bottom:"0.5rem", position:"absolute"}}>{showKeywords?"Hide Keywords":"Show Keywords"}</span></span>
    </div>
  </div>

  <div style={{ borderTop: "1.5px solid var(--shelfpanellistpressedborder) "}}></div>
  <div style={{ borderTop: "1.5px solid var(--shelfpanellistpressedborder) ", marginTop:"0.2rem" }}></div>

  <div className="Row" style={{marginTop:"1rem", display:showKeywords?"flex":"none"}}>
    {selectedBook[5] &&
      <div className="subtitle2" style={{width:"50%"}}>
        <div className="Row" style={{alignItems:"center"}}>
          Content Keywords <LaunchRoundedIcon style={{marginLeft:"0.5rem"}}/>
          </div>
      <div>{selectedBook[5][0] && selectedBook[5].map((tag)=>{return <p className="tag" style={{display:"inline-block", border:"1.5px solid var(--shelfpanellistpressedborder)", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
  </div>}

    {selectedBook[4] &&
      <div style={{width:"50%"}} className="subtitle2">
        <div className="Row" style={{alignItems:"center"}}>
          Background Keywords <LaunchRoundedIcon style={{marginLeft:"0.5rem"}}/>
          </div>
      <div>{selectedBook[4][0] && selectedBook[4].map((tag)=>{return <p className="tag" style={{display:"inline-block", border:"1.5px solid var(--shelfpanellistpressedborder)", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
  </div>}
  </div>

  {selectedBook &&
    <div style={{backgroundColor:"var(--paper)", color:"var(--ink)",padding:"1rem",border:"1.5px solid #C4C4C4", marginTop:"1rem", boxShadow:"var(--heavyshadow)"}}>
        <div className="overline-details" style={{textAlign:"center"}}>
              HIGHLIGHTS
      </div>

    <div className="body1-details" style={{ textAlign:"left", height:"auto"}}>
      {selectedBook[6]}
      </div>
      </div>}
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <a href="#title" className="Link btn">Back to Top</a>
      </div>
    </div>
    <h5 style={{width:"4rem", alignSelf:"center", height:"80vh", writingMode:"vertical-lr", transform:"rotate(180deg)", transformOrigin:"center center"}}>
    {selectedBook[2]}
    </h5>
  </div>

  )
}

export default OpenedShelf
