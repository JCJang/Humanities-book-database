import {FaTimes} from 'react-icons/fa'
/*Notice how we only pass the name of the function to the event handler and not the name followed by parentheses. Parentheses after a function name executes the function.In other words, if we passed in the function with parentheses, the function will execute every time the component renders.
instead of: onClick={deleteTask(task.id)}
wrap with function: onClick={()=>deleteTask(task.id)}

A common mistake when using inline functions is NOT including parentheses after the function name:onClick={()=>deleteTask}
Then is will not EXECUTE
https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
*/


const Tasks = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
    <h3>{task.text}
    <FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/>
    </h3>
    <p>{task.day}</p>
  </div>
  )
}

export default Tasks
