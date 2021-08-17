import {parseInfo} from 'infobox-parser'
import wiki from 'wikijs'
import {useEffect, useState} from 'react'
const WikiTest = ({author, toAdd, languageSetting="en", earliestPublicationYear=0}) => {

const [authorWikiTitle, setAuthorWikiTitle] = useState("")

//manual fill
const [authorBirthPlace, setAuthorBirthPlace] = useState("")
const [timelineLinks, setTimelineLinks] = useState([])
const [subjectLinks, setSubjectLinks] = useState([])//use what?
const [contentKeywords, setContentKeywords] = useState([])//choose from main interests,notable ideas

const [authorBirthDate, setAuthorBirthDate] = useState("")
const [authorDeathDate, setAuthorDeathDate] = useState("")
const [authorLifespan, setAuthorLifespan] = useState("")
const [authorAgeAtPublication, setAuthorAgeAtPublication] = useState("") //
const [authorBgKeywords, setAuthorBgKeywords] = useState([]) //region,school
const [authorLifeWorkKeywords, setAuthorLifeWorkKeywords] = useState([]) //main interests,notable ideas

const [authorWikiExtract, setAuthorWikiExtract] = useState("")
const [authorWikiCategory, setAuthorWikiCategory] = useState([])
const [authorWikiLanglinks, setAuthorWikiLanglinks] = useState([])
const [authorWikiImage, setAuthorWikiImage] = useState("")
const [authorWikiUrl, setAuthorWikiUrl] = useState("")
const [authorInfluences, setAuthorInfluences] = useState([])//referenced people; related people
const [authorInfluenced, setAuthorInfluenced] = useState([])//people referencing this author; related people

//
// wiki()
// 	.page('Simone de Beauvoir')
// 	.then(page =>
// 		page
// 		.chain()
// .categories()
// .extlinks()
// .geosearch() //coordinates needed
// .langlinks()
// .links()
// .image()
// .content() OR // .summary(). Returns long/short string in an 'extract' key
// .request()
//   )
//   .then(console.log)

const beauvoir = {
    "name": "Simone de Beauvoir",
    "image": "Simone de Beauvoir2.png",
    "caption": "Beauvoir in 1967",
    "birthName": "Simone Lucie Ernestine Marie Bertrand de Beauvoir",
    "birthDate": {
        "date": "1908-01-09T05:00:00.000Z",
        "age": 113
    },
    "birthPlace": "Paris",
    "deathDate": {
        "date": "1986-04-14T05:00:00.000Z",
        "age": 78
    },
    "deathPlace": "French Fifth Republic",
    "education": "University of Paris",
    "era": "20th-century philosophy",
    "region": "Western philosophy",
    "schoolTradition": [
        "Continental philosophy",
        "Existentialism",
        "Existential phenomenology",
        "French feminism",
        "Western Marxism"
    ],
    "mainInterests": [
        "Political philosophy",
        "{{hlist",
        "Feminism",
        "Ethics"
    ],
    "notableIdeas": [
        "The Ethics of Ambiguity",
        "Feminist ethics",
        "Existential feminism"
    ],
    "influences": "hlist ",
    "influenced": "hlist ",
    "partner": "Jean-Paul Sartre",
    "signature": "Simone de Beauvoir (signature).jpg"
}

useEffect(()=>{
  fetchAuthorWikiData(author)
  fetchAuthorImage(author)
fetchAuthorWikiUrl(author)
}, [author])

//https://www.w3schools.com/jsref/jsref_obj_date.asp JS dates killing me
//https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
    useEffect(()=>{
        if(authorBirthDate!==undefined && authorBirthDate!==""){
        if(Object.prototype.toString.call(authorBirthDate) === '[object Date]'){
          if(earliestPublicationYear-authorBirthDate.getFullYear()!==NaN){
      setAuthorAgeAtPublication(earliestPublicationYear-authorBirthDate.getFullYear())}}
    }else{
      if(earliestPublicationYear-authorBirthDate!==NaN){
      setAuthorAgeAtPublication(earliestPublicationYear-authorBirthDate)
    }}
  }, [earliestPublicationYear, authorBirthDate])


  const fetchAuthorWikiData = (author) => {
  console.log(author)
  wiki({ apiUrl: `https://${languageSetting}.wikipedia.org/w/api.php` })
  	.page(author)
  	.then(page =>
  		page
  			.chain()
      .categories()
      .extlinks()
      .langlinks()
      .summary()
      .request()
  	)
    .then((res)=>{
      console.log(res)
      setAuthorWikiTitle(res.title)
      setAuthorWikiExtract(res.extract)
      setAuthorWikiCategory(res.categories) //not working
      setAuthorWikiLanglinks(res.langlinks)
    })
  try{
    wiki({ apiUrl: `https://${languageSetting}.wikipedia.org/w/api.php` })
    .page(author)
    .then(page => page.fullInfo())
    .then(info => info.general)
    .then((res)=>{
      console.log(res)
      setAuthorBirthPlace(res.birthPlace)


  //steamroll later.

  setAuthorBgKeywords([res.region,res.schoolTradition])
  setAuthorLifeWorkKeywords([res.mainInterests,res.notableIdeas])
    setContentKeywords([res.mainInterests,res.notableIdeas])
    if(res.birthDate){setAuthorBirthDate(res.birthDate.date)}
      if(res.deathDate){ setAuthorDeathDate(res.deathDate.date)
       setAuthorLifespan(res.deathDate.age)}
      setTimelineLinks(res.schoolTradition)
      setSubjectLinks(res.schoolTradition)
      setAuthorInfluences(res.influences)
      setAuthorInfluenced(res.influenced)
  //filter out hlist
  // const filter = (x, setX,regex) => {
  //   if(x){
  //     if(Array.isArray(x)){
  //     setX(x.filter((x)=>/regex/.test(x) ===false))}}
  // }
  // filter(timelineLinks,setTimelineLinks,"hlist")
  // filter(subjectLinks,setSubjectLinks,"hlist")
  // filter(authorInfluences,setAuthorInfluences,"hlist")
  // filter(authorInfluenced,setAuthorInfluenced,"hlist")
  // filter(contentKeywords,setContentKeywords,"hlist")
  // filter(authorLifeWorkKeywords,setAuthorLifeWorkKeywords,"hlist")
  // filter(authorWikiCategory,setAuthorWikiCategory,"hlist")
    }
  )
  }catch(err){
    alert('Error has occured: '+err.stack)
  }
}

const fetchAuthorImage = (author) => {
wiki().page(author).then(page => page.mainImage()).then((res)=>setAuthorWikiImage(res)
)}
const fetchAuthorWikiUrl = (author) => {
wiki().page(author).then(page => page.url()).then((res)=>setAuthorWikiUrl(res)
)}

//if no page found, display "no wikipedia page found"
  return (
    <>
    <h4>{author} information (partial-fill; corrections needed)</h4>
    <div className="form-section">

            <label htmlFor="authorbirthPlace">Author's birth place:</label>
            <input className="form-control" type="text" id="authorBirthPlace" value={authorBirthPlace}
             onChange={(e)=>setAuthorBirthPlace(e.target.value)} placeholder="city, country/region"/>
        <label htmlFor="authorBirthDate">Author Birth Date</label>
        <input className="form-control" type="text" id="authorBirthDate" value={authorBirthDate}
        onChange={(e)=>setAuthorBirthDate(e.target.value)} placeholder="Author Birth Date"/>

    <label htmlFor="authorAgeAtPublication">Author Age at Publication</label>
    <input className="form-control" type="text" id="authorAgeAtPublication" value={authorAgeAtPublication}
    onChange={(e)=>setAuthorAgeAtPublication(e.target.value)} placeholder={`publication - ${authorBirthDate}`}/>

        <label htmlFor="authorDeathDate">Author Death Date</label>
        <input className="form-control" type="text" id="authorDeathDate" value={authorDeathDate}
        onChange={(e)=>setAuthorDeathDate(e.target.value)} placeholder="Author Death Date" />

        <label htmlFor="authorLifespan">Author Lifespan</label>
        <input className="form-control" type="text" id="authorLifespan" value={authorLifespan}
        onChange={(e)=>setAuthorLifespan(e.target.value)} placeholder="Author Lifespan"/>

        <label htmlFor="timelineLinks">Wikipedia timeline pages:</label>
        <input className="form-control" type="text" id="timelineLinks" value={timelineLinks}
         onChange={(e)=>setTimelineLinks(e.target.value)} placeholder="separate by comma"/>

        <label htmlFor="subjectLinks">Wikipedia subject pages:</label>
        <input className="form-control" type="text" id="subjectLinks" value={subjectLinks}
         onChange={(e)=>setSubjectLinks(e.target.value)} placeholder="separate by comma"/>

      <label htmlFor="contentKeywords">content keywords:</label>
      <input className="form-control" type="text" id="contentKeywords" value={contentKeywords}
       onChange={(e)=>setContentKeywords(e.target.value)} placeholder="content keywords"/>
       </div>
    <div className="form-section readOnly">

        <label htmlFor={`${author}url`}>Wikipedia Link for {author}:</label>
        <input className="form-control" type="text" value={authorWikiUrl} placeholder="wikipedia link" readOnly="readOnly" />

    <label htmlFor="authorBgKeywords">Author Background Keywords</label>
    <input className="form-control" type="text" id="authorBgKeywords" value={authorBgKeywords}
    onChange={(e)=>setAuthorBgKeywords(e.target.value)} placeholder="Author Background Keywords" readOnly="readOnly"/>

    <label htmlFor="authorLifeWorkKeywords">Author Life Work Keywords</label>
    <input className="form-control" type="text" id="authorLifeWorkKeywords" value={authorLifeWorkKeywords}
    onChange={(e)=>setAuthorLifeWorkKeywords(e.target.value)} placeholder="Author Life Work Keywords" readOnly="readOnly"/>

    <label htmlFor="authorWikiExtract">Summary</label>
    <input className="form-control" type="textArea" id="authorWikiExtract" value={authorWikiExtract}
    onChange={(e)=>setAuthorWikiExtract(e.target.value)} placeholder="extract from wikipedia page" readOnly="readOnly"/>

    <label htmlFor="authorWikiCategory">Author Categories</label>
    <input className="form-control" type="text" id="authorWikiCategory" value={authorWikiCategory}
    onChange={(e)=>setAuthorWikiCategory(e.target.value)} placeholder="author categories" readOnly="readOnly"/>

    <label htmlFor="authorWikiLanglinks">langlinks</label>
    <input className="form-control" type="text" id="authorWikiLanglinks" value={authorWikiLanglinks}
    onChange={(e)=>setAuthorWikiLanglinks(e.target.value)} placeholder="author langlinks" readOnly="readOnly"/>

    <label htmlFor="authorWikiImage">authorWikiImage</label>
    <input className="form-control" type="text" id="authorWikiImage" value={authorWikiImage}
    onChange={(e)=>setAuthorWikiImage(e.target.value)} placeholder="author image url" readOnly="readOnly"/>

    <label htmlFor="authorInfluences">Influences</label>
    <input className="form-control" type="text" id="authorInfluences" value={authorInfluences}
    onChange={(e)=>setAuthorInfluences(e.target.value)} placeholder={`${author} was influenced by these people`} readOnly="readOnly"/>


    <label htmlFor="authorInfluenced">authorInfluenced</label>
    <input className="form-control" type="text" id="authorInfluenced" value={authorInfluenced}
    onChange={(e)=>setAuthorInfluenced(e.target.value)} placeholder={`${author}'s thought influenced these people`}readOnly="readOnly"/>


  {/* <h4>{authorWikiTitle}</h4>
    // <div id="authorWikiImageHolder"><img src={authorWikiImage}></img></div>
    // <p>{authorWikiExtract}</p>*/}
    </div>
    </>
  )
}

export default WikiTest
