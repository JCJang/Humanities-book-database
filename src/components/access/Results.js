import Result from './Result'
const Results = ({result, setShelf}) => {
  return (
    <div className="Results">

    {result && result.map((result)=><Result result={result} setShelf={setShelf}/>)}
  </div>
  )

}

export default Results
