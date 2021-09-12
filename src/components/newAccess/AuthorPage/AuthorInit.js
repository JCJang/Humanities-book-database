import Axios from 'axios'
import {useEffect, useState} from 'react'

const AuthorInit = ({selectedAuthor,languageSetting, displayBookTitle, displayEarliestPublicationYear}) => {

const [fullTimelines, setFullTimelines] = useState([])

  const getYear = (date)=> {
    if(!date){return "undefined"}
    if(date.slice(0,1)==="-"){
      const year = `${date.slice(1,5)} B.C.`
      return year;

    }else{
      const year = date.match(/^\d*/);
      return year;
    }
  }


// parser
// const log2 = `450		First Slavic settlements (to 500)
// 10th century
// Year	Date	Event
// 910		Early stage of the Piast (Giecz-Gniezno area tribe) expansion (to 930)
// 965		Merchant Abraham ben Jacob mentions the city "Karako" (Currently Kraków)
// 966	April 14	Baptism of Poland
// 970		Denarius becomes the currency of Poland
// 972	24 July	Mieszko I defeats Odo I at the Battle of Cedynia
// 989		Lesser Poland is conquered
// 990		After a victory against Boleslaus II, Silesia is annexed`
// .replace(/\[\d\]/g,"")
// .replace(/Year\s+Date\s+Event/g,"")
// .replace(/\d+th century/g,"")
// .replace(/\"/g,"'")
// .replace( /(\d*)\s*(January|February|March|April|May|June|July|August|September|October|November|December)*\s*(\d*)\s*(.*)[\.\n]/g, '"$1 $3 $2":"$4",\n')
// .replace(/\"(\d+)\s+\"/g,`"$1"`)
// .replace(/\s+/," ")
// console.log(log2)


//how to extract object values
// const events = {}
//
//   var keys = Object.keys(events);
//
//   var values = []
//   var finalArr = []
//
//   Object.entries(events).forEach(([key, value]) => {values.push(value.event)})
//   for(var i = 0; i < keys.length;i++){
//     finalArr.push( `"${keys[i]}":"${values[i]}"` );
//
//   }
//   var final = finalArr.join(",")


useEffect(()=>{
  setFullTimelines([])
  selectedAuthor.timelineLinks.forEach((timeline)=>{

    const capitalize = (str) => {
    const arr = str.split(" ")
    const newStr = arr.map((word)=>{ return word.slice(0,1).toUpperCase() + word.slice(1,word.length)})
    .join(" ")
    return newStr
    }

    Axios.post("http://localhost:5000/getauthortimeline",{
    language: languageSetting,
     timelineWikiTitle:capitalize(timeline)

    }).then((res)=>{
      if(res.data.editions===undefined){console.log(`${timeline} not in database`); return;}else{
        console.log(res.data)
        setFullTimelines([...fullTimelines, res.data.editions])
        console.log(`author Timeline ${capitalize(timeline)} retrieved`)
      }

    })
  })

},[selectedAuthor])

const getKeyValueArr = (obj)=>{
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const keyValueArr=[]
  for(let i = 0; i< keys.length; i++){
    keyValueArr.push([parseFloat(keys[i].match(/^\d*/)[0]),keys[i],values[i]])
  }
  keyValueArr.push([displayEarliestPublicationYear, `icon${displayEarliestPublicationYear}`, `${selectedAuthor.authorWikiTitle} published ${displayBookTitle}`])
  if(selectedAuthor.authorBirthDate){
    keyValueArr.push([parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0]), selectedAuthor.authorBirthDate.match(/^\d*/)[0], `Birth of ${selectedAuthor.authorWikiTitle}`])
  }
  if(selectedAuthor.authorDeathDate){
    keyValueArr.push([parseFloat(selectedAuthor.authorDeathDate.match(/^\d*/)[0]),selectedAuthor.authorDeathDate.match(/^\d*/)[0], `Death of ${selectedAuthor.authorWikiTitle}`])
  }
  const sorted = keyValueArr.sort(function(a,b){return a[0] - b[0]})
  return sorted
}
const filterAroundLifeTime = (arr)=>{
  const filtered = arr.filter((keyValue)=>{return keyValue[0] >= parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0])})
                      .filter((keyValue)=>{return keyValue[0] <= parseFloat(selectedAuthor.authorDeathDate.match(/^\d*/)[0])})
  return filtered
}
const filterAroundPublicationDate = (arr)=>{
    let filtered = arr
  for(let i=15; i>5; i--){
    filtered = arr.filter((keyValue)=>{return keyValue[0] >= displayEarliestPublicationYear-i+5})
                        .filter((keyValue)=>{return keyValue[0] <= displayEarliestPublicationYear+i})

    if(filtered.length<10){return filtered}
  }
  return filtered
}

  return (
    <div style={{marginLeft:"3rem"}}>
    <h4 className="h4-details">Learn More</h4>
    <div className="Row" style={{position:"relative"}}>

      <div className="Column" style={{flex:"1 1 50%"}}>
        <div  style={{flex:"4 4", maxHeight:"2rem"}}>
           <div  style={{maxHeight:"2rem"}}>{fullTimelines[0] &&
          <div className="gradient">{fullTimelines[0][0] && filterAroundPublicationDate(getKeyValueArr(fullTimelines[0][0].details)).map((keyValue)=>{
            return <div key={keyValue[1]} style={{display:"grid",  gridTemplateColumns:"10rem auto", gridRowGap:"1rem",
width:"40rem",paddingLeft:keyValue[1]===`icon${displayEarliestPublicationYear}`?"0":"1rem"}}>
<div style={{marginTop:"0.5rem",display:"inline",fontWeight:"bold", margin:keyValue[1]===`icon${displayEarliestPublicationYear}`&&"2rem 0"}} className={keyValue[1]===`icon${displayEarliestPublicationYear}`?"subtitle1-details":"subtitle2-details"}>
  {keyValue[1]===`icon${displayEarliestPublicationYear}`?keyValue[0]:keyValue[1]}</div>
<div style={{marginTop:"0.5rem",display:"inline",margin:keyValue[1]===`icon${displayEarliestPublicationYear}`&&"2rem 0"}} className={keyValue[1]===`icon${displayEarliestPublicationYear}`?"subtitle1-details":"body2-details"}>  {keyValue[2]}</div>
      </div>
          })}</div>
          }
          </div>
        </div>
      <h5  className="h5-details">Historical Background</h5>
      <h6  className="subtitle1-details">{selectedAuthor.timelineLinks?selectedAuthor.timelineLinks.map((timeline)=>{return timeline.slice(11)}):"Not Available for this Author"}</h6>
    </div>
      <div className="Column" style={{flex:"1 1 50%",position:"absolute",justifyContent:"center",alignItems:"center",marginTop:"1rem",right:"0"}}>
        <div  style={{flex:"4 4"}}><img  style={{maxHeight:"20rem", width:"auto"}} src={selectedAuthor.authorWikiImage}></img></div>
        <h5  style={{flex:"1 1"}} className="h5-details">{selectedAuthor.authorWikiTitle}</h5>
        <h6  style={{flex:"1 1"}} className="subtitle1-details">{`${getYear(selectedAuthor.authorBirthDate)} - ${getYear(selectedAuthor.authorDeathDate)}`}</h6>
      </div>


    </div>
    </div>

  )
}

export default AuthorInit
