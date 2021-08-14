import QueryItem from './QueryItem'
const Query = ({result, setToAdd}) => {
  console.log(result)
  return (
    <div className="Query">
    {result.items.map((a)=><QueryItem result={a} setToAdd={setToAdd}/>)}
  </div>)


}

export default Query
