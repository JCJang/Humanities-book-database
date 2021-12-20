import {useEffect, useState} from 'react';
import Axios from 'axios'
import { useTranslation } from 'react-i18next'
import { MultiSelect } from "react-multi-select-component";
import {useCallback} from 'react'
import oldMap from'../images/pexels-ekrulila-4402272.jpg';
import ImageFadeIn from '../customHooks/imageFadeIn'


const LitMap = ({xs, s, m, l, xl, languageSetting="en"}) => {
  const [title, setTitle] =  useState('')
  const [author, setAuthor] =  useState([])
  const [publicationLanguage, setPublicationLanguage] = useState([])
  const {t, i18n} = useTranslation();

  useEffect(() => {
      if (publicationLanguage.length > 1) {
        setPublicationLanguage([publicationLanguage[publicationLanguage.length - 1]])
      }
  }, [publicationLanguage])

  const [recommendationReason, setRecommendationReason]= useState("")

      const stripLabels = useCallback((a) => {
        if(Array.isArray(a)){
          const result = []
          a.map((a)=>{
            result.push(a.value)
          })
          return result
        }
      }, [])



  //manual fill
  const [earliestPublicationYear, setEarliestPublicationYear] = useState(0)

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


  const validateShelf = (e)=>{
    e.preventDefault();
    if(!title||!author||!earliestPublicationYear){
      alert("please fill in missing data");
      return;
    }
    if(preventResubmitBook===false){
    postBook()
    setPreventResubmitBook(true)
  }else{
    return;
  }
  }

  useEffect(()=>{
  setPreventResubmitBook(false)
}, [title,author])


  function postBook(){
    Axios.post("https://humanities-book.herokuapp.com/suggestliteraturebook",{
      bookTitle:title,
      bookAuthor:author,
      publicationLanguage:stripLabels(publicationLanguage)[0],
      earliestPublicationYear:earliestPublicationYear,
      recommendationReason:recommendationReason
    })
    console.log("posted new book suggestion");

  }

  const litMapStyle = () =>{
      return {
      backgroundColor:"var(--shelfpaneltext)",
      color:"var(--paper)",
      lineHeight:"2",
      height:m?"100vh":"var(--panelheightmobile)",
      overflow:"hidden",
      alignItems:"center",
      justifyContent:"center",
      paddingTop:m?"3.5rem":"",
      textShadow:"var(--heavytextshadow)"
    }
    }
    return (


      <div className="Column body1-details" style={litMapStyle()}>

      <div style={{height:m?"100vh":"var(--panelheightmobile)",width:"100vw",  top:"0px", left:"0px", position:"absolute",overflow:"hidden"}}>
      <ImageFadeIn src={oldMap} style={{width:"100vw",height:"100vh",objectFit:"cover"}}/>
    </div>

      <div className="noScrollBar" style={{width:"100vw",padding:"2rem",
       overflowY:"auto",position:"relative", opacity:"0.8"}}>

    <form onSubmit={(e)=>validateShelf(e)} className="SubmissionForm Column" id="shelfform" style={{width:l?"50vw":m?"85vw":"90vw", margin:"auto"}}>

    <div className="h3-details">A World Literature Map featuring lesser-known works.</div>
     <h6 style={{marginLeft:m && "1.5rem"}} className="subtitle1">Upcoming Feature: A Literature Database to accompany your Humanities reading. Submit your recommendations below.</h6>
     <div style={{width:"90%",margin:m?"0.5rem 0 0.5rem 1.5rem":"0.5rem 0",borderTop:"1.8px solid var(--detailspaneltext)"}}></div>
     <br></br>
     <div>A preview of the current database:
     <ul style={{margin:"1rem"}}>
     <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">The Ice Palace by Tarjei Vesas (Norway)</p></li>
     <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Piano Stories by Felisberto Hernández (Uruguay)
</p></li>
     <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Kokoro by Natsume Souseki (Japan)
</p></li>
     <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Red Rose, White Rose by Eileen Chang (China)</p></li>
     </ul>
</div>

    <div className="form-section-suggest" style={{marginTop:"2rem",color:"var(--shelfpaneltext)"}}>
      <h4>Submit Book information</h4>
      <div className="subtitle1" style={{textTransform: "none",margin:"2rem 0"}}>As a general criteria, submit a book that is lesser-known outside of its own country or language. Avoid works that have already achieved the category of 'Classics', and suggest instead works that you hope to see achieve that label.</div>
      <label htmlFor="title">Title:</label>
      <input className="form-control" type="text" id="title" value={title}
       onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
       <label htmlFor="author">Author:</label>
       <input className="form-control"  type="text" id="author" form="SubmissionForm" value={author}
        onChange={(e)=>setAuthor(e.target.value.split(/[、,,،，]\s*/))} placeholder="book author"/>
        <label htmlFor="earliestPublicationYear">First Published in the year (negative number for B.C.)</label>
        <input className="form-control" type="number" id="earliestPublicationYear" value={earliestPublicationYear}
         onChange={(e)=>setEarliestPublicationYear(e.target.value)} placeholder="earliest publication year"/>

         <label htmlFor="publicationLanguage">Originally Published in the language</label>
         <MultiSelect
         id="publicationLanguage"
         options={selectLanguageVersions}
         value={publicationLanguage}
         onChange={setPublicationLanguage}
         hasSelectAll={false}
         />
           <label htmlFor="recommendationReason">Why this book?</label>
           <textarea className="form-control" type="text" rows="6" id="recommendationReason" value={recommendationReason}
                    onChange={(e)=>setRecommendationReason(e.target.value)} placeholder="What compelled you to read this book, and what did you enjoy about it that may convince others to do so as well?"/>
        </div>
            <input  className="btn darkbtn" type="submit" style={{margin:"3rem", width:"100%", backgroundColor:preventResubmitBook?"var(--inactive)":"var(--darkactionbtn)", color:preventResubmitBook?"var(--shelfpanellistborder)":"var(--darkactionbtntext)",boxShadow:preventResubmitBook?"none":"var(--heavyshadow)"}} onClick={(e)=>{validateShelf(e)}} value="Submit Shelf and Book"/>
    </form>
    <div style={{textAlign:"right", opacity:"0.9"}} className="body2"> Photo by <a className="AttributionLink" href="https://www.pexels.com/@ekrulila" target="_blank">Ekrulila</a></div>
    </div>
    </div>
  )


}

export default LitMap
