const QueryItem = ({result, setToAdd}) => {
  return (
    <div className="QueryItem" onClick={()=>setToAdd(result)}>
      <h4>{result.volumeInfo.title}</h4>
      <p>{result.volumeInfo.authors.map(a=>a)}</p>
      <p>{result.volumeInfo.publishedDate}</p>
      <p>{result.volumeInfo.pageCount}</p>



  </div>
  )

}

export default QueryItem
