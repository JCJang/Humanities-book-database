import React from 'react'

const OpenedAuthor = ({ columnFocus, setColumnFocus, displayBookTitle, selectedAuthor}) => {
  return (
    <div style={{color:"var(--detailspaneltext)",display:"flex",height:"var(--panelheight)"}}>
     <div  style={{display:"flex", justifyContent:"center", overflow:"hidden",position:"relative"}}>
     hi

       </div>
     <h5 onClick={()=>setColumnFocus("detailspanel")} style={{width:"4rem", alignSelf:"center", height:"80vh", writingMode:"vertical-lr", transform:"rotate(180deg)", transformOrigin:"center center"}}>
     {selectedAuthor.authorWikiTitle}</h5>
    </div>

  )
}

export default OpenedAuthor
