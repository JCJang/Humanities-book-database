import {useState,useEffect} from 'react'

const SearchForm = ({allShelves, setShelfLanguage,shelfLanguage, shelfId, setShelfId,selectedShelf,setSelectedShelf}) => {
  const [shelfQuery, setShelfQuery] =  useState('')
  const [shelfResults, setShelfResults] = useState(false)


useEffect(()=>{
  if(!allShelves){return}
      if(!shelfQuery){
        setShelfResults(allShelves)
      }
      setShelfResults(allShelves.filter((shelf)=>{return shelf[0].toLowerCase().indexOf(shelfQuery.toLowerCase())>=0}))

},[shelfQuery,allShelves])

  return (
    <div>
    <div>
    <h5 className="SearchCaption" style={{font:shelfResults?"var(--main-overline)":"var(--main-headline4)", textTransform: shelfResults?`uppercase`:'', letterSpacing: shelfResults? `0.375rem`:''}}>Ask a question</h5>

       <label htmlFor="shelfLanguage">search language:</label>
       <select className="form-control" id="shelfLanguage" value={shelfLanguage}
        onChange={(e)=>setShelfLanguage(e.target.value)} placeholder="toggles auto input settings">
        <option value="en">English</option>
        <option value="zh-tw">Traditional Chinese</option>
        </select>

        <input className="form-control" type="text" id="shelfQuery" value={shelfQuery}
         onChange={(e)=>setShelfQuery(e.target.value)}/>
</div>
<div>

</div>
{shelfResults && shelfResults.map((shelf)=><div onClick={()=>{setShelfId(shelf[3])}} key={shelf[3]}
style={{backgroundColor:shelf[3]==shelfId?"var(--shelfpanellistpressed)":"var(--shelfpanellist)",
border:shelf[3]==shelfId?"1px solid var(--shelfpanellistpressedborder)":"1px solid var(--shelfpanellistborder)",
transform:shelf[3]==shelfId?"translateY(0.3rem)":"translateY(0px)",
boxShadow:shelf[3]==shelfId?"none":"var(--heavyshadow)"}}>
  <div className="subtitle1">
{shelf[0]}
  </div>
</div>)}
    </div>
  )
}

export default SearchForm
