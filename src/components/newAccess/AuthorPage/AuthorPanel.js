import {useState} from 'react'

const AuthorPanel = ({selectedAuthor}) => {
  const [expandFurtherReading, setExpandFurtherReading] = useState(false)

  return (
    <div style={{color:"var(--authorpaneltext)",backgroundColor:"var(--authorpanel)",display:"flex",height:"var(--panelheight)"}}>
    {expandFurtherReading &&
    <div>{selectedAuthor && selectedAuthor.authorWikiExtract}</div>}
    <h5 onClick={()=>setExpandFurtherReading(!expandFurtherReading)} style={{width:"4rem", alignSelf:"center", height:"80vh", writingMode:"vertical-lr", transform:"rotate(180deg)", transformOrigin:"center center"}}>
    Further Reading</h5>
    </div>

  )
}

export default AuthorPanel
