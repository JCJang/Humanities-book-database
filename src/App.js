import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Results from './components/Results'
import Shelf from './components/Shelf'
import BookDetail from './components/BookDetail'
import {useState, useEffect} from 'react'

function App() {
  const [result, setResult] = useState([])
  const onSearch = (value) => {
    setResult(shelf.filter((shelf) => shelf.text.indexOf(value.search) > 0))
    if (result.length === 0) {
      alert("there are no matches")
      return
    }
  }
  const [shelf, setShelf] = useState([
    {
      id: 1,
      text: 'How should humans relate to history?',
      related: [2],
      books: [
        {
          title: 'On the uses and disadvantages of history for life',
          work: 'OL98168W'
        }, {
          title: 'The Rebel',
          work: 'OL15722007W'
        }, {
          title: 'the historian\'s craft',
          work: 'OL284446W'
        }
      ],
      saved: false,
      keywords: []
    }, {
      id: 2,
      text: 'How did the concept of nations arise?',
      related: [
        1, 3
      ],
      books: [
        {
          title: 'Imagined Communities',
          work: 'OL1702855W'
        }
      ],
      saved: false,
      keywords: []
    }, {
      id: 3,
      text: 'What are cultural systems?',
      related: [2],
      books: [
        {
          title: 'The interpretation of cultures',
          work: 'OL926851W'
        }
      ],
      saved: false,
      keywords: []
    }, {
      id: 4,
      text: 'What are human sentiments?',
      related: [5],
      books: [
        {
          title: 'The theory of moral sentiments',
          work: 'OL76826W'
        }
      ],
      saved: false,
      keywords: []
    }, {
      id: 5,
      text: 'What is Authenticity?',
      related: [4],
      books: [
        {
          title: 'sincerity and Authenticity',
          work: 'OL76867W'
        }
      ],
      saved: false,
      keywords: []
    }
  ])

  const [displayShelf, setDisplayShelf] = useState()
  const [detail,setDetail] = useState()

  return (<div>
    <Nav/>
    <div className="Row">
      <div className="Column col-1">
        <Header onSearch={onSearch}/> {result !== '' && <Results result={result} setShelf={setDisplayShelf}/>}
      </div>
      <div className="Column col-2">
        {displayShelf && <Shelf displayShelf={displayShelf} setDetail={setDetail}/>}
      </div>
      <div className="Column col-3">
        {detail && <BookDetail bookResponse={detail}/>}
      </div>
    </div>
  </div>);
}

export default App;
