import {useEffect, useState} from 'react';
import TranslationAuthorWiki from './TranslationAuthorWiki'
import Axios from 'axios'
import MultiSelect from "react-multi-select-component";


const TranslationForm = ({toAdd, stripLabels,onSearch, languageSetting, translateForm, formToggleOn }) => {

  const [shelfTitle, setShelfTitle] = useState('')
  const [shelfDescription, setShelfDescription] = useState('')

  const [shelfTitleDisplay, setShelfTitleDisplay] = useState('')
  const [shelfDescriptionDisplay, setShelfDescriptionDisplay] = useState('')
  const [bookTitleDisplay, setBookTitleDisplay] = useState('')
  const [bookAuthorDisplay, setBookAuthorDisplay] = useState('')
  const [bookSubjectLinksDisplay, setBookSubjectLinksDisplay] = useState([])

  const [id, setId] =  useState('')
  const [title, setTitle] =  useState('')
  const [author, setAuthor] =  useState([])
  const [isbn, setIsbn] = useState('')
  const [isbn10, setIsbn10] =  useState('')
  const [isbn13, setIsbn13] =  useState('')
  const [bookHighlights, setBookHighlights] = useState('')
  const [subjectLinks, setSubjectLinks] = useState([])//use what?
  const [shelfTranslatingFrom, setShelfTranslatingFrom] = useState([])
  const [shelfTranslatingInto, setShelfTranslatingInto] = useState([])
  const [bookTranslatingFrom, setBookTranslatingFrom] = useState([])
  const [bookTranslatingInto, setBookTranslatingInto] = useState([])


  //restricts selection to one
  useEffect(() => {
      if (shelfTranslatingFrom.length > 1) {
        setShelfTranslatingFrom([shelfTranslatingFrom[shelfTranslatingFrom.length - 1]])
      }
  }, [shelfTranslatingFrom])
  useEffect(() => {
      if (shelfTranslatingInto.length > 1) {
        setShelfTranslatingInto([shelfTranslatingInto[shelfTranslatingInto.length - 1]])
      }
  }, [shelfTranslatingInto])
  useEffect(() => {
      if (bookTranslatingFrom.length > 1) {
        setBookTranslatingFrom([bookTranslatingFrom[bookTranslatingFrom.length - 1]])
      }
  }, [bookTranslatingFrom])
  useEffect(() => {
      if (bookTranslatingInto.length > 1) {
        setBookTranslatingInto([bookTranslatingInto[bookTranslatingInto.length - 1]])
      }
  }, [bookTranslatingInto])

  //autoset form languages based on language settings
  useEffect(()=>{
    const addLabel = selectLanguageVersions.filter((x)=>{return x.value===languageSetting})
 setShelfTranslatingFrom([addLabel[0]])
setBookTranslatingFrom([addLabel[0]])
}, [])

//autofill all target languages based on the one selected for Shelf
useEffect(()=>{
  setBookTranslatingFrom(shelfTranslatingFrom)
  setBookTranslatingInto(shelfTranslatingInto)
},[shelfTranslatingFrom, shelfTranslatingInto])

  //manual fill
  const [bookLength, setBookLength] = useState("")
  const [allShelves, setAllShelves]=useState([])
  const [allBooks, setAllBooks]=useState([])

  const [shelfId, setShelfId]=useState()
  const [bookId, setBookId]=useState('')
  const [preventResubmitShelf, setPreventResubmitShelf] = useState(false)
  const [preventResubmitBook, setPreventResubmitBook] = useState(false)

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


  const validateShelfTranslation = (e)=>{
    e.preventDefault();
    if(!shelfTitle||!shelfId||!shelfTranslatingInto){
      alert("please fill in missing shelf data");
      return;
    }
    if(preventResubmitShelf==false){
    postShelfTranslation()
    setPreventResubmitShelf(true)
  }else{
    return;
  }
  }

  const validateBookTranslation = (e)=>{
      e.preventDefault();
      if(!title||!author||!bookId){
        alert("please fill in missing book data");
        return;
      }
      if(preventResubmitBook==false){
      postBookTranslation()
      setPreventResubmitBook(true)
    }else{
      return;
    }
    }

  useEffect(()=>{
  setPreventResubmitShelf(false)
}, [shelfTitle,toAdd])

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
      shelfLanguage:shelfTranslatingFrom[0]?stripLabels(shelfTranslatingFrom)[0]:languageSetting
    }).then((res)=>{
      setAllShelves(res.data.map((x)=>{ return [x.editions[0].details.shelfTitle, x.editions[0].details.shelfDescription, x.shelfSubjects, x._id]}))
    }).then( console.log("reloaded shelves"))
  },[toAdd, shelfTranslatingFrom,preventResubmitShelf])


  function postShelfTranslation(){
    Axios.post("http://localhost:3001/shelftranslation",{
      shelfId:shelfId,
      shelfTranslatingInto:shelfTranslatingInto,
      shelfTitle:shelfTitle,
      shelfDescription:shelfDescription,
    })
    console.log("posted shelf translation");
  }



  useEffect(()=>{
    if(!shelfId || !bookTranslatingFrom){return}
      Axios.post("http://localhost:3001/allbooks",{
      bookTranslatingFrom:bookTranslatingFrom[0]?stripLabels(bookTranslatingFrom)[0]:languageSetting,
      shelfId:shelfId
    }).then((res)=>{
      setAllBooks(res.data[0].shelfBooks.map((book)=>{return [book._id, book.editions[0].details.bookTitle,book.editions[0].details.bookAuthor,book.editions[0].details.subjectLinks]}))
    }).then( console.log("reloaded books"))
  },[bookTranslatingFrom,shelfId])

  function postBookTranslation(){
    Axios.put("http://localhost:3001/booktranslation",{
      language:shelfTranslatingInto,
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
    <form  id="TranslationFormShelf" style={{display:formToggleOn?"block":"none"}}>
    <h5>Translate Shelf:</h5>

    <div className="TranslateShelf">
      <div className="translation-section translation-header">

            <label htmlFor="shelfTranslatingFrom">Translating From:</label>

            <label htmlFor="shelfTranslatingInto">Translating into:</label>
          <MultiSelect
          id="shelfTranslatingFrom"
            options={selectLanguageVersions}
            value={shelfTranslatingFrom}
            onChange={setShelfTranslatingFrom}
            hasSelectAll={false}
            />
             <MultiSelect
             id="selectLanguageVersions"
                   options={selectLanguageVersions}
                   value={shelfTranslatingInto}
                   onChange={setShelfTranslatingInto}
                   hasSelectAll={false}
                   />
            </div>
      {allShelves && allShelves.map((shelf)=><div onClick={()=>{setShelfTitleDisplay(shelf[0]); setShelfDescriptionDisplay(shelf[1]);setShelfId(shelf[3])}} key={shelf[3]}
      style={{backgroundColor:shelf[3]==shelfId?"var(--shelfpanellistpressed)":"var(--shelfpanellist)",
      border:shelf[3]==shelfId?"1px solid var(--shelfpanellistpressedborder)":"1px solid var(--shelfpanellistborder)",
      transform:shelf[3]==shelfId?"translateY(0.3rem)":"translateY(0px)",
      boxShadow:shelf[3]==shelfId?"none":"var(--heavyshadow)"}}>
        <div className="subtitle1">
      {shelf[0]}
        </div>
      </div>)}
      <div className="translation-section">

      <label htmlFor="shelfTitle">Shelf Question:</label>
      <div className="forty-sixty">
     {shelfTitleDisplay}  <input className="form-control" type="text" id="shelfTitle" value={shelfTitle}  onChange={(e)=>{setShelfTitle(e.target.value);}} placeholder="question form"/>
      </div>

       <label htmlFor="shelfDescription">Shelf Description:</label>
       <div className="forty-sixty">
       {shelfDescriptionDisplay}<input className="form-control" type="text" id="shelfDescription" value={shelfDescription}
        onChange={(e)=>setShelfDescription(e.target.value)} placeholder="one or two short paragraphs"/>
        </div>
        <label htmlFor="subtmitbooktranslation"></label>

        <input  className="btn lightbtn" type="submit" style={{backgroundColor:preventResubmitShelf?"var(--inactive)":"var(--lightactionbtn)", color:preventResubmitShelf?"var(--shelfpanellistborder)":"var(--lightactionbtntext)",boxShadow:preventResubmitShelf?"none":"var(--heavyshadow)"}} onClick={(e)=>{validateShelfTranslation(e)}} value="Submit Shelf Translation"/>
</div>
</div>
<h5>Translate Books in this shelf</h5>

<div className="TranslateBook">
      <div className="translation-section translation-header">
      <label htmlFor="bookTranslatingFrom">Translating From:</label>
      <label htmlFor="bookTranslatingInto">Translating into:</label>
    <MultiSelect
    id="bookTranslatingFrom"
      options={selectLanguageVersions}
      value={bookTranslatingFrom}
      onChange={setBookTranslatingFrom}
      hasSelectAll={false}
      />
       <MultiSelect
       id="bookTranslatingInto"
             options={selectLanguageVersions}
             value={bookTranslatingInto}
             onChange={setBookTranslatingInto}
             hasSelectAll={false}
             />
             </div>
             {allBooks && allBooks.map((book)=><div onClick={()=>{setBookTitleDisplay(book[1]); setBookAuthorDisplay(book[2]);setBookId(book[0]);setBookSubjectLinksDisplay(book[3])}} key={book[0]}
             style={{backgroundColor:book[0]==bookId?"var(--shelfpanellistpressed)":"var(--shelfpanellist)",
             border:book[0]==bookId?"1px solid var(--shelfpanellistpressedborder)":"1px solid var(--shelfpanellistborder)",
             transform:book[0]==bookId?"translateY(0.3rem)":"translateY(0px)",
             boxShadow:book[0]==bookId?"none":"var(--heavyshadow)"}}>
               <div className="subtitle1">
             {book[1]} by {book[2].map((author)=>{return author})}
               </div>
             </div>)}
    <div className="translation-section">
      <label htmlFor="title">Title:</label>
      <div className="forty-sixty">
      {bookTitleDisplay}
      <input className="form-control" type="text" id="title" value={title}
       onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
       </div>
       <label htmlFor="author">Author(s):</label>
       <div className="forty-sixty">
       {bookAuthorDisplay}
       <textarea className="form-control"  id="author" form="SubmissionForm" rows={4} value={author}
        onChange={(e)=>setAuthor(e.target.value)} placeholder="book author(s). Should match wikipedia page title. Separate with commas"/>
        </div>
        <label htmlFor="subjectLinks">Subject Links:</label>
        <div className="forty-sixty">
        {bookSubjectLinksDisplay}
        <textarea className="form-control"  id="subjectLinks" form="SubmissionForm" rows={4} value={subjectLinks}
         onChange={(e)=>setSubjectLinks(e.target.value)} placeholder="subject Links. Separate with commas"/>
         </div>

    </div>
           <div className="translation-section">
               <label htmlFor="isbn10">Isbn-10:</label>
               <input className="form-control" type="text" id="isbn10" value={isbn10}
                onChange={(e)=>setIsbn10(e.target.value)} placeholder="isbn-10" />
                <label htmlFor="isbn13">Isbn-13:</label>
                <input className="form-control" type="text" id="isbn13" value={isbn13}
                 onChange={(e)=>setIsbn13(e.target.value)} placeholder="isbn-13" />
                  <label htmlFor="bookLength">Length (pages)</label>
                  <input className="form-control" type="text" id="bookLength" value={bookLength}
                   onChange={(e)=>setBookLength(e.target.value)} placeholder="book length" />

                   <label htmlFor="bookHighlights">highlights</label>
                   <textarea className="form-control" type="text" id="bookHighlights" value={bookHighlights}
                    onChange={(e)=>setBookHighlights(e.target.value)} placeholder="one or two paragraphs from the book"/>
                    <label htmlFor="subtmitbooktranslation"></label>
                    <input  className="btn lightbtn" type="submit" style={{ backgroundColor:preventResubmitBook?"var(--inactive)":"var(--lightactionbtn)", color:preventResubmitBook?"var(--shelfpanellistborder)":"var(--lightactionbtntext)",boxShadow:preventResubmitBook?"none":"var(--heavyshadow)"}} onClick={(e)=>{validateBookTranslation(e)}} value="Submit Book Translation"/>
                 </div>
</div>

      {bookAuthorDisplay && bookAuthorDisplay.map(author=> <TranslationAuthorWiki author={author} bookId={bookId} key={author} toAdd={toAdd} stripLabels={stripLabels} translateForm={translateForm} shelfLanguage={shelfTranslatingFrom} shelfTranslatingInto={shelfTranslatingInto}  formToggleOn={formToggleOn}/>)}

    </form>
  )


}

export default TranslationForm
