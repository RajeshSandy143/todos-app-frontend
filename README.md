# todos-app-frontend

Simple Expo React Native frontend for a TODOs backend.

## Requirements

- Node.js (>= 18 recommended)
- npm or yarn
- expo-cli (optional, you can use `npx expo`)
- A running backend API that exposes the following endpoints:
	- POST /auth/login -> { access_token }
	- POST /auth/signup -> { access_token }
	- GET /todos -> returns array of todos
	- POST /todos -> create todo (body: { title })
	- PUT /todos/:id -> update todo (body: { completed, title })
	- DELETE /todos/:id -> delete todo
	- GET /profile -> user's profile

## Configuration

The frontend reads the API base URL from the environment variable `API_BASE_URL` if present. If it's not set it will fall back to `http://127.0.0.1:8000`.

You can override the API URL by setting an environment variable (in CI or your shell):

```bash
API_BASE_URL="https://api.example.com" npm start
```

## Local setup

1. Install dependencies:

```bash
npm install
# or
# yarn
```

2. Start the app:

```bash
npx expo start
```

3. Make sure you have the backend running and reachable via the configured `API_BASE_URL`.

## Changes implemented

- centralised API base URL into `services/config.js` with env override
- updated `services/api.js` to use the new config
- added delete functionality to each todo in `components/TodoItem.js` (confirmation + API call)
- updated this README with requirements and run/setup instructions
