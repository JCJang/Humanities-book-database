import Search from './Search'
import Results from './Results'
import Shelf from './Shelf'
import BookDetail from './BookDetail'

import {useState, useEffect} from 'react'

function Access() {
  const [result, setResult] = useState([])
  const onSearch = (value) => {
    setResult(shelf.filter((shelf) => shelf.text.indexOf(value.search) > 0))
  }
  const [shelf, setShelf] = useState([])
  useEffect(()=>{
    const getShelves = async() => {
      const shelvesFromServer = await fetchShelves();
      setShelf(shelvesFromServer);
    }
    getShelves();
},[])


const fetchShelves = async() =>{
  const res = await fetch('http://localhost:5000/shelves');
  const data = await res.json();
  return data;
}

  const fetchShelf = async(id) =>{
    const res = await fetch(`http://localhost:5000/shelves/${id}`);
    const data = await res.json();
    return data;
  }

  const [displayShelf, setDisplayShelf] = useState()
  const [detail,setDetail] = useState()

  return (<div>
    <div className="Row">
      <div className="Column col-1">
        <Search onSearch={onSearch}/>
        {result !== '' && <Results result={result} setShelf={setDisplayShelf}/>}

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

export default Access;
