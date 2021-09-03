
import './Add.css';
import {useState,useEffect} from 'react'
const OpenedShelf = ({selectedShelf}) => {

  const [googleId, setGoogleId] = useState("")
  const [isbn, setIsbn] = useState("")
  const [contentOrBgKeywords,setContentOrBgKeywords]=useState(true)
  const [selectedBook,setSelectedBook] = useState([])
  return (
    <div>
      <div className="forty-sixty">
      <div>
      {selectedShelf[4].map((book)=>{
        return <div onClick={()=>{setGoogleId(book[1][1]); setIsbn(book[1][2])}}
         style={{
        color:"searchpaneltext", backgroundColor:book[1][1]===googleId?"var(--shelfpanellistpressed)":"var(--shelfpanellist)",
        border:book[1][1]==googleId?"1px solid var(--shelfpanellistborder)":"1px solid var(--shelfpanellistpressedborder)",
        transform:book[1][1]==googleId?"translateY(0.3rem)":"translateY(0px)",
        boxShadow:book[1][1]==googleId?"none":"var(--heavyshadow)",
        margin:"1rem 2.8rem"}}>
        <div>{book[0][2]}</div>
        <div>by {book[0][3].join(", ")}</div>
        <div>{contentOrBgKeywords?book[0][4]:book[0][5]}</div>
        </div>
      })}
      </div>
      <div className="Column">
      <h4>{selectedShelf[0]}</h4>
      {selectedBook}
      </div>
      </div>
      </div>

  )
}

export default OpenedShelf
