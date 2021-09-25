import Axios from 'axios'
import {useEffect, useState} from 'react'
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import createSvgIcon from "@material-ui/icons/utils/createSvgIcon";
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';

const ArrowBackCircleIcon = createSvgIcon(
  <>
  <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path d="M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10c5.514-.001 10-4.487 10-10c0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8c.001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z" fill="currentColor"/><path d="M12.012 7.989l-4.005 4.005l4.005 4.004v-3.004h3.994v-2h-3.994z" fill="currentColor"/>
  </>
  );

const CircleIcon = createSvgIcon(
  <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1"/>
);
const CircleOutlinedIcon = createSvgIcon(
  <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1" fill="none"/>
);

const AuthorInitTablet = ({xs, s, m, l, xl, expandFurtherReading, selectedAuthor, authorFocus, setAuthorFocus, languageSetting, authorBookTitle, authorPublicationYear}) => {

const [fullTimelines, setFullTimelines] = useState([])
const [authorBirthYear, setAuthorBirthYear] = useState([])
const [authorAgeHover, setAuthorAgeHover] = useState(false)
const [authorNavFocus, setAuthorNavFocus] = useState("bg")
const authorNavLinks = ["bg", "bio"]

  const getPosition = (link) => {
    if(authorNavLinks.indexOf(authorNavFocus)-authorNavLinks.indexOf(link) > 1){
      return `${105 * (authorNavLinks.indexOf(authorNavFocus)-authorNavLinks.indexOf(link))}vw`
    } else {
      return `${-105 * (authorNavLinks.indexOf(authorNavFocus)-authorNavLinks.indexOf(link))}vw`
    }
  }

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


useEffect(()=>{
  if(selectedAuthor.authorBirthDate){
    setAuthorBirthYear(parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0]))}
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
  keyValueArr.push([authorPublicationYear, `icon${authorPublicationYear}`, `${selectedAuthor.authorWikiTitle} published ${authorBookTitle} at age ${authorPublicationYear-parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0])}`])
  if(selectedAuthor.authorBirthDate){
    keyValueArr.push([parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0]), selectedAuthor.authorBirthDate.match(/^\d*/)[0], `Birth of ${selectedAuthor.authorWikiTitle}`])
  }
  if(selectedAuthor.authorDeathDate){
    keyValueArr.push([parseFloat(selectedAuthor.authorDeathDate.match(/^\d*/)[0]),selectedAuthor.authorDeathDate.match(/^\d*/)[0], `Death of ${selectedAuthor.authorWikiTitle}, age ${parseFloat(selectedAuthor.authorDeathDate.match(/^\d*/)[0])-parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0])}`])
  }
  const sorted = keyValueArr.sort(function(a,b){return a[0] - b[0]})
  return sorted
}

const filterAroundLifeTime = (arr)=>{
  if(getYear(selectedAuthor.authorDeathDate)==="undefined"){
    const filtered = arr.filter((keyValue)=>{return keyValue[0] >= parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0])})
    return filtered
  }else{
  const filtered = arr.filter((keyValue)=>{return keyValue[0] >= parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0])})
                      .filter((keyValue)=>{return keyValue[0] <= parseFloat(selectedAuthor.authorDeathDate.match(/^\d*/)[0])})
  return filtered}
}

const filterAroundPublicationDate = (arr)=>{
    let filtered = arr
  for(let i=15; i>5; i--){
    filtered = arr.filter((keyValue)=>{return keyValue[0] >= authorPublicationYear-i+5})
                        .filter((keyValue)=>{return keyValue[0] <= authorPublicationYear+i})

    if(filtered.length<10){return filtered}
  }
  return filtered
}

  return (
    <div className="noScrollBar OpenedAuthor" style={{ overflowY:authorFocus==='init'?'':'auto',maxWidth:"100%", height:m?"var(--authorheightwnavtablet)":"var(--authorheightwnavmobile)",padding:m?"0 3rem":"0 2rem"}}>

    {authorFocus === "init"?  < div id = "shelfNav"
    className = "Row transition"
    style = {{
        height:"4rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom:"1rem"
      }} >
      <div className="authorNav" style={{height:"4rem", width:"4rem",color:"var(--paper)"}} onClick={()=>{setAuthorNavFocus("bg")}}><ChevronLeftOutlinedIcon/>Prev</div>

      <div className="Column" style={{justifyContent:"center",alignItems:"center"}}>
        <div>{authorNavLinks.map((link)=>{if(link===authorNavFocus){return <CircleIcon/>}else{return <CircleOutlinedIcon/>}})}</div>
        <div className="overline-details">LEARN MORE</div>
      </div>

      <div className="authorNav" style={{height:"4rem", width:"4rem",color:"var(--paper)"}} onClick={()=>{setAuthorNavFocus("bio")}}><ChevronRightOutlinedIcon/>Next</div>

      </div>
      :
      <span id="returnbtn" className="btn darkbtn" onClick={()=>{setAuthorFocus("init")}} style={{width:l?"6rem":"",display:"flex",justifyContent:"center", alignSelf:"flex-start",alignItems:"center",marginTop:"1rem",marginLeft:l?"":m?"3rem":"", position:"relative", zIndex:"1"}}><ArrowBackCircleIcon/><span style={{width:"85%", padding:"0 0.5rem"}}>Back to Author Menu</span></span>
    }


  {authorFocus==="init" &&

    <>
    <div className="Column transition" onClick={()=>{setAuthorFocus("bg")}} style={{flex:"1 1 70%", position:"absolute", left:getPosition("bg"), width:"100%", padding:m?"0 3rem":"0 2rem", height:m?"var(--authorheightwonavtablet)":"var(--authorheightwonavmobile)",alignItems:"center"}}>
      <div className="gradient">
           {fullTimelines[0] &&
              <div className="Column" style={{alignItems:"center", justifyContent:"center"}}>
                  {fullTimelines[0][0] && filterAroundPublicationDate(getKeyValueArr(fullTimelines[0][0].details)).map((keyValue)=>{
                      return <div key={keyValue[1]} style={{display:"grid", gridTemplateColumns:"10rem auto", gridRowGap:"1rem",
                      width:"100%",paddingLeft:keyValue[1]===`icon${authorPublicationYear}`?"0":"1rem", alignItems:"center"}}>
                      <div style={{marginTop:"0.5rem",display:"inline",fontWeight:"bold", margin:keyValue[1]===`icon${authorPublicationYear}`&&"2rem 0"}} className={keyValue[1]===`icon${authorPublicationYear}`?"subtitle1-details":"subtitle2-details"}>
                      {keyValue[1]===`icon${authorPublicationYear}`?keyValue[0]:keyValue[1]}</div>
                      <div style={{marginTop:"0.5rem",display:"inline",margin:keyValue[1]===`icon${authorPublicationYear}`&&"2rem   0"}} className={keyValue[1]===`icon${authorPublicationYear}`?"subtitle1-details":"body2-details"}>  {keyValue[2]}</div>
                      </div>
                      })}</div>
            }
        </div>
        <div style={{position:"absolute",bottom:m?"3rem":"2rem",padding:m?"0 3rem":"0 2rem"}}>
        <h5  className="h5-details" style={{textShadow:"0 0 7px var(--ink)"}}>Historical Background</h5>
        <h6  className="subtitle1-details" style={{textShadow:"0 0 7px var(--ink)"}}>{selectedAuthor.timelineLinks?selectedAuthor.timelineLinks.map((timeline)=>{return timeline.slice(11)}):"Not Available for this Author"}</h6>
        </div>
      </div>

      <div className="Column transition" onClick={()=>{setAuthorFocus("bio")}} style={{flex:"1 1 70%", position:l?"":"absolute", left:getPosition("bio"), width:"100%", height:m?"var(--authorheightwonavtablet)":"var(--authorheightwonavmobile)",alignItems:"center"}}>
      <div className="gradientBioNav">
      <img style={{width:"100vw",boxShadow:"var(--heavyshadow)",height:"auto"}} src={selectedAuthor.authorWikiImage}></img>
      </div>
      <div style={{position:"absolute",bottom:m?"3rem":"2rem", padding:m?"0 3rem":"0 2rem"}}>
      <h5  style={{flex:"1 1",textShadow:"0 0 7px var(--ink)",marginTop:"2rem"}} className="h5-details">{selectedAuthor.authorWikiTitle}</h5>
      <h6  style={{flex:"1 1",textShadow:"0 0 7px var(--ink)"}} className="subtitle1-details">{`${getYear(selectedAuthor.authorBirthDate)} - ${getYear(selectedAuthor.authorDeathDate)}`}</h6>
      </div>
      </div>

      </>

  }

  {authorFocus==="bg" && !selectedAuthor.timelineLinks[0] &&
  <h4 className={authorFocus==="bg"?"h4-details":"body2-details"} style={{margin:"2rem 0 1rem 0",textAlign:"center"}} id="authorTitle">
   No Historical Timeline Stored for {selectedAuthor.authorWikiTitle}
   </h4>
 }

  {authorFocus==="bg" && selectedAuthor.timelineLinks[0] &&

    <>
    <h4 className="h4-details" style={{margin:"2rem 0 1rem 0"}} id="authorTitle">
    Historical Timeline {selectedAuthor.timelineLinks[0].slice(9)}
    </h4>

  <div className="Column">

      {m?
        <>
           {fullTimelines[0] &&
              <div>
              {fullTimelines[0][0] &&  filterAroundLifeTime(getKeyValueArr(fullTimelines[0][0].details)).map((keyValue)=>{
                    return <div key={keyValue[1]} style={{paddingTop:"2rem", display:"grid", gridTemplateColumns:"10rem auto", gridRowGap:"1rem",
                      width:"100%",paddingLeft:keyValue[1]===`icon${authorPublicationYear}`?"0":"1rem"}}>

                        <div style={{lineHeight:"2.5",marginTop:"1rem", display:"inline",fontWeight:"bold",opacity:authorAgeHover===keyValue[1]?"1":"0.7", margin:keyValue[1]===`icon${authorPublicationYear}`&&"2rem 0"}} className={keyValue[1]===`icon${authorPublicationYear}`?"transition subtitle1-details":"subtitle2-details transition"}

                        onMouseEnter={() => setAuthorAgeHover(keyValue[1])}
                        onMouseLeave={() => setAuthorAgeHover(false)}>

                          {keyValue[1]===`icon${authorPublicationYear}`?keyValue[0]:keyValue[1]}
                        <div style={{position:"relative",opacity:authorAgeHover===keyValue[1]?"1":"0"}} className="transition subtitle1-details">{keyValue[0]-authorBirthYear} years old</div>

                        </div>

                        <div style={{lineHeight:"2.5",letterSpacing: "0.05rem", marginTop:"1rem",display:"block",margin:keyValue[1]===`icon${authorPublicationYear}`&&"2rem 0"}} className={keyValue[1]===`icon${authorPublicationYear}`?"subtitle1-details":"body1-details"}>

                        {keyValue[2].split(/(?<!([A-Z]|Inc|St|\sv))\.\s(?=[A-Z])/).filter((event)=>{return event}).map((event)=>{return <div style={{marginBottom:"1rem",opacity:authorAgeHover===keyValue[1]?"1":"0.7"}} className="transition">- {event}{/\.$/.test(event)?"":"."}</div>})}

                        </div>

                          </div>
                        })
                  }
              </div>
          }
          </>
          :
          <>
          {fullTimelines[0] &&
             <div>
             {fullTimelines[0][0] &&  filterAroundLifeTime(getKeyValueArr(fullTimelines[0][0].details)).map((keyValue)=>{
                      return  <div key={keyValue[1]} className="Column" style={{paddingTop:"0.5rem", width:"100%"}}>

                          <div className="Column" onMouseEnter={() => setAuthorAgeHover(keyValue[1])}
                          onMouseLeave={() => setAuthorAgeHover(false)}>
                                <div style={{lineHeight:"2",marginTop:"1rem", display:"inline",fontWeight:"bold",opacity:authorAgeHover===keyValue[1]?"1":"0.8"}} className="subtitle1-details Row transition">

                                      {keyValue[1]===`icon${authorPublicationYear}`?keyValue[0]:keyValue[1]}  <p style={{display:"inline", position:"relative",opacity:authorAgeHover===keyValue[1]?"1":"0"}} className="transition subtitle1-details">- {keyValue[0]-authorBirthYear} years old
                                      </p>

                                </div>

                                <div style={{lineHeight:"2",letterSpacing: "0.05rem", marginTop:"0.5rem",display:"block"}} className={keyValue[1]===`icon${authorPublicationYear}`?"subtitle1-details":"body1-details"}>

                                      {keyValue[2].split(/(?<!([A-Z]|Inc|St|\sv))\.\s(?=[A-Z])/).filter((event)=>{return event}).map((event)=>{
                                        return  <div  style={{paddingLeft:"2rem", marginBottom:"0.5rem",opacity:authorAgeHover===keyValue[1]?"1":"0.8"}} className="transition">
                                         {event}{/\.$/.test(event)?"":"."}
                                         </div>})}

                                </div>
                        </div>
                      </div>
                  })
        }
        </div>

        }
        </>
      }

      </div>

    <div style={{display:"flex",alignItems:"center", justifyContent:"center",marginTop:"1rem"}}>
        <a style={{textDecoration:"none",color:"var(--paper)",padding:"2rem"}} href="#returnbtn" className="btn">Back to Top</a>
    </div>

    <div className="body2-details" style={{opacity:"0.7",padding:"1.5rem"}}>This page is based on the Wikipedia article <a href={`https://en.wikipedia.org/wiki/${selectedAuthor.timelineLinks[0].replace(/\s/g,'_')}`} target="_blank" className="AttributionLink">{selectedAuthor.timelineLinks[0]}</a>; it is used under the <a href="https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License" taget="_blank" className="AttributionLink">Creative Commons Attribution-ShareAlike 3.0 Unported License (CC-BY-SA)</a>. You may redistribute it, verbatim or modified, providing that you comply with the terms of the CC-BY-SA.</div>

    </>
    }

{authorFocus==="bio" &&
<>
<div className="gradientBio" style={{opacity:"0.4", backgroundImage:!m && `url(${selectedAuthor.authorWikiImage})`, backgroundSize:"cover", height:m?"var(--authorheightwnavtablet)":"var(--authorheightwnavmobile)", width:"100vw", position:"absolute", left:"0", bottom:"0"}}>
</div>

<h4 className="h4-details" style={{margin:"2rem 0 1rem 0", position:"relative",zIndex:"1"}} id="authorTitle">
{selectedAuthor.authorWikiTitle}
  </h4>
  <div className={m?"Row":"Column"}>


      <div className={m?"Column":"Row"} style={{order:m?"2":"1", marginLeft:m && "4rem"}}>
        <div className={m && "upwardsGradientTablet"} style={{position:m?"":"relative", flex:"4 4", display:!m && "none"}}>
          <img  style={{maxHeight:m?"13rem":"18rem",width:"auto",boxShadow:"var(--heavyshadow)"}} src={selectedAuthor.authorWikiImage}></img>
        </div>

        <div style={{position:m?"relative":"", margin:"0 0.5rem 0 0.5rem", right:m?"":"2rem", top:m?"-4rem":"", width:m?"":"20rem",marginBottom: !m && "4rem"}}>

        {selectedAuthor.authorBgKeywords &&
          <div className="subtitle2" style={{ position:"relative", zIndex:"1"}}>
            <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
              Academic Background <LaunchRoundedIcon style={{marginLeft:"0.5rem"}}/>
              </div>
          <div>{selectedAuthor.authorBgKeywords[0] && selectedAuthor.authorBgKeywords.map((tag)=>{return <p className="tag AuthorLink" style={{display:"inline-block", border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem"}}><a href={`https://en.wikipedia.org/wiki/${tag.replace(/\s/g,'_')}`} target="_blank" className="AttributionLink">{tag}</a></p>})}</div>
        </div>
        }

        {selectedAuthor.authorLifeWorkKeywords  &&
          <div className="subtitle2" style={{ position:"relative", zIndex:"1"}}>
            <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
              Life Work <LaunchRoundedIcon style={{marginLeft:"0.5rem"}}/>
              </div>
          <div>{selectedAuthor.authorLifeWorkKeywords[0] && selectedAuthor.authorLifeWorkKeywords.map((tag)=>{return <p className="tag AuthorLink" style={{display:"inline-block", border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.3rem"}}><a href={`https://en.wikipedia.org/wiki/${tag.replace(/\s/g,'_')}`} target="_blank" className="AttributionLink">{tag}</a></p>})}</div>
        </div>
          }

        </div>
      </div>


      <div className="Column" style={{order:m?"1":"2", position:"relative",zIndex:"1"}}>
          <div style={{backgroundColor:"var(--paper)", color:"var(--ink)",padding:"1rem",border:"1.5px solid #C4C4C4", marginTop:"1rem", boxShadow:"var(--heavyshadow)"}}>

            <div className="overline-details" style={{textAlign:"center"}}>
                  SHORT BIOGRAPHY
            </div>

            <div className="body1-details" style={{ textAlign:"left", height:"auto"}}>
          {selectedAuthor.authorWikiExtract}
            </div>
          </div>

       </div>
      </div>

    <div style={{display:"flex",alignItems:"center", justifyContent:"center",marginTop:"1rem",position:"relative",zIndex:"1"}}>
        <a style={{textDecoration:"none",color:"var(--paper)",padding:"2rem"}} href="#returnbtn" className="btn">Back to Top</a>
    </div>

    <div className="body2-details" style={{opacity:"0.7",padding:"1.5rem"}}>This page is based on the Wikipedia article <a href={selectedAuthor.authorWikiUrl} target="_blank" className="AttributionLink">{selectedAuthor.authorWikiTitle}</a>; it is used under the <a href="https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License" taget="_blank" className="AttributionLink">Creative Commons Attribution-ShareAlike 3.0 Unported License (CC-BY-SA)</a>. You may redistribute it, verbatim or modified, providing that you comply with the terms of the CC-BY-SA.</div>

</>
}

</div>

)}

export default AuthorInitTablet
