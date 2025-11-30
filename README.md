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

## Security / audit updates performed

- I created a branch `fix/audit-force` and ran `npm audit fix --force` to address all reported vulnerabilities. After the force-fix the npm audit shows no remaining vulnerabilities.
- Important: `npm audit fix --force` applied breaking upgrades (e.g., `expo` and `react-native`) which may require additional validation and testing on your side.
- There are peer dependency warnings in package.json — notably `react-native@0.82.1` may require `react@^19.1.1`. I recommend running and testing the app on a device/emulator and updating `react` (and other peer deps) if you see runtime warnings.

- I also updated `react` to `^19.2.0` to satisfy the `react-native@0.82.1` peer requirement; that change is committed to the `fix/audit-force` branch.

If you want me to continue I can:

1. Upgrade `react` to a compatible version and update any code that needs changes for React 19.
2. Do a staged, manual upgrade of Expo/React Native (safer) and resolve breaking changes iteratively.
3. Keep the `fix/audit-force` branch remote so you can run it in CI — I can open a PR for review.

