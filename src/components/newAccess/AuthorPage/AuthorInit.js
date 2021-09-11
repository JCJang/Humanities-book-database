import Axios from 'axios'
import {useEffect} from 'react'

const AuthorInit = ({selectedAuthor,languageSetting}) => {


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



const log2 = `450		First Slavic settlements (to 500)
10th century
Year	Date	Event
910		Early stage of the Piast (Giecz-Gniezno area tribe) expansion (to 930)
965		Merchant Abraham ben Jacob mentions the city "Karako" (Currently Kraków)
966	April 14	Baptism of Poland
970		Denarius becomes the currency of Poland
972	24 July	Mieszko I defeats Odo I at the Battle of Cedynia
989		Lesser Poland is conquered
990		After a victory against Boleslaus II, Silesia is annexed`
.replace(/\[\d\]/g,"")
.replace(/Year\s+Date\s+Event/g,"")
.replace(/\d+th century/g,"")
.replace(/\"/g,"'")
.replace( /(\d*)\s*(January|February|March|April|May|June|July|August|September|October|November|December)*\s*(\d*)\s*(.*)[\.\n]/g, '"$1 $3 $2":"$4",\n')
.replace(/\"(\d+)\s+\"/g,`"$1"`)
.replace(/\s+/," ")
console.log(log2)


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
  Axios.get("http://localhost:3001/getauthortimeline").then((res)=>{
    console.log("data"+res.data)
  }).then( console.log("author Timeline"))
},[])

  return (
    <div>
    <h4 className="h4-details">Learn More</h4>
    <div className="Row">
      <div className="Column" style={{flex:"1 1",justifyContent:"center",alignItems:"center",marginTop:"1rem"}}>
        <div  style={{flex:"4 4"}}><img  style={{maxHeight:"20rem", width:"auto"}} src={selectedAuthor.authorWikiImage}></img></div>
        <h5  style={{flex:"1 1"}} className="h5-details">{selectedAuthor.authorWikiTitle}</h5>
        <h6  style={{flex:"1 1"}} className="subtitle1-details">{`${getYear(selectedAuthor.authorBirthDate)} - ${getYear(selectedAuthor.authorDeathDate)}`}</h6>
      </div>


      <div style={{flex:"1 1"}}>


      </div>

    </div>
    </div>

  )
}

export default AuthorInit
