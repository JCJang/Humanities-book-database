import Axios from 'axios'
import {useEffect, useState,useRef} from 'react'
import { useTranslation } from 'react-i18next'

import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import createSvgIcon from "@material-ui/icons/utils/createSvgIcon";
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';

const CircleIcon = createSvgIcon(
  <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1"/>
);
const CircleOutlinedIcon = createSvgIcon(
  <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1" fill="none"/>
);

const AuthorInit = ({xs, s, m, l, xl, expandFurtherReading, selectedAuthor, authorFocus, setAuthorFocus, languageSetting, authorBookTitle, authorPublicationYear}) => {

const [fullTimelines, setFullTimelines] = useState([])
const [authorBirthYear, setAuthorBirthYear] = useState([])
const [authorAgeHover, setAuthorAgeHover] = useState(false)
const [authorNavFocus, setAuthorNavFocus] = useState("bg")
const authorNavLinks = ["bg", "bio"]
const {t, i18n} = useTranslation();

  const getYear = (date)=> {
    if(!date){return ""}
    if(date.slice(0,1)==="-"){
      const year = `${date.slice(1,5)} B.C.`
      return year;

    }else{
      const year = date.match(/^\d*/);
      return year;
    }
  }

     const [displayAuthorScroll, setDisplayAuthorScroll] = useState(true)

         const authorScroll = useRef();

           const detectAuthorScrollBottom = () => {
               if (authorScroll.current) {
                 const { scrollTop, scrollHeight, clientHeight } = authorScroll.current;
                 if (scrollTop + clientHeight > scrollHeight - 200) {
                       // TO SOMETHING HERE
                   setDisplayAuthorScroll(false)
                 }else{
                   setDisplayAuthorScroll(true)
                 }
               }
           };


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

    Axios.post("https://humanities-book-server.cyclic.app/getauthortimeline",{
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
  keyValueArr.push([authorPublicationYear, `icon${authorPublicationYear}`, `${selectedAuthor.authorWikiTitle} ${t("Find.Author.publish")} ${authorBookTitle} ${t("Find.Author.publishAtAge")} ${authorPublicationYear-parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0])}`])
  if(selectedAuthor.authorBirthDate){
    keyValueArr.push([parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0]), selectedAuthor.authorBirthDate.match(/^\d*/)[0], `${t("Find.Author.birth")} ${selectedAuthor.authorWikiTitle}`])
  }
  if(selectedAuthor.authorDeathDate){
    keyValueArr.push([parseFloat(selectedAuthor.authorDeathDate.match(/^\d*/)[0]),selectedAuthor.authorDeathDate.match(/^\d*/)[0], `${t("Find.Author.death")} ${selectedAuthor.authorWikiTitle}${"Find.Author.deathAtAge"} ${parseFloat(selectedAuthor.authorDeathDate.match(/^\d*/)[0])-parseFloat(selectedAuthor.authorBirthDate.match(/^\d*/)[0])}`])
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
    <div className="noScrollBar OpenedAuthor transition" onScroll={()=>detectAuthorScrollBottom()} ref={authorScroll} style={{marginLeft:"3rem", overflowY:authorFocus==='init'?'':'auto',maxWidth:"100%", height:"var(--authorheight)"}}>

    {!l &&
      < div id = "shelfNav"
    className = "Row transition"
    style = {
      {
        height:"4rem",
        width: "100vw",
        justifyContent: "center"
      }
    } >
      <div className="authorNav" style={{height:"4rem", width:"4rem",color:"var(--paper)",cursor:authorFocus==="init" && "pointer"}} onClick={()=>{setAuthorNavFocus("bg")}}><ChevronLeftOutlinedIcon/>{t("Util.prev")}</div>

      <div className="Column transition">
      <div>{authorNavLinks.map((link)=>{if(link===authorNavFocus){return <CircleIcon/>}else{return <CircleOutlinedIcon/>}})}</div>
      <div className="overline-details">{t("Find.Author.learnMore").toUpperCase()}</div>
      </div>

      <div className="authorNav" style={{height:"4rem", width:"4rem",color:"var(--paper)",cursor:authorFocus==="init" && "pointer"}} onClick={()=>{setAuthorNavFocus("bio")}}><ChevronRightOutlinedIcon/>{t("Util.next")}</div>
      </div>
    }

<div className="Row" style={{alignItems:"center"}}>

      <h4 className="h4-details" style={{margin:"2rem 0 1rem 0",display:"inlineBlock"}} id="authorTitle">{authorFocus==='init'?t("Find.Author.learnMore"):authorFocus==='bg' && selectedAuthor.timelineLinks[0]?`${t("Find.Author.timeline")} ${selectedAuthor.timelineLinks[0].slice(9)}`:authorFocus==='bg'?`${t("Find.Author.noTimeline")} ${selectedAuthor.authorWikiTitle}
`:selectedAuthor.authorWikiTitle}</h4>

      {authorFocus==='bio' && <span  className="subtitle1-details" style={{margin:"2rem 1rem 1rem 1rem", display:"inlineBlock"}}>{`${getYear(selectedAuthor.authorBirthDate)} - ${getYear(selectedAuthor.authorDeathDate)}`}</span>}
</div>


<div className="Row" style={{position:"relative"}}>

  <div className="Column" style={{flex:"1 1 70%"}}>

      {authorFocus==="init" &&  <div  style={{flex:"4 4"}}>
           <div  style={{maxHeight:"2rem"}}>
           {fullTimelines[0] &&
              <div className="gradient" onClick={()=>{setAuthorFocus("bg")}} style={{cursor:authorFocus==="init" && "pointer"}}>
                  {fullTimelines[0][0] && filterAroundPublicationDate(getKeyValueArr(fullTimelines[0][0].details)).map((keyValue)=>{
                      return <div key={keyValue[1]} style={{display:"grid", gridTemplateColumns:"10rem auto", gridRowGap:"1rem",
                      width:expandFurtherReading?"30rem":"40rem",paddingLeft:keyValue[1]===`icon${authorPublicationYear}`?"0":"1rem"}}>
                      <div style={{marginTop:"0.5rem",display:"inline",fontWeight:"bold", margin:keyValue[1]===`icon${authorPublicationYear}`&&"2rem 0"}} className={keyValue[1]===`icon${authorPublicationYear}`?"subtitle1-details":"subtitle2-details"}>
                      {keyValue[1]===`icon${authorPublicationYear}`?keyValue[0]:keyValue[1]}</div>
                      <div style={{marginTop:"0.5rem",display:"inline",margin:keyValue[1]===`icon${authorPublicationYear}`&&"2rem   0"}} className={keyValue[1]===`icon${authorPublicationYear}`?"subtitle1-details":"body2-details"}>  {keyValue[2]}</div>
                      </div>
                      })}</div>
            }
          </div>
        </div>
      }


      {authorFocus==="init" &&
      <>
        <h5 onClick={()=>{setAuthorFocus("bg")}} className="h5-details" style={{textShadow:"0 0 7px var(--ink)",cursor:authorFocus==="init" && "pointer"}}>{t("Find.Author.Nav.background")}</h5>
        <h6 onClick={()=>{setAuthorFocus("bg")}} className="subtitle1-details" style={{textShadow:"0 0 7px var(--ink)",cursor:authorFocus==="init" && "pointer"}}>{selectedAuthor.timelineLinks?selectedAuthor.timelineLinks.map((timeline)=>{return timeline.slice(11)}):`${t("Find.Author.noTimeline")} ${selectedAuthor.authorWikiTitle}`}</h6></>}


    {authorFocus==="bg" &&  <div  style={{flex:"4 4"}}>
           <div>
           {fullTimelines[0] &&
              <div>
              {fullTimelines[0][0] &&
                filterAroundLifeTime(getKeyValueArr(fullTimelines[0][0].details)).map((keyValue)=>{
                    return <div key={keyValue[1]} style={{paddingTop:"2rem", display:"grid", gridTemplateColumns:"10rem auto", gridRowGap:"1rem",
                      width:"100%",paddingLeft:keyValue[1]===`icon${authorPublicationYear}`?"0":"1rem"}}>

                        <div style={{lineHeight:"2.5",marginTop:"1rem", display:"inline",fontWeight:"bold",opacity:authorAgeHover===keyValue[1]?"1":"0.7", margin:keyValue[1]===`icon${authorPublicationYear}`&&"2rem 0"}} className={keyValue[1]===`icon${authorPublicationYear}`?"transition subtitle1-details":"subtitle2-details transition"}

                        onMouseEnter={() => setAuthorAgeHover(keyValue[1])}
                        onMouseLeave={() => setAuthorAgeHover(false)}>

                          {keyValue[1]===`icon${authorPublicationYear}`?keyValue[0]:keyValue[1]}
                        <div style={{position:"absolute",opacity:authorAgeHover===keyValue[1]?"1":"0"}} className="transition subtitle1-details">{keyValue[0]-authorBirthYear} {t("Find.Author.ageLabel")}</div>

                        </div>

                        <div style={{lineHeight:"2.5",letterSpacing: "0.05rem", marginTop:"1rem",display:"block",margin:keyValue[1]===`icon${authorPublicationYear}`&&"2rem 0"}} className={keyValue[1]===`icon${authorPublicationYear}`?"subtitle1-details":"body1-details"}>

                        {keyValue[2].split(/(?<!([A-Z]|Inc|St|\sv))\.\s(?=[A-Z])/).filter((event)=>{return event}).map((event)=>{return <div style={{marginBottom:"1rem",opacity:authorAgeHover===keyValue[1]?"1":"0.7"}} className="transition">- {event}{/\.$/.test(event)?"":"."}</div>})}

                        </div>

                          </div>
                        })}
                        </div>
          }
          </div>
      </div>
    }

    {authorFocus==="bio" &&
        <div style={{backgroundColor:"var(--paper)", color:"var(--ink)",padding:"1rem",border:"1.5px solid #C4C4C4", marginTop:"1rem", boxShadow:"var(--heavyshadow)"}}>
            <div className="overline-details" style={{textAlign:"center"}}>
                  {t("Find.Author.biography").toUpperCase()}
          </div>

          <div className="body1-details" style={{ textAlign:"left", height:"auto"}}>
          {selectedAuthor.authorWikiExtract}
            </div>

          </div>}


    {authorFocus!=="init" &&
    <>


      <div style={{display:"flex",alignItems:"center", justifyContent:"center",marginTop:"1rem"}}>
            <a style={{textDecoration:"none",color:"var(--paper)",padding:"2rem"}} href="#authorTitle" className="btn">{t("Util.backToTop")}</a>
      </div>

    {authorFocus==="bio" &&
    <div className="body2-details" style={{opacity:"0.7",padding:"1.5rem"}}>{t("Find.Author.wiki-1")} <a href={selectedAuthor.authorWikiUrl} target="_blank" className="AttributionLink">{selectedAuthor.authorWikiTitle}</a>{t("Find.Author.wiki-2")} <a href="https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License" target="_blank" className="AttributionLink">{t("Find.Author.wiki-3")}</a> {t("Find.Author.wiki-4")}</div>}

    {authorFocus==="bg" && selectedAuthor.timelineLinks[0] &&
    <div className="body2-details" style={{opacity:"0.7",padding:"1.5rem"}}>{t("Find.Author.wiki-1")} <a href={`https://en.wikipedia.org/wiki/${selectedAuthor.timelineLinks[0].replace(/\s/g,'_')}`} target="_blank" className="AttributionLink">{selectedAuthor.timelineLinks[0]}</a>{t("Find.Author.wiki-2")} <a href="https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License" target="_blank" className="AttributionLink">{t("Find.Author.wiki-3")}</a> {t("Find.Author.wiki-4")}</div>}

</>}

</div>

    {authorFocus!=="bg" &&
      <div className="Column transition" style={{flex:"1 1 30%",position:authorFocus==="init"?"absolute":"relative",marginTop:"1rem",right:expandFurtherReading?"0":authorFocus==="init"?"10rem":"0", marginLeft:"3rem"}}>

        {authorFocus!=="bg" &&
         <div onClick={()=>{setAuthorFocus("bio")}} className={authorFocus==="bio"?"upwardsGradient transition":"transition"} style={{flex:"4 4",cursor:authorFocus==="init" && "pointer"}}><img  style={{maxHeight:authorFocus==="init"?"18rem":expandFurtherReading?"13rem":"18rem", width:"auto",boxShadow:"var(--heavyshadow)"}} src={selectedAuthor.authorWikiImage}></img></div>
      }

        {authorFocus==="init" &&
        <>
        <h5 onClick={()=>{setAuthorFocus("bio")}} style={{flex:"1 1",textShadow:"0 0 7px var(--ink)",cursor:authorFocus==="init" && "pointer"}} className="h5-details">{selectedAuthor.authorWikiTitle}</h5>
        <h6 onClick={()=>{setAuthorFocus("bio")}} style={{flex:"1 1",textShadow:"0 0 7px var(--ink)",cursor:authorFocus==="init" && "pointer"}} className="subtitle1-details">{`${getYear(selectedAuthor.authorBirthDate)} - ${getYear(selectedAuthor.authorDeathDate)}`}</h6></>}


        {authorFocus==="bio" &&

            <div style={{position:"absolute", margin:"0 0.5rem 0 0.5rem", top:"14rem"}}>

            {selectedAuthor.authorBgKeywords &&
              <div className="subtitle2">
                <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
                  {t("Find.Author.academicBackground")} <LaunchRoundedIcon style={{marginLeft:"0.5rem"}}/>
                  </div>
              <div>{selectedAuthor.authorBgKeywords[0] && selectedAuthor.authorBgKeywords.map((tag)=>{return <p className="tag AuthorLink" style={{display:"inline-block", border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.5rem"}}><a href={`https://en.wikipedia.org/wiki/${tag.replace(/\s/g,'_')}`} target="_blank" className="AttributionLink">{tag}</a></p>})}</div>
            </div>
            }

            {selectedAuthor.authorLifeWorkKeywords  &&
              <div className="subtitle2">
                <div className="Row" style={{alignItems:"center", margin:"1rem"}}>
                {t("Find.Author.lifeWork")} <LaunchRoundedIcon style={{marginLeft:"0.5rem"}}/>
                  </div>
              <div>{selectedAuthor.authorLifeWorkKeywords[0] && selectedAuthor.authorLifeWorkKeywords.map((tag)=>{return <p className="tag AuthorLink" style={{display:"inline-block", border:"1.5px solid var(--paper)", margin:"0 0.5rem 0.5rem 0", padding:"0.2rem 0.5rem"}}><a href={`https://en.wikipedia.org/wiki/${tag.replace(/\s/g,'_')}`} target="_blank" className="AttributionLink">{tag}</a></p>})}</div>
            </div>
              }

            </div>
      }

    </div>}
    </div>
    {displayAuthorScroll &&  <div class="scrollIndicator-container">
      <div class={authorFocus==="bg"?"scrollIndicatorBg":"scrollIndicatorBio"} style={{display:authorFocus==="init"&&"none"}}></div>
    </div>
  }
  </div>

  )
}

export default AuthorInit
