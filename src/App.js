import { useEffect, useState } from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const onChange = (event) => {
    setTodo(event.target.value || '') // For prevent React error.
  }
  const onSubmit = (event) => {
    event.preventDefault() // Prevent <form/>'s original action.
    if (todo === '') {
      return
    }
    setTodos((current) => [...current, todo])
    setTodo('')
  }
  const onClick = (index) => {
    const newTodos = todos.filter((td, tdIndex) => index !== tdIndex)
    setTodos(newTodos)
  }
  const printArr = () => {
    console.log(todos)
  }
  useEffect(printArr, [todos])
  return (
    <div className="App">
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          text="text"
          value={todo}
          placeholder="Write your todo!"
          onChange={onChange}
        />
        <button>Add Todo</button>
      </form>
      <hr />
      {todos.map((td, index) => (
        <li key={index}>
          {td}
          <button onClick={() => onClick(index)}>Delete</button>
        </li>
      ))}
    </div>
  )
}

export default App
