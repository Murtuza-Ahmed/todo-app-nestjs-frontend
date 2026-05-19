# todo-app-nestjs-frontend

Project Description (Simple)

This is a Todo Application built using NestJS (backend) and a frontend framework (React/Next.js).

The application allows users to:

Register and login securely using JWT authentication
Create, read, update, and delete todos
Access protected routes using login token
Manage user roles (admin and user)

The backend is built with:

PostgreSQL database
TypeORM for database operations
JWT authentication for secure login
Role-based access control (admin/user)
Authentication Flow
Admin user is created using a seed script
User logs in using email and password
Server returns an access token
Token is used to access protected APIs
Core Features
User authentication (login/logout)
Todo management (CRUD operations)
Secure API using JWT
Admin role support
Database-driven architecture
Frontend Goal

Frontend will:

Connect to backend APIs
Store JWT token (localStorage or cookies)
Show user todos after login
Allow create/update/delete todo actions
Handle authentication state
In Short

This project is a full-stack Todo system with secure authentication, role management, and database integration.
