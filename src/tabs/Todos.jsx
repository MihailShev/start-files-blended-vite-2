import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem('save-todos');

    if (saveTodos !== null) {
      return JSON.parse(saveTodos);
    }

    return [
      { id: '1', text: 'Practice more' },
      { id: '2', text: 'Get all tasks done on time' },
    ];
  });

  const addTodo = newTodo => setTodos(prevTodos => [...prevTodos, newTodo]);

  const deleteTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  const handleEditTodo = id => {
    const currTodo = todos.find(todo => todo.id === id);

    setCurrentTodo(currTodo);
    setIsEditing(prevEditing => !prevEditing);
  };

  const cancelUpdate = () => {
    setIsEditing(prevEditing => !prevEditing);
    setCurrentTodo({});
  };

  const updateTodo = changeTodo => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === changeTodo.id ? changeTodo : todo))
    );

    setIsEditing(false);
    setCurrentTodo({});
  };

  useEffect(() => {
    localStorage.setItem('save-todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo}
        />
      ) : (
        <Form onAdd={addTodo} />
      )}

      <TodoList onEdit={handleEditTodo} todos={todos} onDelete={deleteTodo} />
    </>
  );
};

export default Todos;
