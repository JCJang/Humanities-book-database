import {parseInfo} from 'infobox-parser'
import wiki from 'wikijs'
import {useEffect, useState} from 'react'
import Axios from 'axios'
import MultiSelect from "react-multi-select-component";

const TranslationAuthorWiki = ({author, toAdd, stripLabels, shelfLanguage, bookId, shelfTranslatingInto, formToggleOn}) => {

const [preventResubmitAuthor, setPreventResubmitAuthor] = useState(false)
const [authorId, setAuthorId] = useState("")
const [authorWikiTitle, setAuthorWikiTitle] = useState("")
const [previewAuthorWiki, setpreviewAuthorWiki] = useState(false)
const [timelineLinks, setTimelineLinks] = useState([])
const [authorBgKeywords, setAuthorBgKeywords] = useState([]) //region,school
const [authorLifeWorkKeywords, setAuthorLifeWorkKeywords] = useState([])
const [authorWikiExtract, setAuthorWikiExtract] = useState("")
const [authorWikiCategory, setAuthorWikiCategory] = useState([])
const [translatingFrom, setTranslatingFrom] = useState([])
const [translatingInto, setTranslatingInto] = useState([])

//restricts selection to one
useEffect(() => {
    if (translatingFrom.length > 1) {
      setTranslatingFrom([translatingFrom[translatingFrom.length - 1]])
    }
}, [translatingFrom])
useEffect(() => {
    if (translatingInto.length > 1) {
      setTranslatingInto([translatingInto[translatingInto.length - 1]])
    }
}, [translatingInto])

const [mongoAuthor, setMongoAuthor] = useState([])
const [authorInfluenced, setAuthorInfluenced]=useState([])
const [authorInfluences, setAuthorInfluences]=useState([])
const [newAuthorInfluenced, setNewAuthorInfluenced]=useState([])
const [newAuthorInfluences, setNewAuthorInfluences]=useState([])


useEffect(()=>{

  const fetchArticleTranslation = async(author, arr) => {

    if(translatingInto.length===0){return}

    const getLanguage = async() =>{ let language = await stripLabels(translatingInto)[0];
       return language.slice(0,2)
      }
    const getTranslation = async() =>{
        const language = await getLanguage();

            wiki({  apiUrl: `https://${language}.wikipedia.org/w/api.php`
              })
              .page(author)
              .then(page =>
                page
                .chain()
                .summary()
                .request()
              )
              .then((res) => {
                arr.push(res.title)
              })
          }
          getTranslation()

  }


if(!translatingInto || !mongoAuthor[0]){return}else{
const influenced = []
mongoAuthor[0].forEach((author)=>fetchArticleTranslation(author, influenced))
setAuthorInfluenced(influenced)}

if(!translatingInto || !mongoAuthor[1]){return}else{
const influences = []
mongoAuthor[1].forEach((author)=>fetchArticleTranslation(author, influences))
setAuthorInfluences(influences)}

},[translatingFrom,translatingInto,mongoAuthor]

)

//get author data from wikipedia
useEffect(()=>{
  if(!translatingInto){return}
  fetchAuthorWikiData(author)
}, [author, translatingInto])

//autofill all target languages based on the one selected for Shelf
useEffect(()=>{
  setTranslatingFrom(shelfLanguage)
  setTranslatingInto(shelfTranslatingInto)
}, [])

//prevent resubmit
useEffect(()=>{
setPreventResubmitAuthor(false)
}, [authorWikiTitle,toAdd])


useEffect(()=>{
  if(translatingFrom.length===0){return}

  Axios.post("http://localhost:3001/getauthorid",{
    author:author,
    translatingFrom:stripLabels(translatingFrom)[0],
  }).then((res)=>{
    res.data.forEach((data)=>{
      setAuthorId(data._id);
      setMongoAuthor([data.authorInfluenced,data.authorInfluences,data.editions[0].details])

    });
    console.log(mongoAuthor)})
  .then( console.log(`loaded ${author}`))

},[translatingFrom, author])


  function postAuthorTranslation(){
    Axios.put("http://localhost:3001/authortranslation",{
      authorId:authorId,
      translatingInto:stripLabels(translatingInto)[0],
      authorWikiTitle:authorWikiTitle,
      authorWikiExtract:authorWikiExtract,
      authorBgKeywords:authorBgKeywords,
      authorLifeWorkKeywords:authorLifeWorkKeywords,
      authorWikiCategory:authorWikiCategory,
      timelineLinks:timelineLinks,
    })
    console.log("author translation posted")
}


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

const validateAuthor = (e)=>{
  e.preventDefault();

  if(!authorWikiTitle ||!translatingInto){
    alert("please fill in missing data");
    return;
  }

  if(preventResubmitAuthor==false){
      postAuthorTranslation();
      setPreventResubmitAuthor(true)
    }else{
      return;
    }
}


const fetchAuthorWikiData = async(author) => {
  let code= await stripLabels(translatingInto)[0]
if(code){if(code.length>2){code=code.slice(0,2)}}

  wiki({ apiUrl: `https://${code}.wikipedia.org/w/api.php`
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

}

const togglePreviewAuthorWiki= (e)=>{
  e.preventDefault()
  setpreviewAuthorWiki(!previewAuthorWiki)}


  return (
    <form onSubmit={(e)=>{validateAuthor(e)}} className="SubmissionForm" id={`${author}form`} style={{display:formToggleOn?"block":"none"}}>
    <h5>{author} information (corrections needed)</h5>
    <div className="translation-section translation-header">
    <label htmlFor="translatingFrom">Translating From:</label>
    <label htmlFor="translatingInto">Translating Into:</label>
<MultiSelect
id="translatingFrom"
    options={selectLanguageVersions}
    value={translatingFrom}
    onChange={setTranslatingFrom}
    hasSelectAll={false}
    />
<MultiSelect
id="translatingInto"
    options={selectLanguageVersions}
    value={translatingInto}
    onChange={setTranslatingInto}
    hasSelectAll={false}
    />
    </div>

    <input type="submit" className="btn lightbtn" value={previewAuthorWiki?"Back to Form":"Preview Author Details"} onClick={togglePreviewAuthorWiki}/>

    {mongoAuthor[2] &&(
      <div className="translation-section" style={{display:previewAuthorWiki?"none":"grid"}}>
      <label htmlFor='authorWikiTitle'>Author name:</label>
    <div className="forty-sixty">
    {mongoAuthor[2].authorWikiTitle}
    <input className="form-control" type="text"  onChange={(e)=>setAuthorWikiTitle(e.target.value)} value={authorWikiTitle} placeholder="author name"/>
    </div>
    </div>)}

    {mongoAuthor[2] && (
      <div className="translation-section" style={{display:previewAuthorWiki?"none":mongoAuthor[2].timelineLinks.length>0?"grid":"none"}}>
      <label htmlFor='authorWikiTitle'>Author Timeline Links:</label>
    <div className="forty-sixty">
    {mongoAuthor[2].timelineLinks}
    <textarea className="form-control" rows={4} form={`${author}form`}  id="timelineLinks" value={timelineLinks}
         onChange={(e)=>setTimelineLinks(e.target.value.split(/[、,,،，]\s*/))} placeholder="separate by comma"/>
         </div>
         </div>)
    }

         {mongoAuthor[0] && (
     <div className="translation-section" style={{display:previewAuthorWiki?"none":mongoAuthor[0].length>0?"grid":"none"}}>
<label htmlFor="authorInfluenced">Author Influenced:</label>
     <div className="forty-sixty">
         {mongoAuthor[0]} <textarea className="form-control" rows={4} form={`${author}form`}  id="authorInfluenced" value={authorInfluenced}
      onChange={(e)=>setAuthorInfluenced(e.target.value.split(/[、,,،，]\s*/))} placeholder="separate by comma"/>
      </div>
      </div>)}

    {mongoAuthor[1] &&(
    <div className="translation-section" style={{display:previewAuthorWiki?"none":mongoAuthor[1].length>0?"grid":"none"}}>
    <label htmlFor="authorInfluences">Author Influences:</label>
    <div className="forty-sixty">
    {mongoAuthor[1].join(", ")}
  <textarea className="form-control" rows={4} form={`${author}form`}  id="authorInfluences" value={authorInfluences}
   onChange={(e)=>setAuthorInfluences(e.target.value.split(/[、,,،，]\s*/))} placeholder="separate by comma"/>
    </div>
    </div>)}


    {mongoAuthor[2] &&(
    <div className="translation-section" style={{display:previewAuthorWiki?"none":mongoAuthor[2].authorBgKeywords.length>0?"grid":"none"}}>
    <label htmlFor="authorBgKeywords">Author Background Keywords</label>
    <div className="forty-sixty">
    {mongoAuthor[2].authorBgKeywords.join(", ")}
    <textarea className="form-control" rows={4}  form={`${author}form`}    id="authorBgKeywords" value={authorBgKeywords}
    onChange={(e)=>setAuthorBgKeywords(e.target.value.split(/[、,,،，]\s*/))} placeholder="Author Background Keywords" />
    </div>
    </div>)}

    {mongoAuthor[2] &&(
      <div className="translation-section" style={{display:previewAuthorWiki?"none":mongoAuthor[2].authorLifeWorkKeywords.length>0?"grid":"none"}}>
    <label htmlFor="authorLifeWorkKeywords">Author Life Work Keywords</label>
    <div className="forty-sixty">
    {mongoAuthor[2].authorLifeWorkKeywords.join(", ")}
    <textarea className="form-control" rows={4}  form={`${author}form`}    id="authorLifeWorkKeywords" value={authorLifeWorkKeywords}
    onChange={(e)=>setAuthorLifeWorkKeywords(e.target.value.split(/[、,,،，]\s*/))} placeholder="Author Life Work Keywords" />
    </div>
    </div>)}

    {mongoAuthor[2] &&(
      <div className="translation-section" style={{display:previewAuthorWiki?"none":mongoAuthor[2].authorWikiExtract.length>0?"grid":"none"}}>
    <label htmlFor="authorWikiExtract">Summary</label>
    <div className="forty-sixty">
    {mongoAuthor[2].authorWikiExtract}
    <textarea className="form-control" rows={4} form={`${author}form`}   id="authorWikiExtract" value={authorWikiExtract}
    onChange={(e)=>setAuthorWikiExtract(e.target.value)} placeholder="extract from wikipedia page" />
    </div>
    </div>)}


    <label htmlFor="subtmitbooktranslation"></label>
    <input  className="btn lightbtn" type="submit" style={{backgroundColor:preventResubmitAuthor?"var(--inactive)":"var(--lightactionbtn)", color:preventResubmitAuthor?"var(--shelfpanellistborder)":"var(--lightactionbtntext)",boxShadow:preventResubmitAuthor?"none":"var(--heavyshadow)"}} onClick={(e)=>{validateAuthor(e)}} value="Submit this Author"/>

    </form>


  )
}

export default TranslationAuthorWiki
