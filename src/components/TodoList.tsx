'use client';

import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import {
  addTodo,
  updateTodo,
  deleteTodo,
  setSearchTerm,
  setStatusFilter,
  setPriorityFilter,
  setSortBy,
  setSortOrder,
} from '@/lib/todoSlice';
import { Todo } from '@/types/todo';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import SearchAndFilter from './SearchAndFilter';
import DarkModeToggle from './DarkModeToggle';
import { Plus, ClipboardList, Database } from 'lucide-react';
import toast from 'react-hot-toast';
import { sampleTodos } from '@/lib/sampleData';

export default function TodoList() {
  const dispatch = useAppDispatch();
  const {
    todos,
    searchTerm,
    statusFilter,
    priorityFilter,
    sortBy,
    sortOrder,
  } = useAppSelector((state: any) => state.todos);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | undefined>();

  // Filter and sort todos
  const filteredAndSortedTodos = todos
    .filter((todo: Todo) => {
      const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          todo.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || todo.status === statusFilter;
      const matchesPriority = priorityFilter === 'All' || todo.priority === priorityFilter;
      
      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a: Todo, b: Todo) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'dueDate':
          aValue = a.dueDate || '';
          bValue = b.dueDate || '';
          break;
        case 'priority':
          const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
          aValue = priorityOrder[a.priority as keyof typeof priorityOrder];
          bValue = priorityOrder[b.priority as keyof typeof priorityOrder];
          break;
        case 'createdAt':
        default:
          aValue = new Date(a.createdAt).getTime();
          bValue = new Date(b.createdAt).getTime();
          break;
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const handleAddTodo = (todoData: Omit<Todo, 'id' | 'createdAt'>) => {
    dispatch(addTodo(todoData));
    toast.success('Task added successfully!');
  };

  const handleUpdateTodo = (todoData: Omit<Todo, 'id' | 'createdAt'>) => {
    if (editingTodo) {
      dispatch(updateTodo({ ...todoData, id: editingTodo.id, createdAt: editingTodo.createdAt }));
      toast.success('Task updated successfully!');
    }
  };

  const handleDeleteTodo = (id: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTodo(id));
      toast.success('Task deleted successfully!');
    }
  };

  const handleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingTodo(undefined);
  };

  const handleFormSubmit = (todoData: Omit<Todo, 'id' | 'createdAt'>) => {
    if (editingTodo) {
      handleUpdateTodo(todoData);
    } else {
      handleAddTodo(todoData);
    }
  };

  const loadSampleData = () => {
    sampleTodos.forEach(todo => {
      dispatch(addTodo(todo));
    });
    toast.success('Sample data loaded successfully!');
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Todo List App</h1>
            <p className="text-gray-700 dark:text-gray-300">Manage your tasks efficiently with our powerful todo app</p>
          </div>
          <DarkModeToggle />
        </div>
      </div>

      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={(term) => dispatch(setSearchTerm(term))}
        statusFilter={statusFilter}
        onStatusFilterChange={(status) => dispatch(setStatusFilter(status as any))}
        priorityFilter={priorityFilter}
        onPriorityFilterChange={(priority) => dispatch(setPriorityFilter(priority as any))}
        sortBy={sortBy}
        onSortByChange={(sortBy) => dispatch(setSortBy(sortBy as any))}
        sortOrder={sortOrder}
        onSortOrderChange={(order) => dispatch(setSortOrder(order as any))}
      />

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <ClipboardList className="text-gray-600 dark:text-gray-400" size={20} />
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Tasks ({filteredAndSortedTodos.length})
          </span>
        </div>
        <div className="flex gap-2">
          {todos.length === 0 && (
            <button
              onClick={loadSampleData}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center gap-2 transition-colors"
            >
              <Database size={16} />
              Load Sample Data
            </button>
          )}
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2 transition-colors"
          >
            <Plus size={16} />
            Add New Task
          </button>
        </div>
      </div>

      {filteredAndSortedTodos.length === 0 ? (
        <div className="text-center py-12">
          <ClipboardList className="mx-auto text-gray-400 dark:text-gray-500 mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No tasks found</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {todos.length === 0 
              ? "Get started by adding your first task or load sample data!" 
              : "Try adjusting your search or filters."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedTodos.map((todo: Todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={handleEditTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
        </div>
      )}

      <TodoForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        todo={editingTodo}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
} 