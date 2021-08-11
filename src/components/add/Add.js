import {useState, useEffect} from 'react';
import './Add.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import Footer from './Footer'
import About from './About'


const Add =()=>{
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks, setTasks] =  useState([])

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
    <Router>
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} btnText={showAddTask?"Close":"Add"} btnColor={showAddTask?"red":"green"}/>


      <Route path="/" exact render={(props)=>(
        <>
        {showAddTask && <AddTask onSubmit={addTask}/>}
        {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:<p>There are no tasks</p>}
        </>
      )}/>
      <Route path="/about" component={About}/>
      <Footer/>
    </div>
    </Router>
  )
}

export default Add;
