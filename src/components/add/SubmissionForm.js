import {useEffect, useState} from 'react';
import NewAuthorWiki from './NewAuthorWiki'
import Axios from 'axios'
import MultiSelect from "react-multi-select-component";


const SubmissionForm = ({toAdd, stripLabels,onSearch, languageSetting, formToggleOn }) => {

  const [shelfTitle, setShelfTitle] = useState('')
  const [shelfDescription, setShelfDescription] = useState('')
  const [id, setId] =  useState('')
  const [title, setTitle] =  useState('')
  const [author, setAuthor] =  useState([])
  const [isbn, setIsbn] = useState('')
  const [isbn10, setIsbn10] =  useState('')
  const [isbn13, setIsbn13] =  useState('')
  const [bookHighlights, setBookHighlights] = useState('')
  const [languageVersions, setLanguageVersions] = useState([])
  const [previewLanguage, setPreviewLanguage] = useState([])

//restricts selection to one
useEffect(() => {
    if (previewLanguage.length > 1) {
      setPreviewLanguage([previewLanguage[previewLanguage.length - 1]])
    }
}, [previewLanguage])


  const [subjectLinks, setSubjectLinks] = useState([])//use what?
  const [shelfLanguage, setShelfLanguage] = useState([])//use what?

  //restricts selection to one
  useEffect(() => {
      if (shelfLanguage.length > 1) {
        setShelfLanguage([shelfLanguage[shelfLanguage.length - 1]])
      }
  }, [shelfLanguage])


  //manual fill
  const [earliestPublicationYear, setEarliestPublicationYear] = useState(0)
  const [bookLength, setBookLength] = useState("")

  const[newShelf,setNewShelf] = useState(true)
  const [allShelves, setAllShelves]=useState(false)
  const [shelfId, setShelfId]=useState('')
  const [preventResubmitShelf, setPreventResubmitShelf] = useState(false)

    const selectSubjects = [
      { label: "Ancient and Modern Languages", value: "0 Ancient and Modern Languages"},
      { label: "Literature", value: "1 Literature" },
      { label: "Philosophy", value: "2 Philosophy"},
      { label: "History and Archaeology", value: "3 History and Archaeology" },
      { label: "Anthropology and cultural sciences", value: "4 Anthropology" },
      { label: "Human Geography", value: "5 Human Geography" },
      { label: "Law", value: "6 Law" },
      { label: "Politics", value: "7 Politics" },
      { label: "Religion", value: "8 Religion" },
      { label: "Art", value: "9 Art" },
      { label: "Gender Issues", value: "10 Gender Issues" },
    ];
    const selectLanguageVersions = [
      {
          label: "English",
          value: "en"
      },
      {
          label: "Chinese (Simplified)",
          value: "zh-cn"
      },
      {
          label: "Chinese (Traditional)",
          value: "zh-tw"
      },
      {
          label: "Hindi",
          value: "hi"
      },
      {
          label: "Spanish; Castilian",
          value: "es"
      },
      {
          label: "Arabic",
          value: "ar"
      },
      {
          label: "Urdu",
          value: "ur"
      },
      {
          label: "Bengali",
          value: "bn"
      },
      {
          label: "French",
          value: "fr"
      },
      {
          label: "Russian",
          value: "ru"
      },
      {
          label: "Portuguese",
          value: "pt"
      },
      {
          label: "Indonesian",
          value: "id"
      },
      {
          label: "German",
          value: "de"
      },

      {
          label: "Japanese",
          value: "ja"
      },
    {  label: "Afar",   value: "aa"  },
    {
        label: "Abkhazian",
        value: "ab"
    },
    {
        label: "Avestan",
        value: "ae"
    },
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Akan",
        value: "ak"
    },
    {
        label: "Amharic",
        value: "am"
    },
    {
        label: "Aragonese",
        value: "an"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Assamese",
        value: "as"
    },
    {
        label: "Avaric",
        value: "av"
    },
    {
        label: "Aymara",
        value: "ay"
    },
    {
        label: "Azerbaijani",
        value: "az"
    },
    {
        label: "Bashkir",
        value: "ba"
    },
    {
        label: "Belarusian",
        value: "be"
    },
    {
        label: "Bulgarian",
        value: "bg"
    },
    {
        label: "Bihari languages",
        value: "bh"
    },
    {
        label: "Bislama",
        value: "bi"
    },
    {
        label: "Bambara",
        value: "bm"
    },
    {
        label: "Bengali",
        value: "bn"
    },
    {
        label: "Tibetan",
        value: "bo"
    },
    {
        label: "Breton",
        value: "br"
    },
    {
        label: "Bosnian",
        value: "bs"
    },
    {
        label: "Catalan; Valencian",
        value: "ca"
    },
    {
        label: "Chechen",
        value: "ce"
    },
    {
        label: "Chamorro",
        value: "ch"
    },
    {
        label: "Corsican",
        value: "co"
    },
    {
        label: "Cree",
        value: "cr"
    },
    {
        label: "Czech",
        value: "cs"
    },
    {
        label: "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
        value: "cu"
    },
    {
        label: "Chuvash",
        value: "cv"
    },
    {
        label: "Welsh",
        value: "cy"
    },
    {
        label: "Danish",
        value: "da"
    },
    {
        label: "German",
        value: "de"
    },
    {
        label: "Divehi; Dhivehi; Maldivian",
        value: "dv"
    },
    {
        label: "Dzongkha",
        value: "dz"
    },
    {
        label: "Ewe",
        value: "ee"
    },
    {
        label: "Greek, Modern (1453-)",
        value: "el"
    },
    {
        label: "English",
        value: "en"
    },
    {
        label: "Esperanto",
        value: "eo"
    },
    {
        label: "Spanish; Castilian",
        value: "es"
    },
    {
        label: "Estonian",
        value: "et"
    },
    {
        label: "Basque",
        value: "eu"
    },
    {
        label: "Persian",
        value: "fa"
    },
    {
        label: "Fulah",
        value: "ff"
    },
    {
        label: "Finnish",
        value: "fi"
    },
    {
        label: "Fijian",
        value: "fj"
    },
    {
        label: "Faroese",
        value: "fo"
    },
    {
        label: "French",
        value: "fr"
    },
    {
        label: "Western Frisian",
        value: "fy"
    },
    {
        label: "Irish",
        value: "ga"
    },
    {
        label: "Gaelic; Scottish Gaelic",
        value: "gd"
    },
    {
        label: "Galician",
        value: "gl"
    },
    {
        label: "Guarani",
        value: "gn"
    },
    {
        label: "Gujarati",
        value: "gu"
    },
    {
        label: "Manx",
        value: "gv"
    },
    {
        label: "Hausa",
        value: "ha"
    },
    {
        label: "Hebrew",
        value: "he"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Hiri Motu",
        value: "ho"
    },
    {
        label: "Croatian",
        value: "hr"
    },
    {
        label: "Haitian; Haitian Creole",
        value: "ht"
    },
    {
        label: "Hungarian",
        value: "hu"
    },
    {
        label: "Armenian",
        value: "hy"
    },
    {
        label: "Herero",
        value: "hz"
    },
    {
        label: "Interlingua (International Auxiliary Language Association)",
        value: "ia"
    },
    {
        label: "Indonesian",
        value: "id"
    },
    {
        label: "Interlingue; Occidental",
        value: "ie"
    },
    {
        label: "Igbo",
        value: "ig"
    },
    {
        label: "Sichuan Yi; Nuosu",
        value: "ii"
    },
    {
        label: "Inupiaq",
        value: "ik"
    },
    {
        label: "Ido",
        value: "io"
    },
    {
        label: "Icelandic",
        value: "is"
    },
    {
        label: "Italian",
        value: "it"
    },
    {
        label: "Inuktitut",
        value: "iu"
    },
    {
        label: "Japanese",
        value: "ja"
    },
    {
        label: "Javanese",
        value: "jv"
    },
    {
        label: "Georgian",
        value: "ka"
    },
    {
        label: "Kongo",
        value: "kg"
    },
    {
        label: "Kikuyu; Gikuyu",
        value: "ki"
    },
    {
        label: "Kuanyama; Kwanyama",
        value: "kj"
    },
    {
        label: "Kazakh",
        value: "kk"
    },
    {
        label: "Kalaallisut; Greenlandic",
        value: "kl"
    },
    {
        label: "Central Khmer",
        value: "km"
    },
    {
        label: "Kannada",
        value: "kn"
    },
    {
        label: "Korean",
        value: "ko"
    },
    {
        label: "Kanuri",
        value: "kr"
    },
    {
        label: "Kashmiri",
        value: "ks"
    },
    {
        label: "Kurdish",
        value: "ku"
    },
    {
        label: "Komi",
        value: "kv"
    },
    {
        label: "Cornish",
        value: "kw"
    },
    {
        label: "Kirghiz; Kyrgyz",
        value: "ky"
    },
    {
        label: "Latin",
        value: "la"
    },
    {
        label: "Luxembourgish; Letzeburgesch",
        value: "lb"
    },
    {
        label: "Ganda",
        value: "lg"
    },
    {
        label: "Limburgan; Limburger; Limburgish",
        value: "li"
    },
    {
        label: "Lingala",
        value: "ln"
    },
    {
        label: "Lao",
        value: "lo"
    },
    {
        label: "Lithuanian",
        value: "lt"
    },
    {
        label: "Luba-Katanga",
        value: "lu"
    },
    {
        label: "Latvian",
        value: "lv"
    },
    {
        label: "Malagasy",
        value: "mg"
    },
    {
        label: "Marshallese",
        value: "mh"
    },
    {
        label: "Maori",
        value: "mi"
    },
    {
        label: "Macedonian",
        value: "mk"
    },
    {
        label: "Malayalam",
        value: "ml"
    },
    {
        label: "Mongolian",
        value: "mn"
    },
    {
        label: "Marathi",
        value: "mr"
    },
    {
        label: "Malay",
        value: "ms"
    },
    {
        label: "Maltese",
        value: "mt"
    },
    {
        label: "Burmese",
        value: "my"
    },
    {
        label: "Nauru",
        value: "na"
    },
    {
        label: "Bokmål, Norwegian; Norwegian Bokmål",
        value: "nb"
    },
    {
        label: "Ndebele, North; North Ndebele",
        value: "nd"
    },
    {
        label: "Nepali",
        value: "ne"
    },
    {
        label: "Ndonga",
        value: "ng"
    },
    {
        label: "Dutch; Flemish",
        value: "nl"
    },
    {
        label: "Norwegian Nynorsk; Nynorsk, Norwegian",
        value: "nn"
    },
    {
        label: "Norwegian",
        value: "no"
    },
    {
        label: "Ndebele, South; South Ndebele",
        value: "nr"
    },
    {
        label: "Navajo; Navaho",
        value: "nv"
    },
    {
        label: "Chichewa; Chewa; Nyanja",
        value: "ny"
    },
    {
        label: "Occitan (post 1500)",
        value: "oc"
    },
    {
        label: "Ojibwa",
        value: "oj"
    },
    {
        label: "Oromo",
        value: "om"
    },
    {
        label: "Oriya",
        value: "or"
    },
    {
        label: "Ossetian; Ossetic",
        value: "os"
    },
    {
        label: "Panjabi; Punjabi",
        value: "pa"
    },
    {
        label: "Pali",
        value: "pi"
    },
    {
        label: "Polish",
        value: "pl"
    },
    {
        label: "Pushto; Pashto",
        value: "ps"
    },
    {
        label: "Portuguese",
        value: "pt"
    },
    {
        label: "Quechua",
        value: "qu"
    },
    {
        label: "Romansh",
        value: "rm"
    },
    {
        label: "Rundi",
        value: "rn"
    },
    {
        label: "Romanian; Moldavian; Moldovan",
        value: "ro"
    },
    {
        label: "Russian",
        value: "ru"
    },
    {
        label: "Kinyarwanda",
        value: "rw"
    },
    {
        label: "Sanskrit",
        value: "sa"
    },
    {
        label: "Sardinian",
        value: "sc"
    },
    {
        label: "Sindhi",
        value: "sd"
    },
    {
        label: "Northern Sami",
        value: "se"
    },
    {
        label: "Sango",
        value: "sg"
    },
    {
        label: "Sinhala; Sinhalese",
        value: "si"
    },
    {
        label: "Slovak",
        value: "sk"
    },
    {
        label: "Slovenian",
        value: "sl"
    },
    {
        label: "Samoan",
        value: "sm"
    },
    {
        label: "Shona",
        value: "sn"
    },
    {
        label: "Somali",
        value: "so"
    },
    {
        label: "Albanian",
        value: "sq"
    },
    {
        label: "Serbian",
        value: "sr"
    },
    {
        label: "Swati",
        value: "ss"
    },
    {
        label: "Sotho, Southern",
        value: "st"
    },
    {
        label: "Sundanese",
        value: "su"
    },
    {
        label: "Swedish",
        value: "sv"
    },
    {
        label: "Swahili",
        value: "sw"
    },
    {
        label: "Tamil",
        value: "ta"
    },
    {
        label: "Telugu",
        value: "te"
    },
    {
        label: "Tajik",
        value: "tg"
    },
    {
        label: "Thai",
        value: "th"
    },
    {
        label: "Tigrinya",
        value: "ti"
    },
    {
        label: "Turkmen",
        value: "tk"
    },
    {
        label: "Tagalog",
        value: "tl"
    },
    {
        label: "Tswana",
        value: "tn"
    },
    {
        label: "Tonga (Tonga Islands)",
        value: "to"
    },
    {
        label: "Turkish",
        value: "tr"
    },
    {
        label: "Tsonga",
        value: "ts"
    },
    {
        label: "Tatar",
        value: "tt"
    },
    {
        label: "Twi",
        value: "tw"
    },
    {
        label: "Tahitian",
        value: "ty"
    },
    {
        label: "Uighur; Uyghur",
        value: "ug"
    },
    {
        label: "Ukrainian",
        value: "uk"
    },
    {
        label: "Urdu",
        value: "ur"
    },
    {
        label: "Uzbek",
        value: "uz"
    },
    {
        label: "Venda",
        value: "ve"
    },
    {
        label: "Vietnamese",
        value: "vi"
    },
    {
        label: "Volapük",
        value: "vo"
    },
    {
        label: "Walloon",
        value: "wa"
    },
    {
        label: "Wolof",
        value: "wo"
    },
    {
        label: "Xhosa",
        value: "xh"
    },
    {
        label: "Yiddish",
        value: "yi"
    },
    {
        label: "Yoruba",
        value: "yo"
    },
    {
        label: "Zhuang; Chuang",
        value: "za"
    },
    {
        label: "Chinese (Simplified)",
        value: "zh-cn"
    },
    {
        label: "Chinese (Traditional)",
        value: "zh-tw"
    },
    {
        label: "Zulu",
        value: "zu"
    },
];
    const [subjects, setSubjects] = useState([]);


  const validateShelf = (e)=>{
    e.preventDefault();
    if(!title||!author||!subjects){
      alert("please fill in missing data");
      return;
    }
    if(preventResubmitShelf==false){
    newShelf?postShelf():addToShelf()
    setPreventResubmitShelf(true)
  }else{
    return;
  }
  }

  useEffect(()=>{
  setPreventResubmitShelf(false)
}, [shelfTitle,toAdd])


//case insensitively match shelves to typed shelves.
  useEffect(()=>{
    if(allShelves){
    allShelves.forEach((x)=>{if(x[0].toLowerCase()===shelfTitle.toLowerCase()){
      setNewShelf(false); setShelfId(x[3])}})
    }
}, [shelfTitle])


//initially autoset form languages based on language settings
  useEffect(()=>{
    const addLabel = selectLanguageVersions.filter((x)=>{return x.value===languageSetting})
 setPreviewLanguage([addLabel[0]])
setShelfLanguage([addLabel[0]])
}, [])


//set book data with toAdd
  useEffect(()=>{
    if(toAdd===undefined){
      return}
    if(toAdd.volumeInfo!==undefined){
    setTitle(toAdd.volumeInfo.title)
    if(toAdd.volumeInfo.authors){
    setAuthor(toAdd.volumeInfo.authors.map(a=>a))}
    setId(toAdd.id)
    const getIsbn=(isbn)=>{
      if(toAdd.volumeInfo.hasOwnProperty("industryIdentifiers")){
      const res = toAdd.volumeInfo.industryIdentifiers.filter(a=>a.type===isbn)
      if(res[0]!==undefined){return res[0].identifier}else{return ""}}else{return ""}
    }
    setIsbn10(getIsbn("ISBN_10"))
    setIsbn13(getIsbn("ISBN_13"))
    setBookLength(toAdd.volumeInfo.pageCount)

  }},[toAdd])

//get book data
//shelfLanguage
  useEffect(()=>{
    Axios.post("http://localhost:3001/allshelves",{
      shelfLanguage:shelfLanguage[0]?stripLabels(shelfLanguage)[0]:languageSetting
    }).then((res)=>{
      setAllShelves(res.data.map((x)=>{ return [x.editions[0].details.shelfTitle, x.editions[0].details.shelfDescription,  x.shelfSubjects, x._id]}))
    }).then( console.log("reloaded shelves"))
  },[toAdd,preventResubmitShelf])



  function postShelf(){
    Axios.post("http://localhost:3001/shelf",{
      shelfSubjects:stripLabels(subjects),
      shelfTitle:shelfTitle,
      shelfDescription:shelfDescription,
      googleId:id,
      bookTitle:title,
      bookAuthor:author,
      isbn10:isbn10,
      isbn13:isbn13,
      bookHighlights:bookHighlights,
      earliestPublicationYear:earliestPublicationYear,
      bookLength:bookLength,
      languageVersions:stripLabels(languageVersions),
      shelfLanguage:shelfLanguage,
      previewLanguage:stripLabels(previewLanguage),
      previewStatus:toAdd.accessInfo.viewability,
      subjectLinks:subjectLinks
    })
    console.log("posted new shelf");

  }


  function addToShelf(){
    Axios.put("http://localhost:3001/addbooktoshelf",{
      language:stripLabels(previewLanguage),
      googleId:id,
      bookTitle:title,
      bookAuthor:author,
      previewStatus:toAdd.accessInfo.viewability,
      isbn10:isbn10,
      isbn13:isbn13,
      bookHighlights:bookHighlights,
      bookLength:bookLength,
    })
    console.log("added book to shelf");
  }

  return (
    <form onSubmit={(e)=>validateShelf(e)} className="SubmissionForm" id="shelfform" style={{display:formToggleOn?"block":"none"}}>
      <h5>New Shelf and/or Book</h5>
      {allShelves && allShelves.map((shelf)=><div onClick={()=>{setShelfTitle(shelf[0]); setNewShelf(false); setShelfDescription(shelf[1]);setShelfId(shelf[3])}} key={shelf[3]}
      style={{backgroundColor:shelf[3]==shelfId?"var(--shelfpanellistpressed)":"var(--shelfpanellist)",
      border:shelf[3]==shelfId?"1px solid var(--shelfpanellistpressedborder)":"1px solid var(--shelfpanellistborder)",
      transform:shelf[3]==shelfId?"translateY(0.3rem)":"translateY(0px)",
      boxShadow:shelf[3]==shelfId?"none":"var(--heavyshadow)"}}>
        <div className="subtitle1">
      {shelf[0]}
        </div>
      </div>)}
      <input type="checkbox" style={{alignSelf:"center", marginRight:"1rem",width:"1.5rem",height:"1.5rem"}} id="previewFilter" onClick={()=>setNewShelf(!newShelf)} value="newShelf" checked={newShelf} disabled/>
      <label htmlFor="newShelf" className="subtitle1">Create a new shelf</label>
      <div className="form-section">

      <label htmlFor="shelfLanguage">Shelf Language:</label>
    <MultiSelect
    id="shelfLanguage"
      options={selectLanguageVersions}
      value={shelfLanguage}
      onChange={setShelfLanguage}
      hasSelectAll={false}
      />
      <label htmlFor="shelfTitle">Shelf Title</label>
      <input className="form-control" type="text" id="shelfTitle" value={shelfTitle}
       onChange={(e)=>{setShelfTitle(e.target.value); setNewShelf(true)}} placeholder="question form"/>
       <label htmlFor="shelfDescription">Shelf Description:</label>
       <input className="form-control" type="text" id="shelfDescription" value={shelfDescription}
        onChange={(e)=>setShelfDescription(e.target.value)} placeholder="one or two short paragraphs"/>
        <label htmlFor="selectSubjects">Select Covered Subjects:</label>
  <MultiSelect
  id="selectSubjects"
        options={selectSubjects}
        value={subjects}
        onChange={setSubjects}
        hasSelectAll={false}
        />
        </div>
      <h5>Book information (partial-fill; corrections needed)</h5>

    <div className="form-section">
     <label htmlFor="previewLanguage">Preview language:</label>
<MultiSelect
id="previewLanguage"
     options={selectLanguageVersions}
     value={previewLanguage}
     onChange={setPreviewLanguage}
     hasSelectAll={false}
     />
      <label htmlFor="title">Title:</label>
      <input className="form-control" type="text" id="title" value={title}
       onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
       <label htmlFor="author">Author(s):</label>
       <textarea className="form-control"  id="author" form="SubmissionForm" rows={4} value={author}
        onChange={(e)=>setAuthor(e.target.value)} placeholder="book author(s). Should match wikipedia page title. Separate with commas"/>
        <label htmlFor="earliestPublicationYear">Publication Date</label>
        <input className="form-control" type="number" id="earliestPublicationYear" value={earliestPublicationYear}
         onChange={(e)=>setEarliestPublicationYear(e.target.value)} placeholder="earliest publication year"/>

    </div>
           <div className="form-section readOnly">

               <label htmlFor="isbn10">Isbn-10:</label>
               <input className="form-control" type="text" id="isbn10" value={isbn10}
                onChange={(e)=>setIsbn10(e.target.value)} placeholder="isbn-10" readOnly="readOnly"/>
                <label htmlFor="isbn13">Isbn-13:</label>
                <input className="form-control" type="text" id="isbn13" value={isbn13}
                 onChange={(e)=>setIsbn13(e.target.value)} placeholder="isbn-13" readOnly="readOnly"/>
                  <label htmlFor="bookLength">Length (pages)</label>
                  <input className="form-control" type="text" id="bookLength" value={bookLength}
                   onChange={(e)=>setBookLength(e.target.value)} placeholder="book length" readOnly="readOnly"/>

                   <label htmlFor="bookHighlights">highlights</label>
                   <textarea className="form-control" type="text" id="bookHighlights" value={bookHighlights}
                    onChange={(e)=>setBookHighlights(e.target.value)} placeholder="one or two paragraphs from the book"/>
                      <label htmlFor="selectLanguageVersions">Select Language Versions:</label>
                <MultiSelect
                id="selectLanguageVersions"
                      options={selectLanguageVersions}
                      value={languageVersions}
                      onChange={setLanguageVersions}
                      hasSelectAll={false}
                      />


                 </div>
                  <input  className="btn lightbtn" type="submit" style={{backgroundColor:preventResubmitShelf?"var(--inactive)":"var(--lightactionbtn)", color:preventResubmitShelf?"var(--shelfpanellistborder)":"var(--lightactionbtntext)",boxShadow:preventResubmitShelf?"none":"var(--heavyshadow)"}} onClick={(e)=>{validateShelf(e)}} value="Submit Shelf and Book"/>

      {toAdd && toAdd.volumeInfo.authors?toAdd.volumeInfo.authors.map(author=> <NewAuthorWiki author={author} key={author} toAdd={toAdd} stripLabels={stripLabels} setSubjectLinks={setSubjectLinks} previewLanguage={previewLanguage} subjectLinks={subjectLinks} formToggleOn={formToggleOn}/>):<NewAuthorWiki stripLabels={stripLabels} toAdd={toAdd} setSubjectLinks={setSubjectLinks} subjectLinks={subjectLinks} previewLanguage={previewLanguage} formToggleOn={formToggleOn}/>}



    </form>
  )


}

export default SubmissionForm
