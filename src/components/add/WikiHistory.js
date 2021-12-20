import {parseInfo} from 'infobox-parser'
import wiki from 'wikijs'
import {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'

const WikiHistory = ({author}) => {

const [targetCountry, setTargetCountry] = useState("Spanish")
const [parsedWikiTimeline, setParsedWikiTimeline] = useState("")
const {t, i18n} = useTranslation();


//parse array of authors

const fetchHistoryWikiData = async()=>{
        const work = await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/Timeline_of_${targetCountry}_history`)
      }
        // const data = await work.json()
        // const result = await parseInfo(data)
        // console.log(result)
        // setParsedWikiTimeline(result)

useEffect(()=>{
  fetchHistoryWikiData()
  wiki({ apiUrl: 'https://zh.wikipedia.org/w/api.php' })
.page('Cristiano Ronaldo')
.then(page =>
  page
    .chain()
  .categories()
  .extlinks()
  .langlinks()
  .links()
  .summary()
  .request())
.then(console.log);

},[])


//if no page found, display "no wikipedia page found"
  return (
    <div>
    <h3>Spanish History</h3>
    <p>{parsedWikiTimeline}</p>
    </div>
  )
}

export default WikiHistory
