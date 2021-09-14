import {useState,useEffect,useCallback} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import Axios from 'axios'


const AuthorPanel = ({selectedAuthor,languageSetting}) => {
  const [expandFurtherReading, setExpandFurtherReading] = useState(false)
  const [authorInfluences, setAuthorInfluences] = useState([])
  const [authorInfluencesBooks, setAuthorInfluencesBooks] = useState([])

  const [authorInfluenced, setAuthorInfluenced] = useState([])
  const [authorInfluencedBooks, setAuthorInfluencedBooks] = useState([])
  const [accordionFocusInfluences, setAccordionFocusInfluences] = useState("")

  const onChangeInfluencesAccordion = (author) =>{
    if(author.shelfId.length>0){
      if(accordionFocusInfluences===author.authorWikiTitle){
        setAccordionFocusInfluences("")
      }else{
        setAccordionFocusInfluences(author.authorWikiTitle)
      }
    }
  }
  const [accordionFocusInfluenced, setAccordionFocusInfluenced] = useState("")

  const onChangeInfluencedAccordion = (author) =>{
    if(author.shelfId===[]){
      return;
    }else if(accordionFocusInfluenced===author.authorWikiTitle){
      setAccordionFocusInfluenced("")
    }else{
      setAccordionFocusInfluenced(author.authorWikiTitle)
    }
  }
  const openLinkedShelf = () =>{

  }

      useEffect(()=>{

        setAuthorInfluences(selectedAuthor.authorInfluences)
        setAuthorInfluenced(selectedAuthor.authorInfluenced)

        const influences = selectedAuthor.authorInfluences
        const influenced = selectedAuthor.authorInfluenced

        setAuthorInfluencesBooks([])
        setAuthorInfluencedBooks([])

      Axios.post("http://localhost:3001/influences",{
          languageSetting:languageSetting,
          authorWikiTitle:selectedAuthor.authorWikiTitle
        })
      .then((res)=>{
        res.data.map((book)=>influences.indexOf(book.editions[0].details.authorWikiTitle) === -1 && influences.push(book.editions[0].details.authorWikiTitle))
        setAuthorInfluences(influences)
      })
      .then(
        influences.map((author)=>{
          Axios.post("http://localhost:3001/influencesbooks",{
              languageSetting:languageSetting,
              authorWikiTitle:author
            })
          .then((res)=>{
            if(res.data===[]){
              setAuthorInfluencesBooks((prev)=>[...prev,{
                authorWikiTitle:author,
                shelfId:[],
                shelfTitle:[],
                bookTitle:[],
                arrNumber:[]
              }])
            }else{
              let newInfluencesBooks = {
                authorWikiTitle:author,
                shelfId:res.data.map((shelf)=>{return shelf._id}),
                shelfTitle:res.data.map((shelf)=>{return shelf.editions[0].details.shelfTitle}),
                bookTitle:res.data.map((shelf)=>{
                    const books = shelf.shelfBooks.filter(book=>{
                    return book.editions[0].details.bookAuthor.indexOf(author)!==-1
                  })
                  return books.map((book)=>{return book.editions[0].details.bookTitle})
                }),
                arrNumber:res.data.map((shelf)=>{
                  const books = shelf.shelfBooks.filter(book=>{
                  return book.editions[0].details.bookAuthor.indexOf(author)!==-1
                })
                    return books.map((book)=>{
                     return shelf.shelfBooks.indexOf(book)
                    })
                  })
                }
                setAuthorInfluencesBooks((prev)=>[...prev,newInfluencesBooks])
        }})
      })
    )

      Axios.post("http://localhost:3001/influenced",{
          languageSetting:languageSetting,
          authorWikiTitle:selectedAuthor.authorWikiTitle
        })
      .then((res)=>{
        res.data.map((book)=>influenced.indexOf(book.editions[0].details.authorWikiTitle) === -1 && influenced.push(book.editions[0].details.authorWikiTitle))
        setAuthorInfluenced(influenced)
      })
      .then(
        influenced.map((author)=>{
          Axios.post("http://localhost:3001/influencedbooks",{
              languageSetting:languageSetting,
              authorWikiTitle:author
            })
          .then((res)=>{
            if(res.data===[]){
              setAuthorInfluencedBooks((prev)=>[...prev,{
                authorWikiTitle:author,
                shelf_Id:[],
                shelfTitle:[],
                bookTitle:[],
                arrNumber:[]
              }])
            }else{
              let newInfluencedBooks = {
                authorWikiTitle:author,
                shelf_Id:res.data.map((shelf)=>{return shelf._id}),
                shelfTitle:res.data.map((shelf)=>{return shelf.editions[0].details.shelfTitle}),
                bookTitle:res.data.map((shelf)=>{
                    const books = shelf.shelfBooks.filter(book=>{
                    return book.editions[0].details.bookAuthor.indexOf(author)!==-1
                  })
                  return books.map((book)=>{return book.editions[0].details.bookTitle})
                }),
                arrNumber:res.data.map((shelf)=>{
                  const books = shelf.shelfBooks.filter(book=>{
                  return book.editions[0].details.bookAuthor.indexOf(author)!==-1
                })
                    return books.map((book)=>{
                     return shelf.shelfBooks.indexOf(book)
                    })
                  })
                }
                setAuthorInfluencedBooks((prev)=>[...prev,newInfluencedBooks])
        }})
      })
    )
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
          <div className="Column">

          {authorInfluencesBooks[0] ?

            authorInfluencesBooks.map((author)=>{return <div className="Column">
            <div className="tag authorPanelLink" onClick={()=>{onChangeInfluencesAccordion(author)}}
            style={{display:"flex", cursor:author.shelfId[0]?"pointer":"",border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem",justifyContent:"center",alignItems:"center"}}>
            <span style={{display:"inline-block",width:"85%",padding:"0 0.5rem"}}>{author.authorWikiTitle}</span>
            {accordionFocusInfluences===author.authorWikiTitle?<ExpandLessRoundedIcon style={{visibility:author.shelfId[0]?"visible":"hidden"}}/>:
            <ExpandMoreRoundedIcon style={{visibility:author.shelfId[0]?"visible":"hidden"}}/>}
            </div>
            {accordionFocusInfluences===author.authorWikiTitle &&
            <div className="Column">
            <div style={{display:"flex",border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem",justifyContent:"center",alignItems:"center"}}>
            {author.shelfTitle}
            {author.bookTitle}
            </div>
            <div style={{display:"flex",alignItems:"flex-end"}}>
              <span className="btn lightbtn" onClick={()=>{openLinkedShelf()}} style={{width:"6rem", display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1rem"}}><span  style={{width:"85%"}}>Preview</span><ArrowForwardRoundedIcon/></span>
            </div>
            </div>
            }
            </div>})
            :
            authorInfluences.map((tag)=>{return <div className="tag authorPanelLink" style={{border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem"}}>{tag}</div>})}

          </div>
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
