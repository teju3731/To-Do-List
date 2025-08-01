import { Todo } from '@/types/todo';

export const sampleTodos: Omit<Todo, 'id' | 'createdAt'>[] = [
  {
    title: 'Complete React Project',
    description: 'Finish the todo list app with all required features including search, filter, and sort functionality.',
    dueDate: '2024-01-15',
    priority: 'High',
    status: 'In Progress',
  },
  {
    title: 'Study TypeScript',
    description: 'Learn advanced TypeScript concepts including generics, utility types, and type guards.',
    dueDate: '2024-01-20',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    title: 'Exercise Routine',
    description: 'Go to the gym and complete the weekly workout plan.',
    dueDate: '2024-01-10',
    priority: 'Low',
    status: 'Completed',
  },
  {
    title: 'Read Programming Book',
    description: 'Continue reading "Clean Code" by Robert C. Martin.',
    dueDate: '2024-01-25',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    title: 'Prepare for Interview',
    description: 'Review data structures, algorithms, and system design concepts.',
    dueDate: '2024-01-30',
    priority: 'High',
    status: 'In Progress',
  },
  {
    title: 'Buy Groceries',
    description: 'Purchase items for the week including fruits, vegetables, and household items.',
    dueDate: '2024-01-12',
    priority: 'Low',
    status: 'Completed',
  },
]; 