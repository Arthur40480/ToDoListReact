import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "./components/ListItem"

function App() {

  const [todolist, setTodolist] = useState([
    {id: nanoid(4), content: "Item 1"},
    {id: nanoid(4), content: "Item 2"},
    {id: nanoid(4), content: "Item 3"}
  ])

  const [todo, setTodo] = useState("")
  const [validation, setValidation] = useState(false)

  function deleteTodo(id) {
    setTodolist(todolist.filter(item => item.id !== id))
  }

  function handlesubmit(e) {
    e.preventDefault()
    if(todo === "") {
      setValidation(true)
      return
    }

    setTodolist([...todolist, {id:nanoid(8), content: todo}])
    setTodo("")
    setValidation(false)
  }
  
  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do liste</h1>

        <form onSubmit={handlesubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input onChange={e => setTodo(e.target.value)} value={todo} type="text" className="mt-1 block w-full rounded" />
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
            Ajouter
          </button>
            {validation && (
              <span>Il faut rajouter du contenue</span>
            )}   
          <ul>
          {todolist.length === 0 && (
            <li className="text-slate-50 text-md">Pas d'item à afficher ...</li>
          )}
          {todolist.length > 0 && 
          todolist.map(item => (
            <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
          ))}
          </ul>
        </form>
      </div>
    </div>
  )
}

export default App
