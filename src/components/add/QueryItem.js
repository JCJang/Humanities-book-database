const QueryItem = ({result, setToAdd}) => {

//if you see this warning again: "Objects are not valid as a React child (found: object with keys {type, identifier}). If you meant to render a collection of children, use an array instead." you messed up something here, while accessing the object. Don't change setResults.


const getIsbn=(isbn)=>{
  if(result.volumeInfo.hasOwnProperty("industryIdentifiers")){
  const res = result.volumeInfo.industryIdentifiers.filter(a=>a.type===isbn)
  if(res[0]!==undefined){return res[0].identifier}
}
}

  return (
    <div className="QueryItem" onClick={()=>setToAdd(result)}>
      <h3>{result.volumeInfo.title}</h3>
      <p>Authors: <strong>{result.volumeInfo.authors && result.volumeInfo.authors.map(a=>a)}</strong></p>
      <p>ISBN-10: <strong>{getIsbn("ISBN_10")}</strong></p>
      <p>ISBN-13: <strong>{getIsbn("ISBN_13")}</strong></p>
      <p>preview: <strong>{result.accessInfo && result.accessInfo.viewability}</strong></p>

      <p>Publication date: <strong>{result.volumeInfo.publishedDate}</strong></p>
      <p>Length: <strong>{result.volumeInfo.pageCount} pages</strong></p>
      <br></br>



  </div>
  )

}

export default QueryItem
