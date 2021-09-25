import {useState, useEffect} from 'react';
import './Add.css';
import Query from './Query'
import SearchForm from './SearchForm'
import SubmissionForm from './SubmissionForm'
import TranslationForm from './TranslationForm'

import GoogleBooksViewer from './GoogleBooksViewer'


const Add =({googleScriptLoaded})=>{
  const [results, setResults] = useState(false)
  const [toAdd, setToAdd] = useState(false)
    const [bookIdentifier, setBookIdentifier] = useState(false);
    const [isbnOrId, setIsbnOrId] = useState(true)
    const [formToggleOn, setFormToggleOn] = useState(false)
    const [languageSetting, setLanguageSetting] = useState('en')
    const [translateForm, setTranslateForm] = useState(false)


     const toggleForm = (e) =>{
       e.preventDefault()
       setFormToggleOn(!formToggleOn)
     }
     const toggleTranslateForm= (e) =>{
       e.preventDefault()
       setTranslateForm(!translateForm)
     }


     function stripLabels(a){
       const result = []
       a.map((a)=>{
         result.push(a.value)
       })
       return result
     }

         // Was able to fix first load bug by setting google script load not within the useEffect, but as part of a component.

//get isbn

    useEffect(()=> {
      if(toAdd!==false){
        const getIsbn=(isbn)=>{
          if(toAdd.volumeInfo.hasOwnProperty("industryIdentifiers")){
          const res = toAdd.volumeInfo.industryIdentifiers.filter(a=>a.type===isbn)
          if(res[0]!==undefined){return res[0].identifier}else{return ""}}else{return ""}
        }

      console.log(getIsbn("ISBN_10"))
        if(getIsbn("ISBN_10").length>10){setBookIdentifier(getIsbn("ISBN_10")); setIsbnOrId(true)}else if (getIsbn("ISBN_13").length>10){setBookIdentifier(getIsbn("ISBN_13")); setIsbnOrId(true)}else if(toAdd.hasOwnProperty("id")){
            setBookIdentifier(toAdd.id);
            setIsbnOrId(false)
          } else {
            console.log("no identifier found")
            setBookIdentifier(false)
        }
        console.log(bookIdentifier);
    }}, [toAdd]);

        const onSearch = async(title, author, isbn,previewFilter)=>{
          console.log("https://www.googleapis.com/books/v1/volumes?q="+(title ? "intitle:"+title : "")+ (title? "+" :"")+(author? "inauthor:"+author:"")+((title || author)?"+":"")+(isbn? ("isbn:"+isbn):"")+"&printType=books&maxResults=40")
          const work = await fetch("https://www.googleapis.com/books/v1/volumes?q="+(title ? "intitle:"+title : "")+ (title? "+" :"")+(author? "inauthor:"+author:"")+((title || author)?"+":"")+(isbn? ("isbn:"+isbn):"")+"&printType=books&maxResults=40")
          const data = await work.json()
          if(data.totalItems===0){
            alert("no results for this search.")
            return;
          }
            if(previewFilter){
              const filteredData = data.items.filter((a)=>{return a.accessInfo.viewability!=="NO_PAGES"})
              setResults(filteredData)
          }else{
              setResults(data.items)
            }
          }

/*useEffect(()=>{
      const getTasks = async() => {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer)
      }
      getTasks();
  },[])

  const fetchTasks = async() =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const fetchTask = async(id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }


  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'},)
    setTasks(tasks.filter((item)=>item.id!==id))
  }

const toggleReminder = async (id)=>{
  //update server side
  const taskToToggle = await fetchTask(id);
  const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })

  const data = await res.json()

//update ui side
setTasks(tasks.map((item)=>item.id===id?{...item, reminder:data.reminder}:item))
}


const addTask = async (task)=>{
  const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  }
)

const data = await res.json();
console.log(data)

setTasks([...tasks, data])
}
*/
// const id = Math.floor(Math.random() * 10000)+1
// const newTask = {id, ...task}
// setTasks([...tasks,newTask])

  return (

    <div>
        <div  className="container">
        <div className="subcontainer left-block"  style={{width:"30rem",height:"var(--panelheight)"}}>
          <SearchForm onSearch = {onSearch} languageSetting={languageSetting} setLanguageSetting={setLanguageSetting} results={results}/>
        {results && (<Query result={results} toAdd={toAdd} setToAdd={setToAdd}/>)}

        </div>

        <div className="subcontainer right-block" style={{display:results?"":"none", backgroundColor:formToggleOn?"var(--shelfpanel)":"var(--detailspanel)",color:formToggleOn?"var(--shelfpaneltext)":"var(--detailspaneltext)"}}>
          {results && <input type="submit"  className={formToggleOn?"btn lightbtn":"btn darkbtn"} value={formToggleOn?"Preview Book":"Show Submission Form"} onClick={toggleForm}/>}
          {formToggleOn && <input type="submit"  className="btn lightbtn" value={translateForm?"Submit new shelf or book":"Translate existing entries"} onClick={toggleTranslateForm}/>}
          <GoogleBooksViewer bookIdentifier={bookIdentifier} formToggleOn={formToggleOn} googleScriptLoaded={googleScriptLoaded} isbnOrId={isbnOrId}/>

         {translateForm?<TranslationForm stripLabels={stripLabels} toAdd = {toAdd} translateForm={translateForm} formToggleOn={formToggleOn}  languageSetting={languageSetting} onSearch={onSearch}/>:<SubmissionForm toAdd = {toAdd} stripLabels={stripLabels} formToggleOn={formToggleOn} translateForm={translateForm} languageSetting={languageSetting} onSearch={onSearch}/>}

        </div>
    </div>
  </div>
  )
}

export default Add;
