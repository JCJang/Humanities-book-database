import QueryItem from './QueryItem'
const Query = ({result=[], setToAdd,toAdd}) => {
  console.log(result)
  return (
    <div className="Query">
    {result.map((a)=><QueryItem key={a.id} bg={a.id===toAdd.id?"var(--shelfpanellistpressed)":"var(--shelfpanellist)"} border={a.id===toAdd.id?"var(--shelfpanellistpressedborder)":"var(--shelfpanellistborder)"} top={a.id===toAdd.id?"0.3rem":"0px"} shadow={a.id===toAdd.id?"none":"var(--heavyshadow"} result={a} setToAdd={setToAdd}/>)}
  </div>)


}

export default Query
