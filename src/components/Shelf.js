import ShelfBook from './ShelfBook'
const Shelf = ({displayShelf, setDetail}) => {
  return (
    <div className="Shelf">{displayShelf.books.map((book)=><ShelfBook book={book} setDetail={setDetail} displayShelf={displayShelf}/>)}</div>
  )
}

export default Shelf
