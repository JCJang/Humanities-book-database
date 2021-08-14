import {useEffect, useState} from 'react';
const SubmissionForm = ({toAdd,onSearch}) => {

  const [idea, setId] =  useState('')
  const [title, setTitle] =  useState('')
  const [author, setAuthor] =  useState('')
  const [isbn, setIsbn] =  useState('')

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
    setIsbn(getIsbn("ISBN_10"))
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
       onChange={(e)=>setIsbn(e.target.value)} placeholder="isbn"/>
    <input  className="btn" type="submit" value="Suggest"/>

    </form>
  )


}

export default SubmissionForm
