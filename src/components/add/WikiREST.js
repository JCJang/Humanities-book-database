import React from 'react'
import parseInfo from 'infobox-parser'
import {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'

const WikiREST = ({author}) => {

const [authorWikiData, setAuthorWikiData] = useState("")
const [parsedAuthorArray, setParsedAuthorArray] = useState([])
const {t, i18n} = useTranslation();


//parse array of authors

const parseAuthor = (author) =>{
  setParsedAuthorArray([])
for(let x of author){
  const authorName = x.split(/\s+/)
          .join('_')
          .toLowerCase()
          console.log(authorName)
          setParsedAuthorArray([...parsedAuthorArray, authorName])
          setAuthorWikiData([])
      }}

  const fetchAuthorWikiData = async(author)=>{
    console.log(author)
              const work = await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${author}`)
              const data = await work.json()
              const result = await parseInfo(data)
              console.log(result)
              }


  useEffect(()=>{
    parseAuthor(author);
    for(let author of parsedAuthorArray){fetchAuthorWikiData(author); console.log(author)}
}, [author])


  return (
    <div>{authorWikiData && authorWikiData}</div>
  )
}

export default WikiREST
