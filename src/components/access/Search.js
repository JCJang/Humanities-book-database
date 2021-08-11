import SearchBar from '../SearchBar'
import {useState} from 'react'

const Search = ({onSearch}) => {
  return (
    <div className="Header"><h2>Search By Question</h2>
    <SearchBar type="text" onSearch = {onSearch}
     placeholder="What do you want to read?"/>

    </div>
  )
}

export default Search
