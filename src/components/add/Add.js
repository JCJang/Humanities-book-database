import {useState, useEffect} from 'react';
import './Add.css';
import Query from './Query'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import SearchBar from '../SearchBar'



const Add =()=>{
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks, setTasks] =  useState([])
  const [results, setResults] = useState(false)
  const [toAdd, setToAdd] = useState()

  const onSearch = async(title)=>{
    console.log(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title.search}`);
    const work = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title.search}`)
    const data = await work.json()
      setResults(data)
      }

  useEffect(()=>{
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

// const id = Math.floor(Math.random() * 10000)+1
// const newTask = {id, ...task}
// setTasks([...tasks,newTask])

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} btnText={showAddTask?"Close":"Add"} btnColor={showAddTask?"red":"green"}/>
        {showAddTask && <AddTask onSubmit={addTask}/>}
        <SearchBar type="text" onSearch = {onSearch}
         placeholder="What do you want to read?"/>
        {results && (<Query result={results} setToAdd={setToAdd}/>)}
        {toAdd}
        {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}
         onToggle={toggleReminder}/>:<p>There are no tasks</p>}
    </div>
  )
}

export default Add;
