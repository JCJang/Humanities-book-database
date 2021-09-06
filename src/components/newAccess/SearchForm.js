import {useState,useEffect} from 'react'

const SearchForm = ({allShelves, columnFocus, setShelfLanguage,shelfLanguage, shelfId, setShelfId,selectedShelf,setSelectedShelf}) => {
  const [shelfQuery, setShelfQuery] =  useState('')
  const [shelfResults, setShelfResults] = useState(false)
  const [shelfTitle, setShelfTitle] = useState('Shelf Title')

useEffect(()=>{
  if(!allShelves){return}
      if(!shelfQuery){
        setShelfResults(allShelves)
      }
      setShelfResults(allShelves.filter((shelf)=>{return shelf[0].toLowerCase().indexOf(shelfQuery.toLowerCase())>=0}))

},[shelfQuery,allShelves])

  return (
    <div style={{color:"var(--searchpaneltext)"}}>
    <div style={{display:"flex",
    flexDirection: "row",width:"100%"}}>
    <div style={{width:"calc(100% - 8.4rem)",display:columnFocus==="detailspanel"?"none":"flex",margin:"0 0 0 2.8rem",
    flexDirection: "column"}}>
    <h5 className="SearchCaption" style={{font:shelfResults?"var(--main-overline)":"var(--main-headline4)", textTransform: shelfResults?`uppercase`:'', letterSpacing: shelfResults? `0.375rem`:''}}>Ask a question</h5>

       <label htmlFor="shelfLanguage">search language:</label>
       <select className="form-control" id="shelfLanguage" value={shelfLanguage}
        onChange={(e)=>setShelfLanguage(e.target.value)} placeholder="toggles auto input settings">
        <option value="en">English</option>
        <option value="zh-tw">Traditional Chinese</option>
        </select>

        <input className="form-control" type="text" id="shelfQuery" value={shelfQuery}
         onChange={(e)=>setShelfQuery(e.target.value)}/>
         <div style={{height:"25rem",overflowY:"auto"}}>
{shelfResults && shelfResults.map((shelf)=><div onClick={()=>{setShelfId(shelf[3]); setShelfTitle(shelf[0])}} key={shelf[3]}
style={{color:"searchpaneltext", backgroundColor:shelf[3]==shelfId?"var(--shelfpanellist)":"var(--searchpanellist)",
border:shelf[3]==shelfId?"1px solid var(--searchpanellstborderpressed)":"1px solid var(--searchpanellistborder)",
transform:shelf[3]==shelfId?"translateY(0.3rem)":"translateY(0px)",
boxShadow:shelf[3]==shelfId?"none":"var(--heavyshadow)",
margin:"1rem 0 0 0", padding:"0.6rem 1rem"}}>
  <div className="subtitle1">
{shelf[0]}
  </div>
  <div>
  {shelf[2].map((tag)=>{
  return <p style={{fontSize:"0.8rem", margin:"0.5rem 0"}}>{tag.slice(2)}</p>
  })}
  </div>
</div>)}
</div>

    </div>
    <h6 style={{lineHeight:"0px",width:"5.6rem", height:"100vh", writingMode:"vertical-lr", transform:"rotate(180deg)", transformOrigin:"center center"}}>
    {shelfTitle.slice(0,30)}
    </h6>
    </div>
    </div>


  )
}

export default SearchForm
