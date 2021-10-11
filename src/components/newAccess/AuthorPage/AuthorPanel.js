import {useState,useEffect,useCallback} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import Axios from 'axios'


const AuthorPanel = ({xs,s,m,l,xl, selectedAuthor, expandFurtherReading, setExpandFurtherReading, languageSetting, setShelfId, setBookNumber, setColumnFocus}) => {
  const [authorInfluences, setAuthorInfluences] = useState([])
  const [authorInfluencesBooks, setAuthorInfluencesBooks] = useState([])

  const [authorInfluenced, setAuthorInfluenced] = useState([])
  const [authorInfluencedBooks, setAuthorInfluencedBooks] = useState([])
  const [accordionFocusInfluences, setAccordionFocusInfluences] = useState("")


    useEffect(()=>{
      setExpandFurtherReading(false)
      setAuthorInfluencesBooks([])
      setAuthorInfluencedBooks([])
    setAuthorInfluences(selectedAuthor.authorInfluences)
    setAuthorInfluenced(selectedAuthor.authorInfluenced)
  },[selectedAuthor])


  const onChangeInfluencesAccordion = (author) =>{
    if(author.shelfAndBook.length>0){
      if(accordionFocusInfluences===author.authorWikiTitle){
        setAccordionFocusInfluences("")
      }else{
        setAccordionFocusInfluences(author.authorWikiTitle)
      }
    }
  }
  const [accordionFocusInfluenced, setAccordionFocusInfluenced] = useState("")

  const onChangeInfluencedAccordion = (author) =>{
    if(author.shelfAndBook.length>0){
    if(accordionFocusInfluenced===author.authorWikiTitle){
        setAccordionFocusInfluenced("")
      }else{
        setAccordionFocusInfluenced(author.authorWikiTitle)
      }
    }
  }


  const openLinkedShelf = (shelfAndBook) =>{
      setBookNumber(shelfAndBook.book[0].bookNumber)
      setShelfId(shelfAndBook.shelfId)
      setColumnFocus('shelfpanel')
  }

  useEffect(()=>{

        if(!expandFurtherReading){return}
        if(authorInfluencesBooks.length>0){return}
        if(authorInfluencedBooks.length>0){return}
        const influences = [...selectedAuthor.authorInfluences]
        const influenced = [...selectedAuthor.authorInfluenced]

        setAuthorInfluencesBooks([])
        setAuthorInfluencedBooks([])

      Axios.post("https://humanities-book.herokuapp.com/influences",{
          languageSetting:languageSetting,
          authorWikiTitle:selectedAuthor.authorWikiTitle
        })
      .then((res)=>{
        console.log(res.data.map)
        res.data.map((book)=>influences.indexOf(book.editions[0].details.authorWikiTitle) === -1 && influences.push(book.editions[0].details.authorWikiTitle))
        setAuthorInfluences(influences)
        console.log(authorInfluences)
      })
      .then(
        authorInfluences.map((author)=>{
          Axios.post("https://humanities-book.herokuapp.com/influencesbooks",{
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
                shelfAndBook:res.data.map((shelf)=>{
                    const shelfId = shelf._id
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
                  return {shelfId:shelfId, shelfTitle:shelfTitle, book:bookAndNumber}
                })
                }
                setAuthorInfluencesBooks((prev)=>[...prev,newInfluencesBooks])
        }})
      })
    )

      Axios.post("https://humanities-book.herokuapp.com/influenced",{
          languageSetting:languageSetting,
          authorWikiTitle:selectedAuthor.authorWikiTitle
        })
      .then((res)=>{
        console.log(res.data.map)
        res.data.map((book)=>influenced.indexOf(book.editions[0].details.authorWikiTitle) === -1 && influenced.push(book.editions[0].details.authorWikiTitle))
        setAuthorInfluenced(influenced)
        console.log(authorInfluenced)
      })
      .then(
        authorInfluenced.map((author)=>{
          Axios.post("https://humanities-book.herokuapp.com/influencedbooks",{
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
                shelfAndBook:res.data.map((shelf)=>{
                    const shelfId = shelf._id
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
                  return {shelfId:shelfId,shelfTitle:shelfTitle, book:bookAndNumber}
                })
                }
                setAuthorInfluencedBooks((prev)=>[...prev,newInfluencedBooks])
        }})

      })
    )
  },[selectedAuthor,languageSetting,expandFurtherReading])


  return (
    <div className={
          l?"Row":"Column"
        }
      style = {
        {
          color: "var(--authorpaneltext)",
          backgroundColor: "var(--authorpanel)",
          boxShadow: expandFurtherReading ? "var(--heavyshadow) inset" : "",
          marginLeft: !l?"":expandFurtherReading ? "2rem" : "3rem",
          marginTop: l?"":"2rem",
          marginBottom:l? "":"1rem",
          maxWidth: !l?"100%":"20rem",
          height: l?"100vh":expandFurtherReading ? "var(--authorpanelopenheight)" : "4rem"
        }
      }>

    <div className={l?"Column noScrollBar":m?"Row noScrollBar":"Column noScrollBar"} style={{overflowY:"auto", order:l?"":"2"}}>

    <div style={{paddingLeft:l && "1rem",display:expandFurtherReading?"flex":"none", width:l?"":m?"50%":"100vw", justifyContent:"center",padding:l?"0 2rem":"", borderRight:l?"":!m?"":"1.5px solid var(--shelfpanel)"}}>
        {selectedAuthor.authorInfluences &&
          <div className="subtitle2">
          {authorInfluencesBooks[0] ?
            <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
              {selectedAuthor.authorWikiTitle} was influenced by
              </div>
              :
              <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
                No entries of authors that Influenced {selectedAuthor.authorWikiTitle}
                </div>
            }
            <div className="Column" style={{width:l?"14rem":m?"40vw":"80vw"}}>

          {authorInfluencesBooks[0] &&

            authorInfluencesBooks.sort((a, b) => {
              return b.shelfAndBook.length - a.shelfAndBook.length ||
                    a.authorWikiTitle.localeCompare(b.authorWikiTitle);
            })
            .map((author)=>{return <div className="Column">
            <div className={accordionFocusInfluences===author.authorWikiTitle?"authorPanelLinkActive tag authorPanelLink":"tag authorPanelLink"} onClick={()=>{onChangeInfluencesAccordion(author)}}
            style={{display:"flex", cursor:author.shelfAndBook.length>0?"pointer":"",border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.4rem",justifyContent:"space-between",width:"100%",alignItems:"center"}}>
            <span style={{display:"inline-block", width:"90%",padding:"0 0.5rem"}}>{author.authorWikiTitle}</span>
            {accordionFocusInfluences===author.authorWikiTitle?<ExpandLessRoundedIcon style={{visibility:author.shelfAndBook.length>0?"visible":"hidden"}}/>:
            <ExpandMoreRoundedIcon style={{visibility:author.shelfAndBook.length>0?"visible":"hidden"}}/>}
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
                    <span className="btn authorpanelbtn" onClick={()=>{openLinkedShelf(shelf)}} style={{width:"6rem", display:"flex",justifyContent:"center",alignItems:"center",margin:"1rem 0 0.5rem 0"}}><span  style={{width:"85%"}}>Go To Shelf</span><ArrowForwardRoundedIcon/></span>
                  </div>
                  </div>
                  </div>
              })

            }
            </div>})
          }

          </div>
          </div>
      }
    </div>

    <div style={{paddingLeft:l && "1rem", display:expandFurtherReading?"flex":"none", width:l?"":m?"50%":"100vw",justifyContent:"center",padding:l?"0 2rem":""}}>
        {selectedAuthor.authorInfluenced &&
          <div className="subtitle2">
          {authorInfluencedBooks[0] ?
            <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
              {selectedAuthor.authorWikiTitle} Influenced
              </div>
              :
              <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
                No entries of authors Influenced by {selectedAuthor.authorWikiTitle}
                </div>
          }
              <div className="Column" style={{width:l?"14rem":m?"40vw":"80vw"}}>

              {authorInfluencedBooks[0] &&


            authorInfluencedBooks.sort((a, b) => {
              return b.shelfAndBook.length - a.shelfAndBook.length ||
                    a.authorWikiTitle.localeCompare(b.authorWikiTitle);
                })
                .map((author)=>{return <div className="Column">
                <div className={accordionFocusInfluenced===author.authorWikiTitle?"authorPanelLinkActive tag authorPanelLink":"tag authorPanelLink"} onClick={()=>{onChangeInfluencedAccordion(author)}}
                style={{display:"flex", cursor:author.shelfAndBook.length>0?"pointer":"",border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.4rem",justifyContent:"space-between",width:"100%",alignItems:"center"}}>
                <span style={{display:"inline-block", width:"90%",padding:"0 0.5rem"}}>{author.authorWikiTitle}</span>
                {accordionFocusInfluenced===author.authorWikiTitle?<ExpandLessRoundedIcon style={{visibility:author.shelfAndBook.length>0?"visible":"hidden"}}/>:
                <ExpandMoreRoundedIcon style={{visibility:author.shelfAndBook.length>0?"visible":"hidden"}}/>}
                </div>
                {accordionFocusInfluenced===author.authorWikiTitle &&
                  author.shelfAndBook.map((shelf)=>{return <div className="Column">
                      <div className="Column subtitle2" style={{backgroundColor:"var(--inactive)",color:"var(--authorpanel)",boxShadow:"var(--heavyshadow)", margin:"0 0.5rem 1rem 0", padding:"0.5rem 1rem"}}>
                      <div className="subtitle1">Author of <strong>{shelf.book.map((book)=>{
                        return book.bookTitle}).join(' // ')}</strong></div>
                      <div className="subtitle2" style={{marginTop:"0.5rem"}}><em>In the shelf</em></div>
                      <div className="subtitle2">{shelf.shelfTitle}</div>
                      <div className="Column" style={{alignItems:"flex-end"}}>
                        <span className="btn authorpanelbtn" onClick={()=>{openLinkedShelf(shelf)}} style={{width:"6rem", display:"flex",justifyContent:"center",alignItems:"center",margin:"1rem 0 0.5rem 0"}}><span  style={{width:"85%"}}>Go To Shelf</span><ArrowForwardRoundedIcon/></span>
                      </div>
                      </div>
                      </div>
                  })
                }
                </div>})
              }

              </div>
              </div>
      }
    </div>

    </div>
    <h5 className={l?"tab-lr h5tab-l":m?"h5tab-m":"h5tab-s"} style={{order:l?"":"1",cursor:"pointer",display:l?"":"flex",alignItems:"center",justifyContent:"space-between",padding:l?"":"2rem"}}
    onClick={()=>{setExpandFurtherReading(!expandFurtherReading)}}>
    Further Reading
    {expandFurtherReading?
      <span className="subtitle2" style={{display:"flex",textTransform: "none"
  ,position:l?"absolute":"relative", left:l?"1rem":"", bottom:l?"0":""}}><p>collapse</p><RemoveCircleIcon style={{alignSelf:"center",width:"1rem",height:"1rem",marginLeft:!l&&"0.5rem",marginTop:l&&"0.5rem"}}/></span>
      :
      <span className="subtitle2" style={{display:"flex",textTransform: "none"
  ,position:l?"absolute":"relative", left:l?"1rem":"", bottom:l?"0":""}}><p>expand</p><AddCircleIcon style={{alignSelf:"center",width:"1rem",height:"1rem",marginLeft:!l&&"0.5rem",marginTop:l&&"0.5rem"}}/></span>
      }
      </h5>
    </div>

  )
}

export default AuthorPanel
