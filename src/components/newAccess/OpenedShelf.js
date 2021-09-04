
import './Add.css';
import {useState,useEffect} from 'react'
const OpenedShelf = ({selectedShelf}) => {

  const [googleId, setGoogleId] = useState("")
  const [isbn, setIsbn] = useState("")
  const [contentOrBgKeywords,setContentOrBgKeywords]=useState(true)
  const [selectedBook,setSelectedBook] = useState([])
  return (
    <div>
      <div style={{color:"var(--shelfpaneltext)",display:"flex"}}>

      <div style={{margin:"1rem 2.8rem", flex:"1 1"}}>
        <div>
        <p className="subtitle1">Keyword Display</p>
        </div>
        <div className="Row">
        <p onClick={()=>{setContentOrBgKeywords(true)}} style={{backgroundColor:contentOrBgKeywords?"white":"var(--shelfpanellistborder)",color:contentOrBgKeywords?"var(--shelfpanellistborder)":"white", borderRadius:"5px 0 0 5px", padding:"0 1rem"}}>Content</p>
        <p onClick={()=>{setContentOrBgKeywords(false)}} style={{backgroundColor:contentOrBgKeywords?"var(--shelfpanellistborder)":"white", color:contentOrBgKeywords?"white":"var(--shelfpanellistborder)", borderRadius:"0 5px 5px 0", padding:"0 1rem"}}>Background</p>
        </div>
    <div style={{overflowY:"auto"}}>
      {selectedShelf[4].map((book)=>{
        return <div onClick={()=>{setGoogleId(book[1][1]); setIsbn(book[1][2]);setSelectedBook(book[0])}}
         style={{
        color:"searchpaneltext", backgroundColor:book[1][1]===googleId?"var(--shelfpanellistpressed)":"var(--shelfpanellist)",
        border:book[1][1]==googleId?"1px solid var(--shelfpanellistborder)":"1px solid var(--shelfpanellistpressedborder)",
        transform:book[1][1]==googleId?"translateY(0.3rem)":"translateY(0px)",
        boxShadow:book[1][1]==googleId?"none":"var(--heavyshadow)",
       padding:"0.6rem 1rem",  margin:"1rem 0"}}>
        <div className="subtitle1" style={{margin:"0 0 0.3rem 0"}}>{book[0][2]}</div>
        <div className="caption" style={{margin:"0 0 0.5rem 0"}}>by {book[0][3].join(", ")}</div>
        <div className="body2">{contentOrBgKeywords?book[0][5].join(" "):book[0][4].join(" ")}</div>
        </div>
      })}
    </div>
      </div>
      <div className="Column" style={{margin:"0 5.6rem 0 0",flex:"2 2"}}>
      <h4>{selectedBook[2]}</h4>
      <div className="subtitle1">
      {selectedBook[3] && selectedBook[3].join(", ")}
      </div>
      <div className="Row">
      {selectedBook[5] &&
      <div style={{width:"50%"}}>
        <strong>Content Keywords</strong>
      <div>{selectedBook[5][0] && selectedBook[5].map((tag)=>{return <p className="tag" style={{display:"inline-block", border:"1px solid var(--shelfpaneltext)", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
    </div>}
    {selectedBook[4] &&
    <div style={{width:"50%"}}>
      <strong>Background Keywords</strong>
      <div>{selectedBook[4][0] && selectedBook[4].map((tag)=>{return <p className="tag" style={{display:"inline-block", border:"1px solid var(--shelfpaneltext)", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag}</p>})}</div>
    </div>}
  </div>
  {selectedBook &&
    <div style={{backgroundColor:"var(--paper)", color:"var(--ink)",padding:"1rem"}}>
      <div className="detailoverline" style={{textAlign:"center"}}>
        HIGHLIGHTS
      </div>
      <div style={{ textAlign:"left"}}>
      {selectedBook[6]}
    </div>
  </div>}
      </div>
      </div>
    </div>

  )
}

export default OpenedShelf
