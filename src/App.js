import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import NewTodoForm from "./NewToDoForm";

function App() {
  let todos = useSelector((store) => store.todos); // pull todos from store
  const dispath = useDispatch(); // get dispatch function
  /*delete function*/
  function remove(id) {
    dispath({ type: "REMOVE_TODO", id });
  }
  const todoList = todos.map((m) => (
    <Todo key={m.id} id={m.id} todo={m.todo} remove={remove} />
  )); // map the current todo list

  function add(newTodo) {
    dispath({ type: "ADD_TODO", todo: newTodo });
  } // this is add a new todo, get function from reducer, and pass it into newtodoform component

  return (
    <div className="App">
      {todoList}
      <NewTodoForm add={add} />
    </div>
  );
}

export default App;
