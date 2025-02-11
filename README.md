```md
# Snack or Booze

## Overview
**Snack or Booze** is a React-based web app that allows users to view and add snacks and drinks. It uses React Router for navigation and JSON Server as a mock backend.

## Installation & Setup
### 1. Clone the Repo
```sh
git clone <your-repository-url>
cd snack-or-booze
```
### 2. Install Dependencies
```sh
npm install
```
### 3. Run the App
```sh
npm start
```
This starts both:
- **React frontend** (`react-scripts start`)
- **Mock backend** (`json-server --watch db.json --port 5000`)

To run separately:
```sh
npm run start-fe   # React app
npm run start-be   # JSON Server
```

## Tech Stack
- **React 18** (UI)
- **React Router** (Navigation)
- **Axios** (API requests)
- **Bootstrap** (Styling)
- **JSON Server** (Mock backend)

## Future Enhancements
- Search & filter functionality
- UI improvements
- Authentication for item submissions

---
For questions, feel free to reach out!
```