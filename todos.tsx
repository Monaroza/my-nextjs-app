import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { app } from './firebase'; 

const db = getFirestore(app);

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'todos'));
        const todosList: Todo[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Todo));
        setTodos(todosList);
      } catch (err) {
        setError('Failed to fetch todos');
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    try {
      if (newTodo.trim()) {
        await addDoc(collection(db, 'todos'), { text: newTodo, completed: false });
        setNewTodo('');
        
        const querySnapshot = await getDocs(collection(db, 'todos'));
        const todosList: Todo[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Todo));
        setTodos(todosList);
      }
    } catch (err) {
      setError('Failed to add todo');
    }
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    try {
      await updateDoc(doc(db, 'todos', id), { completed: !completed });
      
      const querySnapshot = await getDocs(collection(db, 'todos'));
      const todosList: Todo[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Todo));
      setTodos(todosList);
    } catch (err) {
      setError('Failed to update todo');
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
      
      const querySnapshot = await getDocs(collection(db, 'todos'));
      const todosList: Todo[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Todo));
      setTodos(todosList);
    } catch (err) {
      setError('Failed to delete todo');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id, todo.completed)}>
              {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;