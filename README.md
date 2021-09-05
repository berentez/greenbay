# GREENBOOK Full-Stack project

- Final exam homework project at Green Fox Academy.

- `frontend`: the frontend code using React
- `backend`: the backend code using Express.js

## Functional requirements

- Register a new user
- Login user
- Saving entries
- Listing entries by some query parameters
- Get entry by id
- Modify entry
- Delete entry

## Version control

- Use a separate git repo for the project
- Meaningful commits of the functionalities
- The repo is available on a git hosting service (GitHub)

## Formatting

- The code is well formatted, follows a styleguide
- Use linter for style checking

## BACKEND

### API

- Create a REST API that satisfies the given functional requirements
- `Optional`: some actions are available only with certain roles (e.g. ADMIN)

### Auth

- Your API should contain protected endpoints that should be authorized with a valid JWT Token
- Use symmetric key to generate tokens with validation date
- The application is validating the token from the request
- The application endpoints return 401 when the token is invalid or missing
- `Optional`: the application endpoints return 403 when the token belongs to a user who doesn't have permission to execute the requested action

### Database

- The application should connect to an SQL database, and store its data there
- The database connection details should not be "hardcoded" into the application, it should be read from envrionment variables.
- The database schema should contain connections between tables (e.g. one-to-many, many-to-many)
- Use a data migration tool to handle the changes of your DB schema

### Tests

- You have a test environment where you connect to a test database (preferably inmemory database)
- You have unit tests
- You have integration tests
- You use mocking

## FRONTEND

### UI

- Use a JS library / framework (React, Angular, Vue, ...) to build your UI
- Create a UI that satisfies the given functional requirements
- Create and use reusable UI components

### Styling

- Use a preprocessor (scss, sass, less, ...) to write more maintainable stylesheets
- `Optional`: your design is responsive
- `Optional`: use a UI library (Bootstrap, Material UI, Ant Design, ...)

### Auth

- Implement a token based authentication flow

### Client - server communication

- Your application is using REST API(s) to fetch all dynamic data of the application
- Your application is using REST API(s) to store all new user input
- Your application is using JWT token to reach the protected API endpoints

### State management

- Use Redux for state management
- `Optional`: Use a Redux middleware (Thunk, Saga, ...)

### Tests

- You have unit tests
- You have integration tests
- You have component tests
