import {parseInfo} from 'infobox-parser'
import wiki from 'wikijs'
import {useEffect, useState} from 'react'
const WikiTest = ({author, languageSetting="en", earliestPublicationYear=0}) => {

const [authorWikiTitle, setAuthorWikiTitle] = useState("")

//manual fill
const [authorBirthPlace, setAuthorBirthPlace] = useState("")
const [timelineLinks, setTimelineLinks] = useState([])
const [subjectLinks, setSubjectLinks] = useState([])//use what?
const [contentKeywords, setContentKeywords] = useState([])//choose from main interests,notable ideas

const [authorBirthDate, setAuthorBirthDate] = useState()
const [authorDeathDate, setAuthorDeathDate] = useState()
const [authorLifespan, setAuthorLifespan] = useState()
const [authorAgeAtPublication, setAuthorAgeAtPublication] = useState() //
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
    useEffect(()=>{
      if(authorBirthDate!==undefined && authorBirthDate.getFullYear()!==NaN){
      setAuthorAgeAtPublication(earliestPublicationYear-authorBirthDate.getFullYear())}
    }, [earliestPublicationYear])


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
    setAuthorWikiCategory(res.categories)
    setAuthorWikiLanglinks(res.langlinks)

    setAuthorWikiCategory(authorWikiCategory.filter((x)=>/hlist/.test(x)===false))


  })
try{
  wiki({ apiUrl: `https://${languageSetting}.wikipedia.org/w/api.php` })
  .page(author)
  .then(page => page.fullInfo())
  .then(info => info.general)
  .then((res)=>{
    console.log(res)
    setAuthorBirthPlace(res.birthPlace)
    setTimelineLinks(res.schoolTradition)
    setSubjectLinks(res.schoolTradition)
    if(res.schoolTradition.length>1){
    setAuthorBgKeywords([res.region,...res.schoolTradition])}else{
        setAuthorBgKeywords([res.region,res.schoolTradition])
    }
    console.log(res.mainInterests)
    setAuthorLifeWorkKeywords([res.mainInterests])
    setContentKeywords([...res.mainInterests,...res.notableIdeas])//choose from main interests,notable ideas

    console.log(authorLifeWorkKeywords)

    setAuthorBirthDate(res.birthDate.date)
    setAuthorDeathDate(res.deathDate.date)
    setAuthorLifespan(res.deathDate.age)

//filter out hlist

  setTimelineLinks(timelineLinks.filter((x)=>/hlist/.test(x)===false))
  setSubjectLinks(subjectLinks.filter((x)=>/hlist/.test(x)===false))
    setContentKeywords(contentKeywords.filter((x)=>/hlist/.test(x)===false))
    setAuthorLifeWorkKeywords(authorLifeWorkKeywords.filter((x)=>/hlist/.test(x)===false))
    if(/hlist/.test(res.influences)){return}else if(res.influences.length>1){ setAuthorInfluences([...res.influences])}else if(res.influences.length===1){ setAuthorInfluences([res.influences])}
    if(/hlist/.test(res.influenced)){return}else if(res.influenced.length>1){ setAuthorInfluenced([...res.influenced])}else if(res.influenced.length===1){setAuthorInfluenced([res.influenced])}

  })
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
    <div className="form-section">

    <label htmlFor="authorAgeAtPublication">Author Age at Publication</label>
    <input className="form-control" type="text" id="authorAgeAtPublication" value={authorAgeAtPublication}
    onChange={(e)=>setAuthorAgeAtPublication(e.target.value)} placeholder={`publication - ${authorBirthDate}`}/>

        <label htmlFor="authorbirthPlace">Author's birth place:</label>
        <input className="form-control" type="text" id="authorBirthPlace" value={authorBirthPlace}
         onChange={(e)=>setAuthorBirthPlace(e.target.value)} placeholder="city, country/region"/>

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

    <h4>autofill(read-only)</h4>
    <div className="form-section readOnly">

        <label htmlFor={`${author}url`}>Wikipedia Link for {author}:</label>
        <input className="form-control" type="text" value={authorWikiUrl} placeholder="wikipedia link" readOnly="readOnly" />

    <label htmlFor="authorBirthDate">Author Birth Date</label>
    <input className="form-control" type="text" id="authorBirthDate" value={authorBirthDate}
    onChange={(e)=>setAuthorBirthDate(e.target.value)} placeholder="Author Birth Date" readOnly="readOnly"/>

    <label htmlFor="authorDeathDate">Author Death Date</label>
    <input className="form-control" type="text" id="authorDeathDate" value={authorDeathDate}
    onChange={(e)=>setAuthorDeathDate(e.target.value)} placeholder="Author Death Date" readOnly="readOnly"/>

    <label htmlFor="authorLifespan">Author Lifespan</label>
    <input className="form-control" type="text" id="authorLifespan" value={authorLifespan}
    onChange={(e)=>setAuthorLifespan(e.target.value)} placeholder="Author Lifespan" readOnly="readOnly"/>

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
