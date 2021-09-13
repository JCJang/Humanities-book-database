import {useState} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';

const AuthorPanel = ({selectedAuthor}) => {
  const [expandFurtherReading, setExpandFurtherReading] = useState(false)

  return (
    <div style={{color:"var(--authorpaneltext)",backgroundColor:"var(--authorpanel)",display:"flex", marginLeft:"2rem", maxWidth:"15rem",height:"var(--panelheight)"}}>
    <div className="Column noScrollBar" style={{overflowY:"auto"}}>
    {expandFurtherReading &&
    <div>
        {selectedAuthor.authorInfluenced &&
          <div className="subtitle2">
            <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
              {selectedAuthor.authorWikiTitle} Influenced
              </div>
          <div>{selectedAuthor.authorInfluenced[0] && selectedAuthor.authorInfluenced.map((tag)=>{return <p className="tag AuthorLink" style={{display:"inline-block", border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem"}}>{tag}</p>})}</div>
          </div>
      }
      </div>
    }

    {expandFurtherReading &&
    <div>
        {selectedAuthor.authorInfluences &&
          <div className="subtitle2">
            <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
              {selectedAuthor.authorWikiTitle} was influenced by
              </div>
          <div>{selectedAuthor.authorInfluences[0] && selectedAuthor.authorInfluences.map((tag)=>{return <p className="tag AuthorLink" style={{display:"inline-block", border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem"}}>{tag}</p>})}</div>
          </div>
      }
      </div>
    }
    </div>
    <h5 className="tab-lr h5tab" style={{cursor:"pointer"}}
    onClick={()=>{setExpandFurtherReading(!expandFurtherReading)}}>
    Further Reading
    {expandFurtherReading?
       <span className="subtitle2" style={{textTransform: "none"
   ,position:"absolute", bottom:"0"}}>collapse <RemoveCircleIcon style={{alignSelf:"center",width:"1rem",height:"1rem"}}/></span>
      :
      <span className="subtitle2" style={{textTransform: "none"
  ,position:"absolute", bottom:"0"}}>expand <AddCircleIcon style={{alignSelf:"center",width:"1rem",height:"1rem"}}/></span>
      }
      </h5>
    </div>

  )
}

export default AuthorPanel
