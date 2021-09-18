import {useState,useEffect} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const SearchForm = ({allShelves, columnFocus, setColumnFocus, setLanguageSetting, languageSetting, shelfId, setShelfId,selectedShelf,setSelectedShelf, setBookNumber}) => {
  const [shelfQuery, setShelfQuery] =  useState('')
  const [shelfResults, setShelfResults] = useState(false)
  const [shelfTitle, setShelfTitle] = useState('Shelf Title')


useEffect(()=>{
  if(!allShelves){return}
      if(!shelfQuery){
        setShelfResults(allShelves)
      }
      console.log(allShelves)
      setShelfResults(allShelves.filter((shelf)=>{return shelf.shelfText.toLowerCase().indexOf(shelfQuery.toLowerCase())>=0}))

},[shelfQuery,allShelves])

const setNewShelf = (shelf) =>{
  setBookNumber('0')
  setShelfId(shelf.shelfId);
  setShelfTitle(shelf.shelfTitle);
  setColumnFocus("shelfpanel")
}


  return (
    <div style={{color:"var(--searchpaneltext)"}}>
    <div style={{display:"flex",
    flexDirection: "row",width:"100%",height:"var(--panelheight)"}}>
    <div style={{width:"calc(100% - 6rem)",alignItems:"center",display:columnFocus==="detailspanel"?"none":"flex",margin:"0 0 0 2rem",
    flexDirection: "column"}}>
      <div className={columnFocus==="init"?"Row":"Column"} style={{maxWidth:"30rem", margin:"2rem"}}>
      <label htmlFor="searchForm" style={{marginRight:columnFocus==="init"?"3rem":""}}>query:</label>
      <input className="form-control" type="text" id="shelfQuery" placeholder="enter some keywords" value={shelfQuery}
       onChange={(e)=>setShelfQuery(e.target.value)}/>
         </div>
         <div className="noScrollBar" style={{overflowY:"auto"}}>
{shelfResults && shelfResults.map((shelf)=><div onClick={()=>{setNewShelf(shelf)}} className="transition" key={shelf.shelfId}
style={{cursor:shelf.shelfId===shelfId?"":"pointer",color:"searchpaneltext",maxWidth:"30rem", backgroundColor:shelf.shelfId===shelfId?"white":"var(--searchpanellist)",
border:shelf.shelfId===shelfId?"1px solid var(--searchpanellstborderpressed)":"1px solid var(--searchpanellistborder)",
boxShadow:"var(--heavyshadow)",
margin:"1rem 0 0 0", padding:"0.6rem 1rem"}}>
  <div style={{fontFamily:'Jost', fontWeight:shelf.shelfId===shelfId?"500":"400",fontSize:shelf.shelfId===shelfId?"1.35rem":"1.25rem",
  textTransform: "capitalize", letterSpacing:"0.01rem"}}>
{shelf.shelfTitle}
  </div>
  <div>
  {shelf.shelfSubjects.map((tag)=>{
  return <p className="tag" key={tag.slice(2)} style={{display:"inline-block", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag.slice(2)}</p>
  })}
  </div>
</div>)}
</div>

    </div>
    <h5 className="tab-lr h5tab tabsearch" style={{opacity:"0.8",cursor:columnFocus!=="shelfpanel"?"pointer":""}} onClick={()=>{if(columnFocus==="init"){return;}else{setColumnFocus("shelfpanel")}}}>
    <span>{shelfTitle.slice(0,35)}</span>
    {columnFocus!=="shelfpanel"&&
    <span className="subtitle2" style={{textTransform: "none"
,position:"absolute", bottom:"0"}}>expand <AddCircleIcon style={{alignSelf:"center",width:"1rem",height:"1rem"}}/></span>}
    </h5>
    </div>
    </div>


  )
}

export default SearchForm
