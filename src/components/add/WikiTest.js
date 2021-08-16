import {parseInfo} from 'infobox-parser'
import wiki from 'wikijs'
import {useEffect, useState} from 'react'
const WikiTest = ({author, setWikiUrl}) => {


const [authorWikiTitle, setAuthorWikiTitle] = useState("")
const [authorWikiExtract, setAuthorWikiExtract] = useState("")
const [authorWikiCategory, setAuthorWikiCategory] = useState("")
const [authorWikiLanglinks, setAuthorWikiLanglinks] = useState("")
const [authorWikiExtlinks, setAuthorWikiExtlinks] = useState("")
const [authorWikiImage, setAuthorWikiImage] = useState("")
const [authorWikiRelated, setAuthorWikiRelated] = useState("")

useEffect(()=>{
    for(let person of author){fetchAuthorWikiData(person)}
    for(let person of author){fetchAuthorImage(person)}
    for(let person of author){fetchAuthorWikiUrl(person)}


}, [author])

const beauvoirQuery = [
  {
    "title": "Simone de Beauvoir",
    "extract": "Simone Lucie Ernestine Marie Bertrand de Beauvoir (UK: , US: ; French: [simɔn də bovwaʁ] (listen); 9 January 1908 – 14 April 1986)"}]
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
wiki()
	.page(author)
	.then(page =>
		page
			.chain()
    .categories()
    .extlinks()
    .langlinks()
    .links()
    .summary()
    .request()


	)
  .then((res)=>{
    console.log(res)
    setAuthorWikiTitle(res.title)
    setAuthorWikiExtract(res.extract)
    setAuthorWikiCategory(res.categories)
    setAuthorWikiLanglinks(res.langlinks)
    setAuthorWikiExtlinks(res.extlinks)
    setAuthorWikiRelated(res.links)

  })
}

const fetchAuthorImage = (author) => {
wiki().page(author).then(page => page.mainImage()).then((res)=>setAuthorWikiImage(res)
)}
const fetchAuthorWikiUrl = (author) => {
wiki().page(author).then(page => page.url()).then((res)=>setWikiUrl(res)
)}


//if no page found, display "no wikipedia page found"
  return (
    <div><h4>{authorWikiTitle}</h4>
    <div id="authorWikiImageHolder"><img src={authorWikiImage}></img></div>
    <p>{authorWikiExtract}</p>
    </div>
  )
}

export default WikiTest
