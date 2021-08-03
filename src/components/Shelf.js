import ShelfBook from './ShelfBook'
const Shelf = ({displayShelf}) => {
  return (
    <div className="Shelf">{displayShelf.books.map((book)=><ShelfBook book={book}/>)}</div>
  )
}

export default Shelf
