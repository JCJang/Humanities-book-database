import {useEffect, useState} from 'react';
import WikiTest from './WikiTest'

const SubmissionForm = ({toAdd,onSearch,formToggleOn }) => {

  const [id, setId] =  useState('')
  const [title, setTitle] =  useState('')
  const [author, setAuthor] =  useState('')
  const [isbn, setIsbn] =  useState('')
  const [isbn10, setIsbn10] =  useState('')
  const [isbn13, setIsbn13] =  useState('')



  //manual fill
  const [earliestPublicationYear, setEarliestPublicationYear] = useState("")
  const [bookLength, setBookLength] = useState("")



  const validateForm = (e)=>{
    console.log("submitted");
    e.preventDefault();
    if(!title||!author||!isbn){
      alert("please fill in missing data");
      return;
    }
    onSearch(title,author,isbn)
  }

  useEffect(()=>{
    if(toAdd===undefined){
      return}
    if(toAdd.volumeInfo!==undefined){
    setTitle(toAdd.volumeInfo.title)
    setAuthor(toAdd.volumeInfo.authors.map(a=>a))
    const getIsbn=(isbn)=>{
      if(toAdd.volumeInfo.hasOwnProperty("industryIdentifiers")){
      const res = toAdd.volumeInfo.industryIdentifiers.filter(a=>a.type===isbn)
      if(res[0]!==undefined){return res[0].identifier}else{return ""}}else{return ""}
    }
    setIsbn10(getIsbn("ISBN_10"))
    setIsbn13(getIsbn("ISBN_13"))
    setEarliestPublicationYear(toAdd.volumeInfo.publishedDate)
    setBookLength(toAdd.volumeInfo.pageCount)

  }},[toAdd])


  return (
    <form onSubmit={(e)=>validateForm(e)} className="SubmissionForm" id="SubmissionForm" style={{display:formToggleOn?"block":"none"}}>
      <h6>Book information (partial-fill; corrections needed)</h6>
    <div className="form-section">
      <label htmlFor="title">Title:</label>
      <input className="form-control" type="text" id="title" value={title}
       onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
       <label htmlFor="author">Author(s):</label>
       <textarea className="form-control"  id="author" form="SubmissionForm" rows={4} value={author}
        onChange={(e)=>setAuthor(e.target.value)} placeholder="book author(s). Should match wikipedia page title. Separate with commas"/>

        <label htmlFor="isbn">Isbn:</label>
        <input className="form-control" type="text" id="isbn" value={isbn}
         onChange={(e)=>setIsbn(e.target.value)} placeholder="isbn" />

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
                 </div>



      <br></br>
        {author && toAdd.volumeInfo.authors.map(author=> <WikiTest author={author} key={author} toAdd={toAdd} earliestPublicationYear={earliestPublicationYear}/>)}


    <input  className="btn" type="submit" value="Suggest"/>


    </form>
  )


}

export default SubmissionForm
