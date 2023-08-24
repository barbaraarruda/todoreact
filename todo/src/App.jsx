import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer café",
      category: "home",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir ao trabalho",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Formatar o computador da recepção",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Estudar inglês",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Capinar um lote",
      category: "Hobby",
      isCompleted: false,
    },
  ])

  return <div className='App'>
    <h1>Lista de Tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) => (
        <div className='todo'>
          <div className="content">
            <p>{todo.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
}

export default App
