import {useEffect, useState} from 'react';
import Axios from 'axios'
import { MultiSelect } from "react-multi-select-component";
import {useCallback} from 'react'
import whiteMarble from'../images/pexels-henry-&-co-2341290.jpg';
import ImageFadeIn from '../customHooks/imageFadeIn'
import { useTranslation } from 'react-i18next'

const Suggest = ({xs, s, m, l, xl, languageSetting="en"}) => {
  const [contentKeywords, setContentKeywords] = useState([])//choose from main interests,notable ideas
  const [shelfTitle, setShelfTitle] = useState('')
  const [shelfDescription, setShelfDescription] = useState('')
  const [id, setId] =  useState('')
  const [title, setTitle] =  useState('')
  const [author, setAuthor] =  useState([])
  const [isbn10, setIsbn10] =  useState('')
  const [isbn13, setIsbn13] =  useState('')
  const [bookHighlights, setBookHighlights] = useState('')
  const [languageVersions, setLanguageVersions] = useState([])
  const [previewLanguage, setPreviewLanguage] = useState([])
  const [shelfValue, setShelfValue] = useState([])
  const {t, i18n} = useTranslation();

  //restricts selection to one
  useEffect(() => {
      if (shelfValue.length > 1) {
        setShelfValue([shelfValue[shelfValue.length - 1]])
      }
  }, [shelfValue])

  const [allShelves, setAllShelves]=useState(false)

  const [existingShelves, setExistingShelves] = useState([])


  useEffect(()=>{
    if(!allShelves){return;}
    const newOptions = allShelves.map((shelf)=>{
     return {
       value:shelf.join("-"),
       label:shelf[0]
      }
    })
    setExistingShelves(newOptions)

    },[allShelves])


      const stripLabels = useCallback((a) => {
        if(Array.isArray(a)){
          const result = []
          a.map((a)=>{
            result.push(a.value)
          })
          return result
        }
      }, [])

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


  const validateBook = (e)=>{
    e.preventDefault();
    if(!title||!author||!subjects){
      alert("please fill in missing data");
      return;
    }
    if(preventResubmitShelf===false){
    newShelf?postShelf():addToShelf()
    setPreventResubmitShelf(true)
  }else{
    return;
  }
  }

  useEffect(()=>{
  setPreventResubmitShelf(false)
}, [shelfTitle])


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


//get book data
//shelfLanguage
  useEffect(()=>{
    Axios.post("https://humanities-book-server.cyclic.app/allshelves",{
      languageSetting:shelfLanguage[0]?stripLabels(shelfLanguage)[0]:languageSetting
    }).then((res)=>{
      setAllShelves(res.data.map((x)=>{ return [x.editions[0].details.shelfTitle, x.editions[0].details.shelfDescription,  x.shelfSubjects, x._id]}))
    }).then((res)=>{
      if(!allShelves[0]){
        return;
      }else{
        console.log("reloaded shelves");
      }
    })
      },[preventResubmitShelf])



  function postShelf(){
    Axios.post("https://humanities-book-server.cyclic.app/suggestshelf",{
      shelfSubjects:stripLabels(subjects),
      shelfTitle:shelfTitle,
      bookTitle:title,
      bookAuthor:author,
      bookHighlights:bookHighlights,
      earliestPublicationYear:earliestPublicationYear,
      shelfLanguage:stripLabels(shelfLanguage)[0],
    })
    console.log("posted new shelf suggestion");

  }


  function addToShelf(){
    Axios.post("https://humanities-book-server.cyclic.app/suggestbooktoshelf",{
      shelfTitle:shelfTitle,
      shelfId:shelfId,
      bookTitle:title,
      bookAuthor:author,
      bookHighlights:bookHighlights,
      earliestPublicationYear:earliestPublicationYear,
      shelfLanguage:stripLabels(shelfLanguage)[0],
    })
    console.log("posted book suggestion for shelf");
  }


useEffect(()=>{
  if(!shelfValue[0]){return}
  setShelfTitle( shelfValue[0].value.split("-")[0]);
  setShelfId(shelfValue[0].value.split("-")[3]);
  setNewShelf(false);
},[shelfValue])

const suggestStyle = () =>{
  return {
  backgroundColor:"#e9e7e3",
  color:"var(--ink)",
  lineHeight:"2",
  height:m?"100vh":"var(--panelheightmobile)",
  overflow:"hidden",
  alignItems:"center",
  justifyContent:"center",
  paddingTop:m?"3.5rem":"",
  textShadow:"var(--lighttextshadow)"
}
}
return (


  <div className="Column body2-details" style={suggestStyle()}>

  <div style={{height:m?"100vh":"var(--panelheightmobile)", width:"100vw", top:"0px", left:"0px", position:"absolute",overflow:"hidden"}}>
  <ImageFadeIn src={whiteMarble} style={{width:"100vw",height:"100vh",objectFit:"cover"}}/>
</div>

  <div className="noScrollBar" style={{width:"100vw",padding:"2rem",
   overflowY:"auto",position:"relative",opacity:"0.9"}}>

    <form onSubmit={(e)=>validateBook(e)} className="SubmissionForm Column" id="shelfform" style={{maxWidth:l?"50vw":m?"85vw":"90vw",margin:"auto",position:"relative"}}>

        <h3 className="h3-details">Suggest a Humanities Book.</h3>
        <h6 style={{marginLeft:m && "1.5rem"}} className="subtitle1">Make sure to review submission criteria in the About page.</h6>
        <div style={{width:"90%",margin:m?"0.5rem 0 0.5rem 1.5rem":"0.5rem 0",borderTop:"1.5px solid var(--ink)"}}></div>
        <br></br>
      <h5 style={{marginTop:"3rem", marginBottom:"2rem"}}>Step 1:</h5>

      <div className="form-section-suggest" style={{color:"var(--ink)"}}>
      <h6>Select the language of your submission</h6>

      <label htmlFor="shelfLanguage">Shelf Language:</label>
      <MultiSelect
      id="shelfLanguage"
      options={selectLanguageVersions}
      value={shelfLanguage}
      onChange={setShelfLanguage}
      hasSelectAll={false}
      />
      </div>
      <h5 style={{marginTop:"3rem", marginBottom:"2rem"}}>Step 2:</h5>

      <div className="form-section-suggest" style={{color:"var(--ink)"}}>
      <h6 className="Row">
      <input type="checkbox" style={{alignSelf:"center",justifySelf:"center", marginRight:"1rem",width:"1.5rem",height:"1.5rem"}} id="previewFilter" value="!newShelf" checked={!newShelf} disabled/><div style={{width:"90%"}}>Choose an Existing Shelf</div></h6>
      <label htmlFor="existingshelves" className="subtitle2">Existing Shelves:</label>
       <MultiSelect
       id="existingshelves"
       options={existingShelves}
       value={shelfValue}
      onChange={setShelfValue}
      hasSelectAll={false}
       />
        </div>

      <h6 style={{textAlign:"center", margin:"2rem"}}>OR</h6>




      <div className="form-section-suggest" style={{color:"var(--ink)"}}>
      <h6 className="Row">
      <input type="checkbox" style={{alignSelf:"center", marginRight:"1rem",width:"1.5rem",height:"1.5rem"}} id="previewFilter" value="newShelf" checked={newShelf} disabled/><div style={{width:"90%"}}>Edit Shelf Title to Create a New Shelf</div></h6>
      <label htmlFor="shelfTitle">Shelf Title</label>
      <input className="form-control" type="text" id="shelfTitle" value={shelfTitle}
       onChange={(e)=>{setShelfTitle(e.target.value); setNewShelf(true)}} placeholder="what is the thesis of your suggested book?"/>

        <label htmlFor="selectSubjects">Select Relevant Subjects:</label>
  <MultiSelect
  id="selectSubjects"
        options={selectSubjects}
        value={subjects}
        onChange={setSubjects}
        hasSelectAll={false}
        />

        </div>


  <h5 style={{marginTop:"3rem", marginBottom:"2rem"}}>Step 3:</h5>
    <div className="form-section-suggest"  style={{color:"var(--ink)"}}>
  <h6>Submit Book information</h6>
      <label htmlFor="title">Title:</label>
      <input className="form-control" type="text" id="title" value={title}
       onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
       <label htmlFor="author">Author(s):</label>
       <textarea className="form-control"  id="author" form="SubmissionForm" rows={4} value={author}
        onChange={(e)=>setAuthor(e.target.value.split(/[、,,،，]\s*/))} placeholder="book author(s). Should match wikipedia page title. Separate with commas"/>
        <label htmlFor="earliestPublicationYear">First Published in the year (negative number for B.C.)</label>
        <input className="form-control" type="number" id="earliestPublicationYear" value={earliestPublicationYear}
         onChange={(e)=>setEarliestPublicationYear(e.target.value)} placeholder="earliest publication year"/>

                   <label htmlFor="bookHighlights">highlights</label>
                   <textarea className="form-control" type="text" rows="20" id="bookHighlights" value={bookHighlights}
                    onChange={(e)=>setBookHighlights(e.target.value)} placeholder="2 to 3 paragraphs from the book"/>
        </div>
            <input  className="btn lightbtn" type="submit" style={{margin:"3rem", width:"100%", backgroundColor:preventResubmitShelf?"var(--inactive)":"var(--lightactionbtn)", color:preventResubmitShelf?"var(--shelfpanellistborder)":"var(--lightactionbtntext)",boxShadow:preventResubmitShelf?"none":"var(--heavyshadow)"}} onClick={(e)=>{validateBook(e)}} value="Submit Shelf and Book"/>
    </form>
    <div style={{textAlign:"right", opacity:"0.9"}} className="body2">Photo by <a style={{color:"var(--ink)"}} className="AttributionLink" href="https://www.pexels.com/@hngstrm" target="_blank">
Henry & Co.</a>
    </div>

    </div>
  </div>
  )


}

export default Suggest
