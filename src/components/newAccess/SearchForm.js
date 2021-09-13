import {useState,useEffect} from 'react'

const SearchForm = ({allShelves, columnFocus, setColumnFocus, setLanguageSetting, languageSetting, shelfId, setShelfId,selectedShelf,setSelectedShelf}) => {
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

const setNewShelf = (shelf) =>{
  setShelfId(shelf[3]);
  setShelfTitle(shelf[0]);
  setColumnFocus("shelfpanel")
}


  return (
    <div style={{color:"var(--searchpaneltext)"}}>
    <div style={{display:"flex",
    flexDirection: "row",width:"100%",height:"var(--panelheight)"}}>
    <div style={{width:"calc(100% - 6rem)",display:columnFocus==="detailspanel"?"none":"flex",margin:"0 0 0 2rem",
    flexDirection: "column"}}>
      <div style={{height:"minmax(150px,30vh)"}}>
    <h5 className="SearchCaption" style={{font:shelfResults?"var(--main-overline)":"var(--main-headline4)", textTransform: shelfResults?`uppercase`:'', letterSpacing: shelfResults? `0.375rem`:''}}>Ask a question</h5>

       <label htmlFor="languageSetting">search language:</label>
       <select className="form-control" id="languageSetting" value={languageSetting}
        onChange={(e)=>setLanguageSetting(e.target.value)} placeholder="toggles auto input settings">
        <option value="en">English</option>
        <option value="zh-tw">Traditional Chinese</option>
        <option value="zh-cn">Simplified Chinese</option>
        </select>

        <input className="form-control" type="text" id="shelfQuery" value={shelfQuery}
         onChange={(e)=>setShelfQuery(e.target.value)}/>
         </div>
         <div className="noScrollBar" style={{overflowY:"auto"}}>
{shelfResults && shelfResults.map((shelf)=><div onClick={()=>{setNewShelf(shelf)}} className="transition" key={shelf[3]}
style={{color:"searchpaneltext", width:"minmax(auto,30vw)", backgroundColor:shelf[3]===shelfId?"white":"var(--searchpanellist)",
border:shelf[3]===shelfId?"1px solid var(--searchpanellstborderpressed)":"1px solid var(--searchpanellistborder)",
boxShadow:"var(--heavyshadow)",
margin:"1rem 0 0 0", padding:"0.6rem 1rem"}}>
  <div style={{fontFamily:'Jost', fontWeight:shelf[3]===shelfId?"500":"400",fontSize:shelf[3]===shelfId?"1.35rem":"1.25rem",
  textTransform: "capitalize", letterSpacing:"0.01rem"}}>
{shelf[0]}
  </div>
  <div>
  {shelf[2].map((tag)=>{
  return <p className="tag" key={tag.slice(2)} style={{display:"inline-block", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag.slice(2)}</p>
  })}
  </div>
</div>)}
</div>

    </div>
    <h5 onClick={()=>{if(columnFocus==="init"){return;}else{setColumnFocus("shelfpanel")}}} style={{width:"4rem", alignSelf:"center", height:"80vh", writingMode:"vertical-lr", transform:"rotate(180deg)", transformOrigin:"center center"}}>
    {shelfTitle.slice(0,30)}
    </h5>
    </div>
    </div>


  )
}

export default SearchForm
