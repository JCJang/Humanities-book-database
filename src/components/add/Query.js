import QueryItem from './QueryItem'
const Query = ({result, setToAdd}) => {
    if(result==true){result.items.map(a=>console.log(a))}
  return (
    <div className="Query">
    {result.items.map((a)=><QueryItem result={a} setToAdd={setToAdd}/>)}
  </div>)


}

export default Query
