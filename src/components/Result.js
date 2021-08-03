const Result = ({result,setShelf}) => {
  return (
    <div className="Result" onClick={()=>setShelf(result)}>{result.text}</div>
  )
}

export default Result
