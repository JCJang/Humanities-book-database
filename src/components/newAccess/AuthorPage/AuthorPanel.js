import {useState,useEffect,useCallback} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import Axios from 'axios'


const AuthorPanel = ({selectedAuthor, expandFurtherReading, setExpandFurtherReading, languageSetting}) => {
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
    if(author.shelfId.length>0){
    if(accordionFocusInfluenced===author.authorWikiTitle){
        setAccordionFocusInfluenced("")
      }else{
        setAccordionFocusInfluenced(author.authorWikiTitle)
      }
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
              const newInfluencesBooks = {
                authorWikiTitle:author,
                shelfId:res.data.map((shelf)=>{return shelf._id}),
                shelfAndBook:res.data.map((shelf)=>{
                    const shelfTitle = shelf.editions[0].details.shelfTitle
                    const books = shelf.shelfBooks.filter(book=>{
                    return book.editions[0].details.bookAuthor.indexOf(author)!==-1
                  })
                  const bookTitles = books.map((book)=>{return book.editions[0].details.bookTitle})
                  const getArrNumber = (book) =>{
                      return books.map((book)=>{
                       return shelf.shelfBooks.indexOf(book)
                      })
                    }
                  const bookNumbers = books.map((book)=>{return getArrNumber(book)})
                  const bookAndNumber = []
                  for(let i = 0; i<bookTitles.length; i++){
                      bookAndNumber.push({
                      bookTitle:bookTitles[i],
                      bookNumber:bookNumbers[i][0]
                    })}
                  return {shelfTitle:shelfTitle, book:bookAndNumber}
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
              const newInfluencedBooks = {
                authorWikiTitle:author,
                shelfId:res.data.map((shelf)=>{return shelf._id}),
                shelfAndBook:res.data.map((shelf)=>{
                    const shelfTitle = shelf.editions[0].details.shelfTitle
                    const books = shelf.shelfBooks.filter(book=>{
                    return book.editions[0].details.bookAuthor.indexOf(author)!==-1
                  })
                  const bookTitles = books.map((book)=>{return book.editions[0].details.bookTitle})
                  const getArrNumber = (book) =>{
                      return books.map((book)=>{
                       return shelf.shelfBooks.indexOf(book)
                      })
                    }
                  const bookNumbers = books.map((book)=>{return getArrNumber(book)})
                  const bookAndNumber = []
                  for(let i = 0; i<bookTitles.length; i++){
                      bookAndNumber.push({
                      bookTitle:bookTitles[i],
                      bookNumber:bookNumbers[i][0]
                    })}
                  return {shelfTitle:shelfTitle, book:bookAndNumber}
                })
                }
                setAuthorInfluencedBooks((prev)=>[...prev,newInfluencedBooks])
        }})

      })
    )
    },[selectedAuthor,languageSetting])


  return (
    <div style={{color:"var(--authorpaneltext)",backgroundColor:"var(--authorpanel)",display:"flex", marginLeft:expandFurtherReading?"0":"2rem", maxWidth:"20rem",height:"var(--panelheight)"}}>
    <div className="Column noScrollBar" style={{overflowY:"auto"}}>
    {expandFurtherReading &&
    <div style={{paddingLeft:"1rem"}}>
        {selectedAuthor.authorInfluenced &&
          <div className="subtitle2">
            <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
              {selectedAuthor.authorWikiTitle} Influenced
              </div>
              <div className="Column">

              {authorInfluencedBooks[0] ?



            authorInfluencedBooks.sort((a, b) => {return a.authorWikiTitle.localeCompare(b.authorWikiTitle)}).map((author)=>{return <div className="Column">
                <div className={accordionFocusInfluenced===author.authorWikiTitle?"authorPanelLinkActive tag authorPanelLink":"tag authorPanelLink"} onClick={()=>{onChangeInfluencedAccordion(author)}}
                style={{display:"flex", cursor:author.shelfId[0]?"pointer":"",border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem",justifyContent:"center",alignItems:"center"}}>
                <span style={{display:"inline-block",width:"85%",padding:"0 0.5rem"}}>{author.authorWikiTitle}</span>
                {accordionFocusInfluenced===author.authorWikiTitle?<ExpandLessRoundedIcon style={{visibility:author.shelfId[0]?"visible":"hidden"}}/>:
                <ExpandMoreRoundedIcon style={{visibility:author.shelfId[0]?"visible":"hidden"}}/>}
                </div>
                {accordionFocusInfluenced===author.authorWikiTitle &&
                  author.shelfAndBook.map((shelf)=>{return <div className="Column">
                      <div className="Column subtitle2" style={{backgroundColor:"var(--inactive)",color:"var(--authorpanel)",boxShadow:"var(--heavyshadow)", margin:"0 0.5rem 1rem 0", padding:"0.5rem 1rem"}}>
                      {shelf.book.map((book)=>{
                        return <div className="subtitle1">Author of <strong>{book.bookTitle}</strong></div>
                      })}
                      <div className="subtitle2" style={{marginTop:"0.5rem"}}><em>In the shelf</em></div>
                      <div className="subtitle2">{shelf.shelfTitle}</div>
                      <div className="Column" style={{alignItems:"flex-end"}}>
                        <span className="btn authorpanelbtn" onClick={()=>{openLinkedShelf()}} style={{width:"6rem", display:"flex",justifyContent:"center",alignItems:"center",margin:"1rem 0 0.5rem 0"}}><span  style={{width:"85%"}}>Go To Shelf</span><ArrowForwardRoundedIcon/></span>
                      </div>
                      </div>
                      </div>
                  })
                }
                </div>})
                :
                authorInfluenced.sort((a,b)=>{return a.localeCompare(b)}).map((tag)=>{return <div className="tag authorPanelLink" style={{border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem"}}>{tag}</div>})}

              </div>
              </div>
      }
      </div>
    }

    {expandFurtherReading &&
    <div style={{paddingLeft:"1rem"}}>
        {selectedAuthor.authorInfluences &&
          <div className="subtitle2">
            <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
              {selectedAuthor.authorWikiTitle} was influenced by
              </div>
          <div className="Column">

          {authorInfluencesBooks[0] ?

            authorInfluencesBooks.sort((a, b) => {return a.authorWikiTitle.localeCompare(b.authorWikiTitle)}).map((author)=>{return <div className="Column">
            <div className={accordionFocusInfluences===author.authorWikiTitle?"authorPanelLinkActive tag authorPanelLink":"tag authorPanelLink"} onClick={()=>{onChangeInfluencesAccordion(author)}}
            style={{display:"flex", cursor:author.shelfId[0]?"pointer":"",border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem",justifyContent:"center",alignItems:"center"}}>
            <span style={{display:"inline-block",width:"85%",padding:"0 0.5rem"}}>{author.authorWikiTitle}</span>
            {accordionFocusInfluences===author.authorWikiTitle?<ExpandLessRoundedIcon style={{visibility:author.shelfId[0]?"visible":"hidden"}}/>:
            <ExpandMoreRoundedIcon style={{visibility:author.shelfId[0]?"visible":"hidden"}}/>}
            </div>
            {accordionFocusInfluences===author.authorWikiTitle &&
              author.shelfAndBook.map((shelf)=>{return <div className="Column">
                  <div className="Column subtitle2" style={{backgroundColor:"var(--inactive)",color:"var(--authorpanel)",boxShadow:"var(--heavyshadow)", margin:"0 0.5rem 1rem 0", padding:"0.5rem 1rem"}}>
                  {shelf.book.map((book)=>{
                    return <div className="subtitle1">Author of <strong>{book.bookTitle}</strong></div>
                  })}
                  <div className="subtitle2" style={{marginTop:"0.5rem"}}><em>In the shelf</em></div>
                  <div className="subtitle2">{shelf.shelfTitle}</div>
                  <div className="Column" style={{alignItems:"flex-end"}}>
                    <span className="btn authorpanelbtn" onClick={()=>{openLinkedShelf()}} style={{width:"6rem", display:"flex",justifyContent:"center",alignItems:"center",margin:"1rem 0 0.5rem 0"}}><span  style={{width:"85%"}}>Go To Shelf</span><ArrowForwardRoundedIcon/></span>
                  </div>
                  </div>
                  </div>
              })

            }
            </div>})
            :
            authorInfluences.sort((a,b)=>{return a.localeCompare(b)}).map((tag)=>{return <div className="tag authorPanelLink" style={{border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem"}}>{tag}</div>})}

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
