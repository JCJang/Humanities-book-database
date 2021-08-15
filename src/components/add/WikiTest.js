import React from 'react'
import {useEffect, useState} from 'react'
const WikiTest = ({author}) => {

const [authorWikiData, setAuthorWikiData] = useState("")
const [parsedAuthorArray, setParsedAuthorArray] = useState([])


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
              console.log(data)
              setAuthorWikiData([data])
              }


  useEffect(()=>{
    parseAuthor(author);
    for(let author of parsedAuthorArray){fetchAuthorWikiData(author)}
}, [author])


  return (
    <div>{authorWikiData && authorWikiData}</div>
  )
}

export default WikiTest
