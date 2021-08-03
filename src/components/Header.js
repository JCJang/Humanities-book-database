import SearchBar from './SearchBar'
import {useState} from 'react'

const Header = ({onSearch}) => {
  return (
    <div><h2>Search By Question</h2>
    <SearchBar type="text" onSearch = {onSearch}
     placeholder="What do you want to read?"/>

    </div>
  )
}

export default Header
