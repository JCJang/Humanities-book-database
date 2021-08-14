const QueryItem = ({result, setToAdd}) => {
  return (
    <div className="QueryItem" onClick={()=>setToAdd(result)}>
      <h3>{result.volumeInfo.title}</h3>
      <p>Authors: <strong>{result.volumeInfo.authors && result.volumeInfo.authors.map(a=>a)}</strong></p>
      <p>Publication date: <strong>{result.volumeInfo.publishedDate}</strong></p>
      <p>Length: <strong>{result.volumeInfo.pageCount} pages</strong></p>
      <br></br>



  </div>
  )

}

export default QueryItem
