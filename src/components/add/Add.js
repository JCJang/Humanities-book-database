import {useState, useEffect} from 'react';
import './Add.css';
import Query from './Query'
import SearchForm from './SearchForm'
import SubmissionForm from './SubmissionForm'


const Add =()=>{
  const [showAddTask, setShowAddTask]=useState(false)
  const [results, setResults] = useState(false)
  const [toAdd, setToAdd] = useState(false)

  const onSearch = async(title, author, isbn)=>{
    console.log(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}+isbn:${isbn}&filter=partial&printType=books&maxResults=40`);
    const work = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}+isbn:${isbn}&filter=partial&printType=books&maxResults=40`)
    const data = await work.json()
    if(data.totalItems===0){
      alert("no results for this search.")
      return;
    }
      setResults(data)
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
    <div className="container">
        <div className="SearchForm"><SearchForm onSearch = {onSearch}/>
        {results && (<Query result={results} setToAdd={setToAdd}/>)}</div>
        <div className="SubmissionForm">
        {<SubmissionForm toAdd = {toAdd} onSearch={onSearch}/>}
        </div>
    </div>
  )
}

export default Add;
