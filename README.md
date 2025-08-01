# Todo List App

A responsive Todo List App built with Next.js, Redux Toolkit, TypeScript, and Tailwind CSS. This application allows users to efficiently manage their tasks with advanced features like search, filtering, and sorting.

## Features

### Core Features
- ✅ **Add New Task** - Create tasks with title, description, due date, priority, and status
- ✅ **Edit/Delete Task** - Modal-based editing and deletion with confirmation
- ✅ **Real-time Search** - Search tasks by title or description
- ✅ **Advanced Filtering** - Filter by status (All, Pending, In Progress, Completed) and priority (All, High, Medium, Low)
- ✅ **Sorting** - Sort by due date, priority, or creation time (ascending/descending)
- ✅ **State Management** - Redux Toolkit for efficient state management
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

### Bonus Features
- ✅ **Task Grouping** - Visual grouping by status and priority
- ✅ **Toast Notifications** - User feedback for all actions
- ✅ **Sample Data** - Load sample tasks to test functionality
- ✅ **Modern UI/UX** - Clean, intuitive interface with smooth animations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **UI Components**: Custom components with responsive design

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-list-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with Redux provider
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Providers.tsx      # Redux provider wrapper
│   ├── TodoList.tsx       # Main todo list component
│   ├── TodoItem.tsx       # Individual todo item
│   ├── TodoForm.tsx       # Add/edit todo form
│   └── SearchAndFilter.tsx # Search and filter controls
├── lib/                   # Redux store and utilities
│   ├── store.ts           # Redux store configuration
│   ├── todoSlice.ts       # Redux slice for todos
│   ├── hooks.ts           # TypeScript hooks for Redux
│   └── sampleData.ts      # Sample todo data
└── types/                 # TypeScript type definitions
    └── todo.ts            # Todo interface definitions
```

## Usage

### Adding a Task
1. Click the "Add New Task" button
2. Fill in the required fields (title is mandatory)
3. Set optional fields like description, due date, priority, and status
4. Click "Add Task" to save

### Editing a Task
1. Click the edit icon (pencil) on any task card
2. Modify the task details in the modal
3. Click "Update Task" to save changes

### Deleting a Task
1. Click the delete icon (trash) on any task card
2. Confirm the deletion in the popup dialog

### Searching and Filtering
- Use the search bar to find tasks by title or description
- Use the status filter to show tasks by their status
- Use the priority filter to show tasks by priority level
- Combine multiple filters for precise results

### Sorting
- Choose a sort field (Creation Time, Due Date, or Priority)
- Select sort order (Ascending or Descending)
- Results update automatically

### Sample Data
- Click "Load Sample Data" when the app is empty to populate with example tasks
- This helps demonstrate all features quickly

## Features in Detail

### Task Management
- **Title**: Required field for task identification
- **Description**: Optional detailed description
- **Due Date**: Optional deadline with date picker
- **Priority**: Low, Medium, or High priority levels
- **Status**: Pending, In Progress, or Completed status

### Search Functionality
- Real-time search as you type
- Searches both title and description
- Case-insensitive matching

### Filtering System
- **Status Filter**: Filter by task status
- **Priority Filter**: Filter by priority level
- **Combined Filters**: Use multiple filters simultaneously

### Sorting Options
- **Creation Time**: Sort by when tasks were created
- **Due Date**: Sort by task deadlines
- **Priority**: Sort by priority level (High → Medium → Low)
- **Order**: Ascending or descending order

### Responsive Design
- Mobile-first approach
- Grid layout adapts to screen size
- Touch-friendly interface
- Optimized for all device types

## State Management

The app uses Redux Toolkit for efficient state management:

- **Todos**: Array of all todo items
- **Search Term**: Current search query
- **Status Filter**: Current status filter selection
- **Priority Filter**: Current priority filter selection
- **Sort By**: Current sort field
- **Sort Order**: Current sort direction

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Icons from Lucide React
- State management with Redux Toolkit
