const Todo = ({ remove, id, todo }) => {
  return (
    <div>
      id is {id}, {todo}
      <button onClick={() => remove(id)}>Remove!</button>
    </div>
  );
};

export default Todo;
