import {useEffect, useState} from 'react';
const SubmissionForm = ({toAdd,onSearch}) => {

  const [idea, setId] =  useState('')
  const [title, setTitle] =  useState('')
  const [author, setAuthor] =  useState('')
  const [isbn, setIsbn] =  useState('')

  const validateForm = (e)=>{
    console.log("submitted");
    e.preventDefault();
    if(!title&&!author&&!isbn){
      alert("please fill in missing data");
      return;
    }
    onSearch(title,author,isbn)
  }

  useEffect(()=>{
    setTitle(toAdd.volumeInfo.title)
    setAuthor(toAdd.volumeInfo.authors.map(a=>a))
    setIsbn()
  },[toAdd])

  return (
    <form onSubmit={(e)=>validateForm(e)}>
    <input type="text" value={title}
     onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
     <input type="text" value={author}
      onChange={(e)=>setAuthor(e.target.value)} placeholder="book author"/>
      <input type="text" value={isbn}
       onChange={(e)=>setIsbn(e.target.value)} placeholder="isbn"/>
    <input  className="btn" type="submit" value="Suggest"/>

    </form>
  )


}

export default SubmissionForm
