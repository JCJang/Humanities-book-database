import ShelfBook from './ShelfBook'
const Shelf = ({displayShelf, setDetail}) => {
  return (
    <div className="Shelf">{displayShelf.books.map((book)=><ShelfBook book={book} setDetail={setDetail}/>)}</div>
  )
}

export default Shelf
