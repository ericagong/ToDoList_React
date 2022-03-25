import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const handleWrite = (event) => {
    setTodo(event.target.value)
  }
  const handleTodos = () => {
    setTodos((curr) => [...curr, todo])
  }
  const handleSubmit = (event) => {
    event.preventDefault() // <form/> automatically submit input with button click or pressing enter, event.preventDefault() prevent its action.
    if (todo === '') {
      return // kill submit func if todo is empty.
    }
    handleTodos()
    setTodo('')
  }
  console.log(todos)
  const Todos = todos.map((td, index) => <li key={index}>{td}</li>)
  return (
    <div>
      <h1>My TODOs ({todos.length})</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your Todo"
          value={todo}
          onChange={handleWrite}
        />
        <button>Add Todo</button>
      </form>
      <hr />
      {Todos}
    </div>
  )
}

export default App
