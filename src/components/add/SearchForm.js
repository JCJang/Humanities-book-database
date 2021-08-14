import {useState} from 'react'

const SearchForm = ({type,placeholder,onSearch}) => {
  const [title, setTitle] =  useState('')
  const [author, setAuthor] =  useState('')
  const [isbn, setIsbn] =  useState('')

  const validateForm = (e)=>{
    console.log("submitted");
    e.preventDefault();
    if(!title&&!author&&!isbn){
      alert("please enter a query");
      return;
    }
    onSearch(title,author,isbn)
  }
  return (
    <form onSubmit={(e)=>validateForm(e)}>
    <input type="text" value={title}
     onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
     <input type="text" value={author}
      onChange={(e)=>setAuthor(e.target.value)} placeholder="book author"/>
      <input type="text" value={isbn}
       onChange={(e)=>setIsbn(e.target.value)} placeholder="isbn"/>
    <input type="submit"  className="btn" value="Search"/>

    </form>
  )
}

export default SearchForm
