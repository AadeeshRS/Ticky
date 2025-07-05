import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const saveTOLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
``

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, [])


  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    settodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    settodos(newTodos)
    saveTOLS()
  }
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    settodos(newTodos)
    saveTOLS()
  }
  const handleAdd = (params) => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    saveTOLS()
  }
  const handleChange = (params) => {
    settodo(params.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    settodos(newTodos)
    saveTOLS()
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }


  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto my-4 rounded-xl p-4 bg-violet-100 md:w-1/2 min-h-[85vh] ">
        <h1 className="font-bold text-center text-xl">Ticky - Tick tasks off in a flash</h1>
        <div className="addtodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="bg-white border border-black rounded-lg px-3 py-2 w-full text-sm" />
          <button disabled={todo.length <= 3} onClick={handleAdd} className="p-1.5 px-3 bg-sky-300 text-sm hover:bg-sky-500 disabled:bg-sky-200 disabled:text-gray-500 transition-all duration-100 curjsor-pointer border border-sky-300 rounded-lg font-bold w-full my-4 cursor-pointer">Save</button>
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished} name="" id="" className="" />Show Finished
        <h1 className="text-xl font-bold my-3">Your Todos</h1>
        {todos.length == 0 && <div className="my-2">No Todos to display</div>}
        {todos.map(item => {

          return (showFinished || !item.isCompleted) && <div className="todo flex my-3 justify-between md:w-[50%] " key={item.id}>
            <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
            <div className={`text-left flex-grow mx-2 ${item.isCompleted ? "line-through" : ""}`}>{item.todo}</div>
            <div className="buttons flex h-full">
              <button onClick={(e) => { handleEdit(e, item.id) }} className="mx-4 p-1.5 px-3 bg-sky-300 text-sm hover:bg-sky-500 transition-all duration-100 cursor-pointer border border-sky-300 rounded-lg font-bold"><FaEdit /></button>
              <button onClick={(e) => { handleDelete(e, item.id) }} className="p-1.5 px-3 bg-sky-300 text-sm hover:bg-sky-500 transition-all duration-100 cursor-pointer border border-sky-300 rounded-lg font-bold"><MdDelete /></button>
            </div>

          </div>
        })}
      </div>
    </>
  )
}

export default App
