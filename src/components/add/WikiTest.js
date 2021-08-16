import {parseInfo} from 'infobox-parser'
import wiki from 'wikijs'
import {useEffect, useState} from 'react'
const WikiTest = ({author, languageSetting="en", publicationDate}) => {

const [authorWikiTitle, setAuthorWikiTitle] = useState("")

//manual fill
const [authorBirthPlace, setAuthorBirthPlace] = useState("")
const [timelineLinks, setTimelineLinks] = useState("")
const [subjectLinks, setSubjectLinks] = useState("")//use what?
const [contentKeywords, setContentKeywords] = useState("")//choose from main interests,notable ideas


const [authorBirthDate, setAuthorBirthDate] = useState("")
const [authorDeathDate, setAuthorDeathDate] = useState("")
const [authorLifespan, setAuthorLifespan] = useState("")
const [authorAgeAtPublication, setAuthorAgeAtPublication] = useState("") //
const [authorBgKeywords, setAuthorBgKeywords] = useState("") //region,school
const [authorLifeWorkKeywords, authorLifeWork] = useState("") //main interests,notable ideas

const [authorWikiExtract, setAuthorWikiExtract] = useState("")
const [authorWikiCategory, setAuthorWikiCategory] = useState("")
const [authorWikiLanglinks, setAuthorWikiLanglinks] = useState("")
const [authorWikiImage, setAuthorWikiImage] = useState("")
const [authorWikiUrl, setAuthorWikiUrl] = useState("")

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

  })

  wiki({ apiUrl: `https://${languageSetting}.wikipedia.org/w/api.php` })
  .page(author)
  .then(page => page.fullInfo())
  .then(info => info.general).then((x)=>console.log(x));
  }


const fetchAuthorImage = (author) => {
wiki().page(author).then(page => page.mainImage()).then((res)=>setAuthorWikiImage(res)
)}
const fetchAuthorWikiUrl = (author) => {
wiki().page(author).then(page => page.url()).then((res)=>setAuthorWikiUrl(res)
)}


//if no page found, display "no wikipedia page found"
  return (
    <div>
    <label htmlFor={`${author}url`}>Wikipedia Link for {author}:</label>
    <input className="form-control" type="text" value={authorWikiUrl} placeholder="wikipedia link" readOnly="readOnly" />
    <h4>{authorWikiTitle}</h4>
    <div id="authorWikiImageHolder"><img src={authorWikiImage}></img></div>
    <p>{authorWikiExtract}</p>
    </div>
  )
}

export default WikiTest
