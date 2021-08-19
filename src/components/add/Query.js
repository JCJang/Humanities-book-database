import QueryItem from './QueryItem'
const Query = ({result=[], setToAdd}) => {
  console.log(result)
  return (
    <div className="Query">
    {result.map((a)=><QueryItem key={a.id} result={a} setToAdd={setToAdd}/>)}
  </div>)


}

export default Query
