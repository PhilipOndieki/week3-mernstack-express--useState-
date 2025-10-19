# Student Dashboard

A React-based student management dashboard that allows you to create, view, edit and delete student records.

## Features

- View list of students with their details (name, email, age)
- Add new students 
- Edit existing student information
- Delete students
- Modern UI with Tailwind CSS
- API integration with backend

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- ESLint 9

## Getting Started

1. Clone the repository
2. Install dependencies:
```sh
npm install
```

3. Create a `.env` file in the root directory with:
```
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```sh
npm run dev
```

## Project Structure

```
student-dashboard/
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── Home.jsx 
│   │   ├── StudentCard.jsx
│   │   └── StudentForm.jsx
│   ├── lib/           # Utility functions
│   │   └── api.js     # API integration
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
├── public/            # Static assets
└── index.html
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The dashboard connects to a backend API with the following endpoints:

- GET `/api/students` - Fetch all students
- POST `/api/students` - Create new student
- PUT `/api/students/:id` - Update student
- DELETE `/api/students/:id` - Delete student

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request