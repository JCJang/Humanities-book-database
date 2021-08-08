import {useEffect, useState} from 'react';
import Tag from './Tag'

const ShelfBook = ({book, setDetail}) => {


const [tags, setTags] = useState();
const [tagsLoaded, setTagsLoaded] = useState(false);
    const loadShelf = ()=>{
      fetch("https://openlibrary.org/works/"+book.work+".json")
      .then(a=>a.json())
      .then(response=>setTags(response))
      .catch(console.log("no response from server"))
      console.log(book);
      if(tags){setTagsLoaded(true)}
    }

    useEffect(()=>{loadShelf(book);
 },[book])

//onclick of ShelfBook, fetch this book for BookDetail
 const fetchBook = (book)=>{
     fetch("https://openlibrary.org/works/"+book.work+".json")
     .then(a=>a.json())
     .then(response=>setDetail(response))
     .catch(console.log("no response from server"))
   }

  return (

    <div key={book.work} className="list list-2 text-2" onClick={()=>fetchBook(book)}>
      <h3>{book.title}</h3>
      <div>{book.work}</div>
      <div>{tagsLoaded && tags.subjects.map((tag)=><Tag tag={tag}/>)}</div>

    </div>

  )
}

export default ShelfBook
