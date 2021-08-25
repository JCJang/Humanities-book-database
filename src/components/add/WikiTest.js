import {parseInfo} from 'infobox-parser'
import wiki from 'wikijs'
import {useEffect, useState} from 'react'
import Axios from 'axios'
import MultiSelect from "react-multi-select-component";


const WikiTest = ({author, toAdd, stripLabels, previewLanguage, subjectLinks, formToggleOn, setSubjectLinks}) => {

  const [preventResubmitAuthor, setPreventResubmitAuthor] = useState(false)

const [authorWikiTitle, setAuthorWikiTitle] = useState("")
const [previewAuthorWiki, setpreviewAuthorWiki] = useState(false)

//manual fill
const [authorBirthPlace, setAuthorBirthPlace] = useState("")
const [authorCountry, setAuthorCountry] = useState([])

const [timelineLinks, setTimelineLinks] = useState([])
const [contentKeywords, setContentKeywords] = useState([])//choose from main interests,notable ideas

const [authorBirthDate, setAuthorBirthDate] = useState("")
const [authorDeathDate, setAuthorDeathDate] = useState("")
const [authorLifespan, setAuthorLifespan] = useState("")
const [authorBgKeywords, setAuthorBgKeywords] = useState([]) //region,school
const [authorLifeWorkKeywords, setAuthorLifeWorkKeywords] = useState([]) //main interests,notable ideas

const [authorWikiExtract, setAuthorWikiExtract] = useState("")
const [authorWikiCategory, setAuthorWikiCategory] = useState([])
const [authorWikiLanglinks, setAuthorWikiLanglinks] = useState([])
const [authorWikiImage, setAuthorWikiImage] = useState("")
const [authorWikiUrl, setAuthorWikiUrl] = useState("")
const [authorInfluences, setAuthorInfluences] = useState([])//referenced people; related people
const [authorInfluenced, setAuthorInfluenced] = useState([])//people referencing this author; related people


const selectAuthorCountry = [
    {
        "label": "Afghanistan",
        "value": "AF"
    },
    {
        "label": "Åland Islands",
        "value": "AX"
    },
    {
        "label": "Albania",
        "value": "AL"
    },
    {
        "label": "Algeria",
        "value": "DZ"
    },
    {
        "label": "American Samoa",
        "value": "AS"
    },
    {
        "label": "Andorra",
        "value": "AD"
    },
    {
        "label": "Angola",
        "value": "AO"
    },
    {
        "label": "Anguilla",
        "value": "AI"
    },
    {
        "label": "Antarctica",
        "value": "AQ"
    },
    {
        "label": "Antigua and Barbuda",
        "value": "AG"
    },
    {
        "label": "Argentina",
        "value": "AR"
    },
    {
        "label": "Armenia",
        "value": "AM"
    },
    {
        "label": "Aruba",
        "value": "AW"
    },
    {
        "label": "Australia",
        "value": "AU"
    },
    {
        "label": "Austria",
        "value": "AT"
    },
    {
        "label": "Azerbaijan",
        "value": "AZ"
    },
    {
        "label": "Bahamas",
        "value": "BS"
    },
    {
        "label": "Bahrain",
        "value": "BH"
    },
    {
        "label": "Bangladesh",
        "value": "BD"
    },
    {
        "label": "Barbados",
        "value": "BB"
    },
    {
        "label": "Belarus",
        "value": "BY"
    },
    {
        "label": "Belgium",
        "value": "BE"
    },
    {
        "label": "Belize",
        "value": "BZ"
    },
    {
        "label": "Benin",
        "value": "BJ"
    },
    {
        "label": "Bermuda",
        "value": "BM"
    },
    {
        "label": "Bhutan",
        "value": "BT"
    },
    {
        "label": "Bolivia, Plurinational State of",
        "value": "BO"
    },
    {
        "label": "Bonaire, Sint Eustatius and Saba",
        "value": "BQ"
    },
    {
        "label": "Bosnia and Herzegovina",
        "value": "BA"
    },
    {
        "label": "Botswana",
        "value": "BW"
    },
    {
        "label": "Bouvet Island",
        "value": "BV"
    },
    {
        "label": "Brazil",
        "value": "BR"
    },
    {
        "label": "British Indian Ocean Territory",
        "value": "IO"
    },
    {
        "label": "Brunei Darussalam",
        "value": "BN"
    },
    {
        "label": "Bulgaria",
        "value": "BG"
    },
    {
        "label": "Burkina Faso",
        "value": "BF"
    },
    {
        "label": "Burundi",
        "value": "BI"
    },
    {
        "label": "Cambodia",
        "value": "KH"
    },
    {
        "label": "Cameroon",
        "value": "CM"
    },
    {
        "label": "Canada",
        "value": "CA"
    },
    {
        "label": "Cape Verde",
        "value": "CV"
    },
    {
        "label": "Cayman Islands",
        "value": "KY"
    },
    {
        "label": "Central African Republic",
        "value": "CF"
    },
    {
        "label": "Chad",
        "value": "TD"
    },
    {
        "label": "Chile",
        "value": "CL"
    },
    {
        "label": "China",
        "value": "CN"
    },
    {
        "label": "Christmas Island",
        "value": "CX"
    },
    {
        "label": "Cocos (Keeling) Islands",
        "value": "CC"
    },
    {
        "label": "Colombia",
        "value": "CO"
    },
    {
        "label": "Comoros",
        "value": "KM"
    },
    {
        "label": "Congo",
        "value": "CG"
    },
    {
        "label": "Congo, the Democratic Republic of the",
        "value": "CD"
    },
    {
        "label": "Cook Islands",
        "value": "CK"
    },
    {
        "label": "Costa Rica",
        "value": "CR"
    },
    {
        "label": "Côte d'Ivoire",
        "value": "CI"
    },
    {
        "label": "Croatia",
        "value": "HR"
    },
    {
        "label": "Cuba",
        "value": "CU"
    },
    {
        "label": "Curaçao",
        "value": "CW"
    },
    {
        "label": "Cyprus",
        "value": "CY"
    },
    {
        "label": "Czech Republic",
        "value": "CZ"
    },
    {
        "label": "Denmark",
        "value": "DK"
    },
    {
        "label": "Djibouti",
        "value": "DJ"
    },
    {
        "label": "Dominica",
        "value": "DM"
    },
    {
        "label": "Dominican Republic",
        "value": "DO"
    },
    {
        "label": "Ecuador",
        "value": "EC"
    },
    {
        "label": "Egypt",
        "value": "EG"
    },
    {
        "label": "El Salvador",
        "value": "SV"
    },
    {
        "label": "Equatorial Guinea",
        "value": "GQ"
    },
    {
        "label": "Eritrea",
        "value": "ER"
    },
    {
        "label": "Estonia",
        "value": "EE"
    },
    {
        "label": "Ethiopia",
        "value": "ET"
    },
    {
        "label": "Falkland Islands (Malvinas)",
        "value": "FK"
    },
    {
        "label": "Faroe Islands",
        "value": "FO"
    },
    {
        "label": "Fiji",
        "value": "FJ"
    },
    {
        "label": "Finland",
        "value": "FI"
    },
    {
        "label": "France",
        "value": "FR"
    },
    {
        "label": "French Guiana",
        "value": "GF"
    },
    {
        "label": "French Polynesia",
        "value": "PF"
    },
    {
        "label": "French Southern Territories",
        "value": "TF"
    },
    {
        "label": "Gabon",
        "value": "GA"
    },
    {
        "label": "Gambia",
        "value": "GM"
    },
    {
        "label": "Georgia",
        "value": "GE"
    },
    {
        "label": "Germany",
        "value": "DE"
    },
    {
        "label": "Ghana",
        "value": "GH"
    },
    {
        "label": "Gibraltar",
        "value": "GI"
    },
    {
        "label": "Greece",
        "value": "GR"
    },
    {
        "label": "Greenland",
        "value": "GL"
    },
    {
        "label": "Grenada",
        "value": "GD"
    },
    {
        "label": "Guadeloupe",
        "value": "GP"
    },
    {
        "label": "Guam",
        "value": "GU"
    },
    {
        "label": "Guatemala",
        "value": "GT"
    },
    {
        "label": "Guernsey",
        "value": "GG"
    },
    {
        "label": "Guinea",
        "value": "GN"
    },
    {
        "label": "Guinea-Bissau",
        "value": "GW"
    },
    {
        "label": "Guyana",
        "value": "GY"
    },
    {
        "label": "Haiti",
        "value": "HT"
    },
    {
        "label": "Heard Island and McDonald Islands",
        "value": "HM"
    },
    {
        "label": "Holy See (Vatican City State)",
        "value": "VA"
    },
    {
        "label": "Honduras",
        "value": "HN"
    },
    {
        "label": "Hong Kong",
        "value": "HK"
    },
    {
        "label": "Hungary",
        "value": "HU"
    },
    {
        "label": "Iceland",
        "value": "IS"
    },
    {
        "label": "India",
        "value": "IN"
    },
    {
        "label": "Indonesia",
        "value": "ID"
    },
    {
        "label": "Iran, Islamic Republic of",
        "value": "IR"
    },
    {
        "label": "Iraq",
        "value": "IQ"
    },
    {
        "label": "Ireland",
        "value": "IE"
    },
    {
        "label": "Isle of Man",
        "value": "IM"
    },
    {
        "label": "Israel",
        "value": "IL"
    },
    {
        "label": "Italy",
        "value": "IT"
    },
    {
        "label": "Jamaica",
        "value": "JM"
    },
    {
        "label": "Japan",
        "value": "JP"
    },
    {
        "label": "Jersey",
        "value": "JE"
    },
    {
        "label": "Jordan",
        "value": "JO"
    },
    {
        "label": "Kazakhstan",
        "value": "KZ"
    },
    {
        "label": "Kenya",
        "value": "KE"
    },
    {
        "label": "Kiribati",
        "value": "KI"
    },
    {
        "label": "Korea, Democratic People's Republic of",
        "value": "KP"
    },
    {
        "label": "Korea, Republic of",
        "value": "KR"
    },
    {
        "label": "Kuwait",
        "value": "KW"
    },
    {
        "label": "Kyrgyzstan",
        "value": "KG"
    },
    {
        "label": "Lao People's Democratic Republic",
        "value": "LA"
    },
    {
        "label": "Latvia",
        "value": "LV"
    },
    {
        "label": "Lebanon",
        "value": "LB"
    },
    {
        "label": "Lesotho",
        "value": "LS"
    },
    {
        "label": "Liberia",
        "value": "LR"
    },
    {
        "label": "Libya",
        "value": "LY"
    },
    {
        "label": "Liechtenstein",
        "value": "LI"
    },
    {
        "label": "Lithuania",
        "value": "LT"
    },
    {
        "label": "Luxembourg",
        "value": "LU"
    },
    {
        "label": "Macao",
        "value": "MO"
    },
    {
        "label": "Macedonia, the Former Yugoslav Republic of",
        "value": "MK"
    },
    {
        "label": "Madagascar",
        "value": "MG"
    },
    {
        "label": "Malawi",
        "value": "MW"
    },
    {
        "label": "Malaysia",
        "value": "MY"
    },
    {
        "label": "Maldives",
        "value": "MV"
    },
    {
        "label": "Mali",
        "value": "ML"
    },
    {
        "label": "Malta",
        "value": "MT"
    },
    {
        "label": "Marshall Islands",
        "value": "MH"
    },
    {
        "label": "Martinique",
        "value": "MQ"
    },
    {
        "label": "Mauritania",
        "value": "MR"
    },
    {
        "label": "Mauritius",
        "value": "MU"
    },
    {
        "label": "Mayotte",
        "value": "YT"
    },
    {
        "label": "Mexico",
        "value": "MX"
    },
    {
        "label": "Micronesia, Federated States of",
        "value": "FM"
    },
    {
        "label": "Moldova, Republic of",
        "value": "MD"
    },
    {
        "label": "Monaco",
        "value": "MC"
    },
    {
        "label": "Mongolia",
        "value": "MN"
    },
    {
        "label": "Montenegro",
        "value": "ME"
    },
    {
        "label": "Montserrat",
        "value": "MS"
    },
    {
        "label": "Morocco",
        "value": "MA"
    },
    {
        "label": "Mozambique",
        "value": "MZ"
    },
    {
        "label": "Myanmar",
        "value": "MM"
    },
    {
        "label": "Namibia",
        "value": "NA"
    },
    {
        "label": "Nauru",
        "value": "NR"
    },
    {
        "label": "Nepal",
        "value": "NP"
    },
    {
        "label": "Netherlands",
        "value": "NL"
    },
    {
        "label": "New Caledonia",
        "value": "NC"
    },
    {
        "label": "New Zealand",
        "value": "NZ"
    },
    {
        "label": "Nicaragua",
        "value": "NI"
    },
    {
        "label": "Niger",
        "value": "NE"
    },
    {
        "label": "Nigeria",
        "value": "NG"
    },
    {
        "label": "Niue",
        "value": "NU"
    },
    {
        "label": "Norfolk Island",
        "value": "NF"
    },
    {
        "label": "Northern Mariana Islands",
        "value": "MP"
    },
    {
        "label": "Norway",
        "value": "NO"
    },
    {
        "label": "Oman",
        "value": "OM"
    },
    {
        "label": "Pakistan",
        "value": "PK"
    },
    {
        "label": "Palau",
        "value": "PW"
    },
    {
        "label": "Palestine, State of",
        "value": "PS"
    },
    {
        "label": "Panama",
        "value": "PA"
    },
    {
        "label": "Papua New Guinea",
        "value": "PG"
    },
    {
        "label": "Paraguay",
        "value": "PY"
    },
    {
        "label": "Peru",
        "value": "PE"
    },
    {
        "label": "Philippines",
        "value": "PH"
    },
    {
        "label": "Pitcairn",
        "value": "PN"
    },
    {
        "label": "Poland",
        "value": "PL"
    },
    {
        "label": "Portugal",
        "value": "PT"
    },
    {
        "label": "Puerto Rico",
        "value": "PR"
    },
    {
        "label": "Qatar",
        "value": "QA"
    },
    {
        "label": "Réunion",
        "value": "RE"
    },
    {
        "label": "Romania",
        "value": "RO"
    },
    {
        "label": "Russian Federation",
        "value": "RU"
    },
    {
        "label": "Rwanda",
        "value": "RW"
    },
    {
        "label": "Saint Barthélemy",
        "value": "BL"
    },
    {
        "label": "Saint Helena, Ascension and Tristan da Cunha",
        "value": "SH"
    },
    {
        "label": "Saint Kitts and Nevis",
        "value": "KN"
    },
    {
        "label": "Saint Lucia",
        "value": "LC"
    },
    {
        "label": "Saint Martin (French part)",
        "value": "MF"
    },
    {
        "label": "Saint Pierre and Miquelon",
        "value": "PM"
    },
    {
        "label": "Saint Vincent and the Grenadines",
        "value": "VC"
    },
    {
        "label": "Samoa",
        "value": "WS"
    },
    {
        "label": "San Marino",
        "value": "SM"
    },
    {
        "label": "Sao Tome and Principe",
        "value": "ST"
    },
    {
        "label": "Saudi Arabia",
        "value": "SA"
    },
    {
        "label": "Senegal",
        "value": "SN"
    },
    {
        "label": "Serbia",
        "value": "RS"
    },
    {
        "label": "Seychelles",
        "value": "SC"
    },
    {
        "label": "Sierra Leone",
        "value": "SL"
    },
    {
        "label": "Singapore",
        "value": "SG"
    },
    {
        "label": "Sint Maarten (Dutch part)",
        "value": "SX"
    },
    {
        "label": "Slovakia",
        "value": "SK"
    },
    {
        "label": "Slovenia",
        "value": "SI"
    },
    {
        "label": "Solomon Islands",
        "value": "SB"
    },
    {
        "label": "Somalia",
        "value": "SO"
    },
    {
        "label": "South Africa",
        "value": "ZA"
    },
    {
        "label": "South Georgia and the South Sandwich Islands",
        "value": "GS"
    },
    {
        "label": "South Sudan",
        "value": "SS"
    },
    {
        "label": "Spain",
        "value": "ES"
    },
    {
        "label": "Sri Lanka",
        "value": "LK"
    },
    {
        "label": "Sudan",
        "value": "SD"
    },
    {
        "label": "Suriname",
        "value": "SR"
    },
    {
        "label": "Svalbard and Jan Mayen",
        "value": "SJ"
    },
    {
        "label": "Swaziland",
        "value": "SZ"
    },
    {
        "label": "Sweden",
        "value": "SE"
    },
    {
        "label": "Switzerland",
        "value": "CH"
    },
    {
        "label": "Syrian Arab Republic",
        "value": "SY"
    },
    {
        "label": "Taiwan, Province of China",
        "value": "TW"
    },
    {
        "label": "Tajikistan",
        "value": "TJ"
    },
    {
        "label": "Tanzania, United Republic of",
        "value": "TZ"
    },
    {
        "label": "Thailand",
        "value": "TH"
    },
    {
        "label": "Timor-Leste",
        "value": "TL"
    },
    {
        "label": "Togo",
        "value": "TG"
    },
    {
        "label": "Tokelau",
        "value": "TK"
    },
    {
        "label": "Tonga",
        "value": "TO"
    },
    {
        "label": "Trinidad and Tobago",
        "value": "TT"
    },
    {
        "label": "Tunisia",
        "value": "TN"
    },
    {
        "label": "Turkey",
        "value": "TR"
    },
    {
        "label": "Turkmenistan",
        "value": "TM"
    },
    {
        "label": "Turks and Caicos Islands",
        "value": "TC"
    },
    {
        "label": "Tuvalu",
        "value": "TV"
    },
    {
        "label": "Uganda",
        "value": "UG"
    },
    {
        "label": "Ukraine",
        "value": "UA"
    },
    {
        "label": "United Arab Emirates",
        "value": "AE"
    },
    {
        "label": "United Kingdom",
        "value": "GB"
    },
    {
        "label": "United States",
        "value": "US"
    },
    {
        "label": "United States Minor Outlying Islands",
        "value": "UM"
    },
    {
        "label": "Uruguay",
        "value": "UY"
    },
    {
        "label": "Uzbekistan",
        "value": "UZ"
    },
    {
        "label": "Vanuatu",
        "value": "VU"
    },
    {
        "label": "Venezuela, Bolivarian Republic of",
        "value": "VE"
    },
    {
        "label": "Viet Nam",
        "value": "VN"
    },
    {
        "label": "Virgin Islands, British",
        "value": "VG"
    },
    {
        "label": "Virgin Islands, U.S.",
        "value": "VI"
    },
    {
        "label": "Wallis and Futuna",
        "value": "WF"
    },
    {
        "label": "Western Sahara",
        "value": "EH"
    },
    {
        "label": "Yemen",
        "value": "YE"
    },
    {
        "label": "Zambia",
        "value": "ZM"
    },
    {
        "label": "Zimbabwe",
        "value": "ZW"
    }
]
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

//get data
useEffect(()=>{
  fetchAuthorWikiData(author)
  fetchAuthorImage(author)
fetchAuthorWikiUrl(author)
}, [author])

useEffect(()=>{
setPreventResubmitAuthor(false)
}, [authorWikiTitle,toAdd])

  function postAuthor(){
    Axios.post("http://localhost:3001/author",{
      authorWikiTitle:authorWikiTitle,
      authorBirthPlace: authorBirthPlace,
      authorCountry:stripLabels(authorCountry),
      authorWikiExtract:authorWikiExtract,
      authorWikiUrl:authorWikiUrl,
      authorWikiImage:authorWikiImage,
      authorBirthDate:authorBirthDate,
      authorDeathDate:authorDeathDate,
      authorLifespan:authorLifespan,
      authorBgKeywords:authorBgKeywords,
      authorLifeWorkKeywords:authorLifeWorkKeywords,
      authorWikiCategory:authorWikiCategory,
      timelineLinks:timelineLinks,
      authorWikiLanglinks:authorWikiLanglinks,
      authorInfluences:authorInfluences,
      authorInfluenced:authorInfluenced
    })
    console.log("author posted")
}

const validateAuthor = (e)=>{
  e.preventDefault();

  if(!authorWikiTitle || !authorCountry){
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
//calculate Author Age at Publication
//https://www.w3schools.com/jsref/jsref_obj_date.asp JS dates killing me
//https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
/*    useEffect(()=>{
        if(authorBirthDate!==undefined && authorBirthDate!==""){
        if(Object.prototype.toString.call(authorBirthDate) === '[object Date]'){
          if(earliestPublicationYear-authorBirthDate.getFullYear()!==NaN){
      setAuthorAgeAtPublication(earliestPublicationYear-authorBirthDate.getFullYear())}}
    }else{
      if(earliestPublicationYear-authorBirthDate!==NaN){
      setAuthorAgeAtPublication(earliestPublicationYear-authorBirthDate)
    }}
  }, [earliestPublicationYear, authorBirthDate])
*/

/*    <label htmlFor="authorAgeAtPublication">Author Age at Publication</label>
    <input className="form-control" type="text" id="authorAgeAtPublication" form="bookform" value={authorAgeAtPublication}
    onChange={(e)=>setAuthorAgeAtPublication(e.target.value)} placeholder={`publication - ${authorBirthDate}`}/>
*/

  const fetchAuthorWikiData = (author) => {
    const code=previewLanguage.slice(0,2);
    console.log(code)
  wiki({ apiUrl: `https://${code}.wikipedia.org/w/api.php` })
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
      const validCategories = res.categories.map((category)=>{
          return category.replace(/^Category:/,"")
      })
      .filter((category)=>{
          return /^\d\d\d\d/.test(category)===false
      })
      .filter((category)=>{
          return /^All\sarticles/.test(category)===false
      })
      .filter((category)=>{
          return /^AC/.test(category)===false
      })
    setAuthorWikiCategory(validCategories)
      setAuthorWikiLanglinks(res.langlinks)
    })
  try{
    wiki({ apiUrl: `https://${code}.wikipedia.org/w/api.php` })
    .page(author)
    .then(page => page.fullInfo())
    .then(info => info.general)
    .then((res)=>{
      console.log(res)
      setAuthorBirthPlace(res.birthPlace)
  if(res.birthDate){setAuthorBirthDate(res.birthDate.date)}
    if(res.deathDate){ setAuthorDeathDate(res.deathDate.date)
     setAuthorLifespan(res.deathDate.age)}

  // setAuthorBgKeywords([res.region,res.schoolTradition])
  // setAuthorLifeWorkKeywords([res.mainInterests,res.notableIdeas])
    // setContentKeywords([res.mainInterests,res.notableIdeas])
      // setTimelineLinks(res.schoolTradition)
      // setSubjectLinks(res.schoolTradition)
      // setAuthorInfluences(res.influences)
      // setAuthorInfluenced(res.influenced)
      //

      //filter out hlist
      const steamrollAndFilter = (x, setX, dependencies) => {
        const temp = dependencies
          if(Array.isArray(temp)){
          const flatTemp = temp.flat()
          const filteredFlatTemp = flatTemp.filter((y)=> {return /\{*hlist/.test(y)===false})
          setX(filteredFlatTemp)
        }else{
          if(/\{*hlist/.test(temp)===false)
            setX(temp)
          }
      }

      steamrollAndFilter(authorBgKeywords,setAuthorBgKeywords,[res.region,res.schoolTradition])
      steamrollAndFilter(authorLifeWorkKeywords,setAuthorLifeWorkKeywords,[res.mainInterests,res.notableIdeas])
      steamrollAndFilter(contentKeywords,setContentKeywords, [res.mainInterests,res.notableIdeas])
      steamrollAndFilter(timelineLinks,setTimelineLinks, res.schoolTradition)
      steamrollAndFilter(subjectLinks,setSubjectLinks,res.schoolTradition)
      steamrollAndFilter(authorInfluences,setAuthorInfluences,res.influences)
      steamrollAndFilter(authorInfluenced,setAuthorInfluenced,res.influenced)
    }
  )


  }catch(err){
    alert('Error has occured: '+err.stack)
  }
}

const togglePreviewAuthorWiki= (e)=>{
  e.preventDefault()
  setpreviewAuthorWiki(!previewAuthorWiki)
}

const fetchAuthorImage = (author) => {
wiki().page(author).then(page => page.mainImage()).then((res)=>setAuthorWikiImage(res)
)}
const fetchAuthorWikiUrl = (author) => {
wiki().page(author).then(page => page.url()).then((res)=>setAuthorWikiUrl(res)
)}


//if no page found, display "no wikipedia page found"
  return (

    <form onSubmit={(e)=>{validateAuthor(e)}} className="SubmissionForm" id={`${author}form`} style={{display:formToggleOn?"block":"none"}}>
    <div style={{display:"flex"}}>
      <h5>{author} information (partial-fill; corrections needed)</h5>
    <input type="submit" className="btn" value={previewAuthorWiki?"Back to Form":"Preview Author Details"} onClick={togglePreviewAuthorWiki}/>
    </div>
    {previewAuthorWiki && (<div><h4>{authorWikiTitle}</h4>
      <div id="authorWikiImageHolder"><img src={authorWikiImage}></img></div>
      <p>authorWikiExtract</p></div>)}

    <div className="form-section" style={{display:previewAuthorWiki?"none":"grid"}}>
    <label htmlFor='authorWikiTitle'>Author name:</label>
    <input className="form-control" type="text"  onChange={(e)=>setAuthorWikiTitle(e.target.value)} value={authorWikiTitle} placeholder="author name"/>
            <label htmlFor="authorbirthPlace">Author's birth place:</label>
            <input className="form-control" type="text" id="authorBirthPlace" value={authorBirthPlace}
             onChange={(e)=>setAuthorBirthPlace(e.target.value)} placeholder="city, country/region"/>
         <label htmlFor="selectAuthorCountry">Select Author Countries:</label>
       <MultiSelect
       id="selectAuthorCountry"
             options={selectAuthorCountry}
             value={authorCountry}
             onChange={setAuthorCountry}
             hasSelectAll={false}
           />


        <label htmlFor="authorBirthDate">Author Birth Date</label>
        <input className="form-control" type="text" id="authorBirthDate" value={authorBirthDate}
        onChange={(e)=>setAuthorBirthDate(e.target.value)} placeholder="Author Birth Date"/>


        <label htmlFor="authorDeathDate">Author Death Date</label>
        <input className="form-control" type="text" id="authorDeathDate" value={authorDeathDate}
        onChange={(e)=>setAuthorDeathDate(e.target.value)} placeholder="Author Death Date" />

        <label htmlFor="authorLifespan">Author Lifespan</label>
        <input className="form-control" type="text" id="authorLifespan" value={authorLifespan}
        onChange={(e)=>setAuthorLifespan(e.target.value)} placeholder="Author Lifespan"/>

        <label htmlFor="timelineLinks">Wikipedia timeline pages:</label>
        <textarea className="form-control" rows={4} form={`${author}form`}  id="timelineLinks" value={timelineLinks}
         onChange={(e)=>setTimelineLinks([e.target.value])} placeholder="separate by comma"/>

        <label htmlFor="subjectLinks">Wikipedia subject pages:</label>
        <textarea className="form-control" rows={4}  form={`${author}form`}   id="subjectLinks" value={subjectLinks}
         onChange={(e)=>setSubjectLinks([e.target.value])} placeholder="separate by comma"/>

      <label htmlFor="contentKeywords">content keywords:</label>
      <textarea className="form-control" rows={4} form={`${author}form`}    id="contentKeywords" value={contentKeywords}
       onChange={(e)=>setContentKeywords([e.target.value])} placeholder="content keywords"/>
       <label htmlFor="authorInfluences">Influences</label>
       <textarea className="form-control" rows={4}  form={`${author}form`}    id="authorInfluences" value={authorInfluences}
       onChange={(e)=>setAuthorInfluences([e.target.value])} placeholder={`${author} was influenced by these people`} />


       <label htmlFor="authorInfluenced">authorInfluenced</label>
       <textarea className="form-control" rows={4}  form={`${author}form`}  id="authorInfluenced" value={authorInfluenced}
       onChange={(e)=>setAuthorInfluenced([e.target.value])} placeholder={`${author}'s thought influenced these people`}/>
       </div>
    <div className="form-section readOnly" style={{display:previewAuthorWiki?"none":"grid"}}>

        <label htmlFor={`${author}url`}>Wikipedia Link for {author}:</label>
        <input className="form-control" type="text" value={authorWikiUrl} placeholder="wikipedia link" readOnly="readOnly" />

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
    <textarea className="form-control" rows={4}  form={`${author}form`}   id="authorWikiCategory" value={authorWikiCategory}
    onChange={(e)=>setAuthorWikiCategory(e.target.value)} placeholder="author categories" readOnly="readOnly"/>

    <label htmlFor="authorWikiLanglinks">langlinks</label>
    <input className="form-control" type="text" id="authorWikiLanglinks" value={authorWikiLanglinks}
    onChange={(e)=>setAuthorWikiLanglinks(e.target.value)} placeholder="author langlinks" readOnly="readOnly"/>

    <label htmlFor="authorWikiImage">authorWikiImage</label>
    <input className="form-control" type="text" id="authorWikiImage" value={authorWikiImage}
    onChange={(e)=>setAuthorWikiImage(e.target.value)} placeholder="author image url" readOnly="readOnly"/>


    <input  className="btn" type="submit" style={{backgroundColor:preventResubmitAuthor?"var(--inactive)":"var(--lightactionbtn)", color:preventResubmitAuthor?"var(--shelfpanellistborder)":"var(--lightactionbtntext)",boxShadow:preventResubmitAuthor?"none":"var(--heavyshadow)"}} onClick={(e)=>{validateAuthor(e)}} value="Submit this Author"/>


    </div>
    </form>


  )
}

export default WikiTest
