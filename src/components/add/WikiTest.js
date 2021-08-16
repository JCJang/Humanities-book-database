import {parseInfo} from 'infobox-parser'
import wiki from 'wikijs'
import {useEffect, useState} from 'react'
const WikiTest = ({author}) => {

const [authorWikiTitle, setAuthorWikiTitle] = useState("")
const [authorWikiExtract, setAuthorWikiExtract] = useState("")
const [authorWikiCategory, setAuthorWikiCategory] = useState("")
const [authorWikiLanglinks, setAuthorWikiLanglinks] = useState("")
const [authorWikiExtlinks, setAuthorWikiExtlinks] = useState("")
const [authorWikiImage, setAuthorWikiImage] = useState("")
const [authorWikiRelated, setAuthorWikiRelated] = useState("")
const [authorWikiUrl, setAuthorWikiUrl] = useState("")


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
