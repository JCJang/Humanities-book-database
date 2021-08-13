const Result = ({result,setShelf}) => {
  return (
    <div className="list list-1 text-1" onClick={()=>setShelf(result)}>{result.text}</div>
  )
}

export default Result
