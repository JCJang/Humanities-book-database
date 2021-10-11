import {useState,useEffect,useRef} from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
//
// {l && columnFocus==="init" ?
//   <div  style={{height:"50vh",width:"var(--initpanel)",overflow:"hidden",position:"fixed",top:"0px",left:"0px",zIndex:"0"}}>
//   <video className="mirror" loop muted autoPlay style={{opacity:"0.6",height:"auto",width:"150vw"}}>
// <source src={pagesVideo} type="video/mp4"></source>
// <source src={pagesVideo} type="video/ogg"></source>
// </video>
// </div>
// :
// <div></div>
// }

const SearchForm = ({xs,s,m,l,xl,setSlideOut,allShelves, columnFocus, setColumnFocus, setLanguageSetting, languageSetting, shelfId, setShelfId,selectedShelf,setSelectedShelf, setBookNumber}) => {
  const [shelfQuery, setShelfQuery] =  useState('')
  const [shelfResults, setShelfResults] = useState(false)
  const [shelfTitle, setShelfTitle] = useState('Shelf Title')
  const [displayScroll, setDisplayScroll] = useState(true)
  const noScrollBar = useRef();

    const detectScrollBottom = () => {
        if (noScrollBar.current) {
          const { scrollTop, scrollHeight, clientHeight } = noScrollBar.current;
          if (scrollTop + clientHeight > scrollHeight - 200) {
            // TO SOMETHING HERE
            setDisplayScroll(false)
          }else{
            setDisplayScroll(true)
          }
        }
      };

const searchH5Cursor = () => {
  if(l){
    if(columnFocus==="detailspanel"){
      return "pointer"
    }else{
      return ""
    }
  }else{
    if(columnFocus!=="init"){
      return "pointer"
    }else if(columnFocus==="shelfpanel"){
      return ""
    }
  }
}

const searchH5Expand = () => {
  if(l){
    if(columnFocus==="detailspanel"){
      return "flex"
    }else{
      return "hidden"
    }
  }else{
    if(columnFocus!=="init"){
      return "flex"
    }else if(columnFocus==="shelfpanel"){
      return "hidden"
    }
  }
}

useEffect(()=>{
  if(!allShelves){return}
      if(!shelfQuery){
        setShelfResults(allShelves)
      }
      setShelfResults(allShelves.filter((shelf)=>{return shelf.shelfText.toLowerCase().indexOf(shelfQuery.toLowerCase())>=0}))

},[shelfQuery,allShelves])

const setNewShelf = (shelf) =>{
  setSlideOut(false)
  setBookNumber('0')
  setShelfId(shelf.shelfId);
  setShelfTitle(shelf.shelfTitle);
  setColumnFocus("shelfpanel")
}

const searchFormDisplay = () =>{
  if(columnFocus==="init"){
    return "flex"
  }else if(l && columnFocus==="shelfpanel"){
    return "flex"
  }else{
    return "none"
  }
}


  return (
    <div style={{color:"var(--searchpaneltext)",background:l && columnFocus==="init" && "var(--searchpanel)"}}>
    <div className="Row" style={{width:"100%",height:l?"var(--panelheight)":m?"var(--searchpanelheighttablet)":"var(--focusedpanelmobile)"}}>

    <div style={{width:l?"calc(100% - 6rem)":"100%",alignItems:"center",position:"relative",display:searchFormDisplay(),margin:l?"0 0 0 2rem":"",
    flexDirection: "column",padding: l ? "0" : m ? "0 3rem" : "0 2rem"}}>
          <div className="Column" style={{maxWidth:l?"30rem":m?"75vw":"90vw", padding:!l ? "2rem":"2rem 0 0.5rem 0",alignItems:"center", justifyContent:"center"}}>
      <label htmlFor="searchForm" className={columnFocus!=="init"?"h6-details":!m?"h6-details":"h3-details"} style={{margin: "0 1rem 1rem 1rem"}}>What Questions are on your mind?</label>
      <h6 style={{margin:m && "0.7rem", alignSelf:"flex-start"}} className="subtitle1">Select a shelf below.</h6>
      <input className="query-form" type="text" id="shelfQuery" placeholder="filter by keywords here" value={shelfQuery}
       onChange={(e)=>{setShelfQuery(e.target.value);detectScrollBottom()}}/>
         </div>
          <div className="Column noScrollBar" onScroll={()=>detectScrollBottom()} ref={noScrollBar} style={{width:"100%",alignItems:"center",overflowY:"auto", marginBottom:"0.1rem"}}>
                {shelfResults && shelfResults.map((shelf)=><div onClick={()=>{setNewShelf(shelf)}} className="transition" key={shelf.shelfId}
                style={{cursor:shelf.shelfId===shelfId?"":"pointer",color:"searchpaneltext",width:l && columnFocus==="init"?"30rem":l && columnFocus==="shelfpanel"?"21vw":m?"70vw":"80vw", backgroundColor:shelf.shelfId===shelfId?"white":"var(--paper)",
                border:shelf.shelfId===shelfId?"1.5px solid var(--searchpaneltext)":"1.5px solid var(--searchpanellistborder)",
                boxShadow:"var(--heavyshadow)",
                margin:"1rem 0 0 0", padding:"0.6rem 1rem"}}>
                  <div style={{fontFamily:'Jost', fontWeight:shelf.shelfId===shelfId?"500":"400",fontSize:shelf.shelfId===shelfId?"1.35rem":"1.25rem",
                  textTransform: "capitalize", letterSpacing:"0.01rem", marginBottom:"0.5rem"}}>
                {shelf.shelfTitle}
                  </div>
                  <div>
                  {shelf.shelfSubjects.map((tag)=>{
                  return <p className="tag" key={tag.slice(2)} style={{display:"inline-block", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag.slice(2)}</p>
                  })}
                  </div>
                </div>)}
                {displayScroll &&  <div class="scrollIndicator-container">
                  <div class="scrollIndicatorSearch"></div>
                </div>}
          </div>

    </div>
    <h5 className={l && columnFocus!=="init"?"tabsearch tab-lr h5tab-l":l?"tab-lr h5tab-l":m?"h5tab-m":"h5tab-s"} style={{opacity:"0.8",cursor:searchH5Cursor(),display:l?"":columnFocus==="init"?"none":"flex",alignItems:"center",justifyContent:"space-between",padding:l?"":m?"2rem":"1.5rem"}} onClick={()=>{if(l && columnFocus==="init"){return}else if(!l){setColumnFocus("init")}else{setColumnFocus("shelfpanel")}}}>
    <span>

    {shelfTitle && l? shelfTitle.slice(0,45):shelfTitle?`Back to: ${shelfTitle.slice(0,12)}...`:"Shelf Details"}

    </span>
    {columnFocus!=="init" && <span className="subtitle2" style={{display:searchH5Expand(),textTransform: "none"
,position:l?"absolute":"relative", left:l?"1rem":"", bottom:l?"0":""}}><p>expand</p><AddCircleOutlineOutlinedIcon style={{alignSelf:"center",width:"1rem",height:"1rem",marginLeft:!l&&"0.5rem",marginTop:l&&"0.5rem"}}/></span>

    }
    </h5>
    </div>
    </div>


  )
}

export default SearchForm
