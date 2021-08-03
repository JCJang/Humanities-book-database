import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Results from './components/Results'
import Shelf from './components/Shelf'
import { useState, useEffect } from 'react'


function App() {
  const [result,setResult]= useState([])
  const onSearch =(value)=> {
    setResult(shelf.filter((shelf)=>shelf.text.indexOf(value.search)>0))
    if(result.length===0){
      alert("there are no matches")
      return
    }
    }
  const [shelf, setShelf] =  useState([
      {id:1,
      text:'How should humans relate to history?',
      related:[2],
      books:['On the advantages and disatvantages of history for life', 'The Rebel', 'the historian\'s craft'],
      saved:false,
      keywords:[]},
      {id:2,
      text:'How did the concept of nations arise?',
      related:[1,3],
      books:['Imagined Communities'],
      saved:false,
      keywords:[]},
      {id:3,
      text:'What are cultural systems?',
      related:[2],
      books:['The interpretation of cultures'],
      saved:false,
      keywords:[]},
      {id:4,
      text:'What are human sentiments?',
      related:[5],
      books:['A theory of moral sentiments'],
      saved:false,
      keywords:[]},
      {id:5,
      text:'What is Authenticity?',
      related:[4],
      books:['sincerity and Authenticity'],
      saved:false,
      keywords:[]},
  ])

  const [displayShelf, setDisplayShelf] = useState({})

  return (
    <div>
    <Nav/>
    <header className="Header">
    <Header onSearch={onSearch}/>
    {displayShelf!==undefined && <Shelf displayShelf={displayShelf}/>}
    </header>
    <main className="Main">
    {result!=='' && <Results result={result} setShelf={setDisplayShelf}/>}
    </main>
    </div>
  );
}

export default App;
