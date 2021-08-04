const ShelfBook = ({book, setDetail}) => {
const fetchBook = (book)=>{
    fetch("https://openlibrary.org/works/"+book.work+".json")
    .then(a=>a.json())
    .then(response=>setDetail(response))
    .catch(console.log("no response from server"))


  }
  return (
  /*note to self: no need to wrap 'book' with curly braces inside a function (which is already wrapped)*/
    <div className="list list-2 text-2" onClick={()=>fetchBook(book)}>
      <h3>{book.title}</h3>
      <div>{book.work}</div>
    </div>

  )
}

export default ShelfBook
