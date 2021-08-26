import {parseInfo} from 'infobox-parser'
import wiki from 'wikijs'
import {useEffect, useState} from 'react'
import Axios from 'axios'
import MultiSelect from "react-multi-select-component";


const NewAuthorWiki = ({author, toAdd, stripLabels, previewLanguage, subjectLinks, formToggleOn, setSubjectLinks}) => {

  const [preventResubmitAuthor, setPreventResubmitAuthor] = useState(false)

const [authorWikiTitle, setAuthorWikiTitle] = useState("")
const [previewAuthorWiki, setpreviewAuthorWiki] = useState(false)

const [timelineLinks, setTimelineLinks] = useState([])
const [contentKeywords, setContentKeywords] = useState([])//choose from main interests,notable ideas
const [authorBgKeywords, setAuthorBgKeywords] = useState([]) //region,school
const [authorLifeWorkKeywords, setAuthorLifeWorkKeywords] = useState([])
const [authorWikiExtract, setAuthorWikiExtract] = useState("")
const [authorWikiCategory, setAuthorWikiCategory] = useState([])
const [translatingFrom, setTranslatingFrom] = useState([])
const [translatingInto, setTranslatingInto] = useState([])
const [allAuthors, setAllAuthors] = useState([])
const [authorInfluenced, setAuthorInfluenced]=useState([])
const [authorInfluences, setAuthorInfluences]=useState([])
const [newAuthorInfluenced, setNewAuthorInfluenced]=useState([])
const [newAuthorInfluences, setNewAuthorInfluences]=useState([])
//get data
useEffect(()=>{
  fetchAuthorWikiData(author)
}, [author])

useEffect(()=>{
  setTranslatingFrom(previewLanguage)
}, [])

useEffect(()=>{
setPreventResubmitAuthor(false)
}, [authorWikiTitle,toAdd])

  function postAuthor(){
    Axios.post("http://localhost:3001/authortranslation",{
      authorId:authorId,
      translatingFrom:translatingFrom,
      translatingInto:translatingInto,
      authorWikiTitle:authorWikiTitle,
      authorWikiExtract:authorWikiExtract,
      translationLanguage:translationLanguage,
      authorBgKeywords:authorBgKeywords,
      authorLifeWorkKeywords:authorLifeWorkKeywords,
      authorWikiCategory:authorWikiCategory,
      timelineLinks:timelineLinks,
    })
    console.log("author translation posted")
}

const validateAuthor = (e)=>{
  e.preventDefault();

  if(!authorWikiTitle ||!translationLanguage){
    alert("please fill in missing data");
    return;
  }

  if(preventResubmitAuthor==false){
      postAuthor();
      setPreventResubmitAuthor(true)
    }else{
      return;
    }
}
const fetchAuthorWikiData = (author) => {
  const code = translationLanguage.slice(0, 2);
  console.log(code)
  wiki({
      apiUrl: `https://${code}.wikipedia.org/w/api.php`
    })
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
    .then((res) => {
      console.log(res)
      setAuthorWikiTitle(res.title)
      setAuthorWikiExtract(res.extract)
    })

  try {
    wiki({
        apiUrl: `https://${code}.wikipedia.org/w/api.php`
      })
      .page(author)
      .then(page => page.fullInfo())
      .then(info => info.general)
      .then((res) => {
    const steamrollAndFilter = (x, setX, dependencies) => {
      const temp = dependencies
      if (Array.isArray(temp)) {
        const flatTemp = temp.flat()
        const filteredFlatTemp = flatTemp.filter((y) => {
          return /\{*hlist/.test(y) === false
        })
        setX(filteredFlatTemp)

      } else {
        if (/\{*hlist/.test(temp) === false)
          setX(temp)
      }
    }
    steamrollAndFilter(authorBgKeywords, setAuthorBgKeywords, [res.region, res.schoolTradition])
    steamrollAndFilter(authorLifeWorkKeywords, setAuthorLifeWorkKeywords, [res.mainInterests, res.notableIdeas])
    steamrollAndFilter(contentKeywords, setContentKeywords, [res.mainInterests, res.notableIdeas])
    steamrollAndFilter(timelineLinks, setTimelineLinks, res.schoolTradition)
    steamrollAndFilter(subjectLinks, setSubjectLinks, res.schoolTradition)
  })
  } catch (err) {
    alert('Error has occured: ' + err.stack)
  }
}
const togglePreviewAuthorWiki= (e)=>{
  e.preventDefault()
  setpreviewAuthorWiki(!previewAuthorWiki)}


  return (

    <form onSubmit={(e)=>{validateAuthor(e)}} className="SubmissionForm" id={`${author}form`} style={{display:formToggleOn?"block":"none"}}>
    <div style={{display:"flex"}}>
    <label htmlFor="selectLanguageVersions">Select Language Versions:</label>
<MultiSelect
id="selectLanguageVersions"
    options={selectLanguageVersions}
    value={languageVersions}
    onChange={setLanguageVersions}
    hasSelectAll={false}
    />
    <label htmlFor="selectLanguageVersions">Select Language Versions:</label>
<MultiSelect
id="selectLanguageVersions"
    options={selectLanguageVersions}
    value={languageVersions}
    onChange={setLanguageVersions}
    hasSelectAll={false}
    />
    {allAuthors && allAuthors.map((author)=><div onClick={()=>{setAuthorWikiTitle(author[0]);  setAuthorInfluenced(author[1]);setAuthorInfluences(author[2]);setShelfId(author[3])}} key={author[3]}
    style={{backgroundColor:author[3]==authorId?"var(--shelfpanellistpressed)":"var(--shelfpanellist)",
    border:author[3]==authorId?"1px solid var(--shelfpanellistpressedborder)":"1px solid var(--shelfpanellistborder)",
    transform:author[3]==authorId?"translateY(0.3rem)":"translateY(0px)",
    boxShadow:author[3]==authorId?"none":"var(--heavyshadow)"}}>
      <div className="subtitle1">
    {author[0]}
      </div>
    </div>)}


      <h5>{author} information (partial-fill; corrections needed)</h5>
    <input type="submit" className="btn" value={previewAuthorWiki?"Back to Form":"Preview Author Details"} onClick={togglePreviewAuthorWiki}/>
    </div>
    {previewAuthorWiki && (<div><h4>{authorWikiTitle}</h4>
      <div id="authorWikiImageHolder"><img src={authorWikiImage}></img></div>
      <p>authorWikiExtract</p></div>)}

    <div className="form-section" style={{display:previewAuthorWiki?"none":"grid"}}>
    <label htmlFor='authorWikiTitle'>Author name:</label>
    <input className="form-control" type="text"  onChange={(e)=>setAuthorWikiTitle(e.target.value)} value={authorWikiTitle} placeholder="author name"/>
            <label htmlFor="timelineLinks">Wikipedia timeline pages:</label>
        <textarea className="form-control" rows={4} form={`${author}form`}  id="timelineLinks" value={timelineLinks}
         onChange={(e)=>setTimelineLinks([e.target.value])} placeholder="separate by comma"/>
         </div>
    <div className="form-section readOnly" style={{display:previewAuthorWiki?"none":"grid"}}>


    <label htmlFor="authorBgKeywords">Author Background Keywords</label>
    <textarea className="form-control" rows={4}  form={`${author}form`}    id="authorBgKeywords" value={authorBgKeywords}
    onChange={(e)=>setAuthorBgKeywords(e.target.value)} placeholder="Author Background Keywords" readOnly="readOnly"/>

    <label htmlFor="authorLifeWorkKeywords">Author Life Work Keywords</label>
    <textarea className="form-control" rows={4}  form={`${author}form`}    id="authorLifeWorkKeywords" value={authorLifeWorkKeywords}
    onChange={(e)=>setAuthorLifeWorkKeywords(e.target.value)} placeholder="Author Life Work Keywords" readOnly="readOnly"/>

    <label htmlFor="authorWikiExtract">Summary</label>
    <textarea className="form-control" rows={4} form={`${author}form`}   id="authorWikiExtract" value={authorWikiExtract}
    onChange={(e)=>setAuthorWikiExtract(e.target.value)} placeholder="extract from wikipedia page" readOnly="readOnly"/>

    <label htmlFor="authorWikiCategory">Author Categories</label>
    <textarea className="form-control" rows={4} form={`${author}form`}   id="authorWikiCategory" value={authorWikiCategory}
    onChange={(e)=>setAuthorWikiCategory(e.target.value)} placeholder="author categories" readOnly="readOnly"/>

    <input  className="btn" type="submit" style={{backgroundColor:preventResubmitAuthor?"var(--inactive)":"var(--lightactionbtn)", color:preventResubmitAuthor?"var(--shelfpanellistborder)":"var(--lightactionbtntext)",boxShadow:preventResubmitAuthor?"none":"var(--heavyshadow)"}} onClick={(e)=>{validateAuthor(e)}} value="Submit this Author"/>

    </div>
    </form>


  )
}

export default NewAuthorWiki
