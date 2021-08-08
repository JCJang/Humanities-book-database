const BookDetail = ({bookResponse}) => {
  console.log({bookResponse})
  return (
    <div className="list list-3">

    <h5>Related people: {bookResponse.subject_people}</h5>
    <h5>Subject Matter: {bookResponse.subjects}</h5>
  <iframe src="https://archive.org/details/rebelcamus00camu/page/166/mode/2up?ref=ol&access=1&view=theater&q=the" width="100%" height="100%" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

    </div>
  )
}

export default BookDetail
