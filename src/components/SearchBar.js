import {useState} from 'react'

const SearchBar = ({type,placeholder,onSearch}) => {
  const [search, setSearch] =  useState('')
  const validateForm = (e)=>{
    console.log("submitted");
    e.preventDefault();
    if(!search){
      alert("please enter a task");
      return;
    }
    onSearch({search})
  }
  return (
    <form onSubmit={(e)=>validateForm(e)}>
    <input type={type} value={search}
     onChange={(e)=>setSearch(e.target.value)} placeholder={placeholder}/>
    <input type="submit" value="Search"/>

    </form>
  )
}

export default SearchBar
