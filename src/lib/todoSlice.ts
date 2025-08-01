import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'In Progress' | 'Completed';
  createdAt: string;
}

interface TodoState {
  todos: Todo[];
  searchTerm: string;
  statusFilter: 'All' | 'Pending' | 'In Progress' | 'Completed';
  priorityFilter: 'All' | 'High' | 'Medium' | 'Low';
  sortBy: 'dueDate' | 'priority' | 'createdAt';
  sortOrder: 'asc' | 'desc';
}

const initialState: TodoState = {
  todos: [],
  searchTerm: '',
  statusFilter: 'All',
  priorityFilter: 'All',
  sortBy: 'createdAt',
  sortOrder: 'desc',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'createdAt'>>) => {
      const newTodo: Todo = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      state.todos.push(newTodo);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<'All' | 'Pending' | 'In Progress' | 'Completed'>) => {
      state.statusFilter = action.payload;
    },
    setPriorityFilter: (state, action: PayloadAction<'All' | 'High' | 'Medium' | 'Low'>) => {
      state.priorityFilter = action.payload;
    },
    setSortBy: (state, action: PayloadAction<'dueDate' | 'priority' | 'createdAt'>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  setSearchTerm,
  setStatusFilter,
  setPriorityFilter,
  setSortBy,
  setSortOrder,
} = todoSlice.actions;

export default todoSlice.reducer; 