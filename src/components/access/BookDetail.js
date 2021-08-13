const BookDetail = ({bookResponse}) => {
  console.log({bookResponse})
  return (
    <div className="list list-3">

    <h3>{bookResponse.title}</h3>
    <p>{bookResponse.authors.map(a=>a.author)}</p>

    <h5>Related people: {bookResponse.subject_people}</h5>
    <h5>Subject Matter: {bookResponse.subjects}</h5>


    </div>
  )
}

export default BookDetail
