import {useState,useEffect} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded'
import Axios from 'axios'


const AuthorPanel = ({selectedAuthor,languageSetting}) => {
  const [expandFurtherReading, setExpandFurtherReading] = useState(false)
  const [authorInfluences, setAuthorInfluences] = useState([])
  const [authorInfluencesBooks, setAuthorInfluencesBooks] = useState([{
    authorWikiTitle:"",
    shelf_Id:"",
    shelfTitle:"",
    bookTitle:"",
    arrNumber:""
  }])

  const [authorInfluenced, setAuthorInfluenced] = useState([])
  const [authorInfluencedBooks, setAuthorInfluencedBooks] = useState([{
    authorWikiTitle:"",
    shelf_Id:"",
    shelfTitle:"",
    bookTitle:"",
    arrNumber:""
  }])


      useEffect(()=>{
        setAuthorInfluences(selectedAuthor.authorInfluences)
        setAuthorInfluenced(selectedAuthor.authorInfluenced)

        const influences = selectedAuthor.authorInfluences
        const influenced = selectedAuthor.authorInfluenced

        setAuthorInfluencesBooks([{
          authorWikiTitle:"",
          shelf_Id:"",
          shelfTitle:"",
          bookTitle:"",
          arrNumber:""
        }])
        setAuthorInfluencedBooks([{
         authorWikiTitle:"",
         shelf_Id:"",
         shelfTitle:"",
         bookTitle:"",
         arrNumber:""
       }])

      Axios.post("http://localhost:3001/influences",{
          languageSetting:languageSetting,
          authorWikiTitle:selectedAuthor.authorWikiTitle
        })
      .then((res)=>{
        res.data.map((book)=>influences.indexOf(book.editions[0].details.authorWikiTitle) === -1 && influences.push(book.editions[0].details.authorWikiTitle))
        setAuthorInfluences(influences)
      })


      Axios.post("http://localhost:3001/influenced",{
          languageSetting:languageSetting,
          authorWikiTitle:selectedAuthor.authorWikiTitle
        })
      .then((res)=>{
        res.data.map((book)=>influences.indexOf(book.editions[0].details.authorWikiTitle) === -1 && influenced.push(book.editions[0].details.authorWikiTitle))
        setAuthorInfluenced(influenced)
      })

    },[selectedAuthor,languageSetting])


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
          <div>{authorInfluenced[0] && authorInfluenced.map((tag)=>{return <p className="tag AuthorLink" style={{display:"inline-block", border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem"}}>{tag}</p>})}</div>
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
          <div>{authorInfluences[0] && authorInfluences.map((tag)=>{return <p className="tag AuthorLink" style={{display:"inline-block", border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem"}}>{tag}</p>})}</div>
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
