import {useEffect, useState} from 'react';
import WikiTest from './WikiTest'
import Axios from 'axios'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

const SubmissionForm = ({toAdd,onSearch,formToggleOn }) => {

  const [shelfTitle, setShelfTitle] = useState('')
  const [shelfDescription, setShelfDescription] = useState('')
  const [id, setId] =  useState('')
  const [title, setTitle] =  useState('')
  const [author, setAuthor] =  useState('')
  const [isbn, setIsbn] = useState('')
  const [isbn10, setIsbn10] =  useState('')
  const [isbn13, setIsbn13] =  useState('')
  const [bookHighlights, setBookHighlights] = useState('')
  const [languageVersions, setLanguageVersions] = useState("EN")
  const [previewLanguage, setpreviewLanguage] = useState('EN')
  const [subjectLinks, setSubjectLinks] = useState([])//use what?

  //manual fill
  const [earliestPublicationYear, setEarliestPublicationYear] = useState(0)
  const [bookLength, setBookLength] = useState("")

  const[languageCodeHelp, setLanguageCodeHelp] = useState(false)
  const[newShelf,setNewShelf] = useState(true)
  const [allShelves, setAllShelves]=useState(false)
  const [shelfId, setShelfId]=useState('')


  const validateShelf = (e)=>{
    console.log("submitted shelf");
    e.preventDefault();
    if(!title||!author){
      alert("please fill in missing data");
      return;
    }
    newShelf?postShelf():addToShelf()
  }


  useEffect(()=>{
    if(toAdd===undefined){
      return}
    if(toAdd.volumeInfo!==undefined){
    setTitle(toAdd.volumeInfo.title)
    setAuthor(toAdd.volumeInfo.authors.map(a=>a))
    setId(toAdd.id)
    const getIsbn=(isbn)=>{
      if(toAdd.volumeInfo.hasOwnProperty("industryIdentifiers")){
      const res = toAdd.volumeInfo.industryIdentifiers.filter(a=>a.type===isbn)
      if(res[0]!==undefined){return res[0].identifier}else{return ""}}else{return ""}
    }
    setIsbn10(getIsbn("ISBN_10"))
    setIsbn13(getIsbn("ISBN_13"))
    setBookLength(toAdd.volumeInfo.pageCount)

  }},[toAdd])



  function postShelf(){

    Axios.post("http://localhost:3001/shelf",{

      shelfTitle:shelfTitle,
      shelfDescription:shelfDescription,
      googleId:id,
      bookTitle:title,
      bookAuthor:author,
      isbn10:isbn10,
      isbn13:isbn13,
      bookHighlights:bookHighlights,
      earliestPublicationYear:earliestPublicationYear,
      bookLength:bookLength,
      languageVersions:languageVersions,
      previewLanguage:previewLanguage,
      previewStatus:toAdd.accessInfo.viewability,
      subjectLinks:subjectLinks
    })

  }

useEffect(()=>{
  Axios.get("http://localhost:3001/allshelves").then((res)=>{
      setAllShelves(res.data.map((obj)=>{return [obj._id, obj.shelfTitle, obj.shelfDescription]}))
  })
},[])


  function addToShelf(){
    Axios.put("http://localhost:3001/addbooktoshelf",{
      shelfId:shelfId,
      googleId:id,
      bookTitle:title,
      bookAuthor:author,
      isbn10:isbn10,
      isbn13:isbn13,
      bookHighlights:bookHighlights,
      earliestPublicationYear:earliestPublicationYear,
      bookLength:bookLength,
      languageVersions:languageVersions,
      previewLanguage:previewLanguage,
      previewStatus:toAdd.accessInfo.viewability,
      subjectLinks:subjectLinks
    })

  }

  return (
    <form onSubmit={(e)=>validateShelf(e)} className="SubmissionForm" id="shelfform" style={{display:formToggleOn?"block":"none"}}>
      <h5>Shelf information</h5>
      {allShelves && allShelves.map((shelf)=><div onClick={()=>{setShelfTitle(shelf[1]); setNewShelf(false); setShelfDescription(shelf[2]);setShelfId(shelf[0])}} key={shelf[0]}>{shelf[1]}</div>)}
      <input type="checkbox" style={{alignSelf:"center", marginRight:"1rem",width:"1.5rem",height:"1.5rem"}} id="previewFilter" onClick={()=>setNewShelf(!newShelf)} value="newShelf" checked={newShelf} disabled/>
      <label htmlFor="newShelf" className="subtitle1">Create a new shelf</label>
      <div className="form-section">
      <label htmlFor="shelfTitle">Shelf Question:</label>
      <input className="form-control" type="text" id="shelfTitle" value={shelfTitle}
       onChange={(e)=>{setShelfTitle(e.target.value); setNewShelf(true)}} placeholder="question form"/>
       <label htmlFor="shelfDescription">Shelf Description:</label>
       <input className="form-control" type="text" id="shelfDescription" value={shelfDescription}
        onChange={(e)=>setShelfDescription(e.target.value)} placeholder="one or two short paragraphs"/>
        <label htmlFor="previewLanguage">Preview Language:</label>
        <input className="form-control" type="text" id="previewLanguage" value={previewLanguage}
         onChange={(e)=>setpreviewLanguage(e.target.value)} placeholder="language code"/>
         <label htmlFor="languageVersions">Available in these Languages <HelpOutlineOutlinedIcon style={{cursor:"pointer"}} onClick={()=>{setLanguageCodeHelp(!languageCodeHelp)}}/>:</label>
         <input className="form-control" type="text" id="languageVersions" value={languageVersions} onChange={(e)=>setLanguageVersions([e.target.value])} placeholder="write in language code. separate with commas"/>
        </div>
{languageCodeHelp && <iframe src="https://datahub.io/core/language-codes/r/0.html" width="100%" height="300px" frameborder="0"></iframe>}
      <h5>Book information (partial-fill; corrections needed)</h5>
    <div className="form-section">
      <label htmlFor="title">Title:</label>
      <input className="form-control" type="text" id="title" value={title}
       onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
       <label htmlFor="author">Author(s):</label>
       <textarea className="form-control"  id="author" form="SubmissionForm" rows={4} value={author}
        onChange={(e)=>setAuthor(e.target.value)} placeholder="book author(s). Should match wikipedia page title. Separate with commas"/>

        <label htmlFor="earliestPublicationYear">Publication Date</label>
        <input className="form-control" type="number" id="earliestPublicationYear" value={earliestPublicationYear}
         onChange={(e)=>setEarliestPublicationYear(e.target.value)} placeholder="earliest publication year"/>
    </div>
           <div className="form-section readOnly">
               <label htmlFor="isbn10">Isbn-10:</label>
               <input className="form-control" type="text" id="isbn10" value={isbn10}
                onChange={(e)=>setIsbn10(e.target.value)} placeholder="isbn-10" readOnly="readOnly"/>
                <label htmlFor="isbn13">Isbn-13:</label>
                <input className="form-control" type="text" id="isbn13" value={isbn13}
                 onChange={(e)=>setIsbn13(e.target.value)} placeholder="isbn-13" readOnly="readOnly"/>
                  <label htmlFor="bookLength">Length (pages)</label>
                  <input className="form-control" type="text" id="bookLength" value={bookLength}
                   onChange={(e)=>setBookLength(e.target.value)} placeholder="book length" readOnly="readOnly"/>
                   <label htmlFor="bookHighlights">highlights</label>
                   <textarea className="form-control" type="text" id="bookHighlights" value={bookHighlights}
                    onChange={(e)=>setBookHighlights(e.target.value)} placeholder="one or two paragraphs from the book"/>
                  </div>
                  <input  className="btn" type="submit" onClick={(e)=>{validateShelf(e)}} value="Submit Shelf and Book"/>

      {author && toAdd.volumeInfo.authors.map(author=> <WikiTest author={author} key={author} toAdd={toAdd} earliestPublicationYear={earliestPublicationYear} setSubjectLinks={setSubjectLinks} subjectLinks={subjectLinks} formToggleOn={formToggleOn}/>)}



    </form>
  )


}

export default SubmissionForm
