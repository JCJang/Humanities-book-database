import {useEffect, useState} from 'react';
const SubmissionForm = ({toAdd,onSearch}) => {

  const [idea, setId] =  useState('')
  const [title, setTitle] =  useState('')
  const [author, setAuthor] =  useState('')
  const [isbn, setIsbn] =  useState('')
  const [isbn10, setIsbn10] =  useState('')
  const [isbn13, setIsbn13] =  useState('')

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

  }},[toAdd])

  return (
    <form onSubmit={(e)=>validateForm(e)}>
    <label htmlFor="title">Title:</label>
    <input className="form-control" type="text" id="title" value={title}
     onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
     <label htmlFor="author">Author(s):</label>
     <input className="form-control" type="text" id="author" value={author}
      onChange={(e)=>setAuthor(e.target.value)} placeholder="book author"/>
      <label htmlFor="isbn">Isbn:</label>
      <input className="form-control" type="text" id="isbn" value={isbn}
       onChange={(e)=>setIsbn(e.target.value)} placeholder="isbn" />

      <br></br>
      <h4>autofill(read-only)</h4>
      <label htmlFor="isbn10">Isbn-10:</label>
      <input className="form-control" type="text" id="isbn10" value={isbn10}
       onChange={(e)=>setIsbn10(e.target.value)} placeholder="isbn-10" readOnly="readOnly"/>
       <label htmlFor="isbn13">Isbn-13:</label>
       <input className="form-control" type="text" id="isbn13" value={isbn13}
        onChange={(e)=>setIsbn13(e.target.value)} placeholder="isbn-13" readOnly="readOnly"/>
    <input  className="btn" type="submit" value="Suggest"/>

readonly="readonly"
    </form>
  )


}

export default SubmissionForm
