# Todo App
An simple TodoApp maded to practice skills with React, Node.js, NestJS, PostgreSQL, and Docker.

## Tech Stack

- Frontend: React + Vite + TypeScript
- Backend: NestJS + TypeScript
- Database: PostgreSQL
- Proxy: Nginx
- Containerization: Docker & Docker Compose

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Clean and responsive UI
- Containerized development environment
- Database persistence

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd todo_node
```

2. Start the application:
```bash
docker-compose up --build
```

3. Access the application:
- Frontend: http://localhost
- Backend API: http://localhost/api
- Database: localhost:5432

## Project Structure

```
todo_node/
├── frontend/          # React application
├── backend/           # NestJS API
├── nginx/             # Nginx configuration
├── postgres/          # PostgreSQL data
└── docker-compose.yml # Docker composition
```

## Development

### Frontend
- Built with React + Vite
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture

### Backend
- NestJS framework
- RESTful API endpoints
- PostgreSQL integration
- TypeScript implementation

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo
