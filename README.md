# Mini Message Board

A simple message board application built with Node.js, Express.js, and EJS as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) curriculum.

## Project Overview

This project is designed to practice Express.js fundamentals including:

- Setting up Express routes
- Using EJS templating engine
- Handling GET and POST requests
- Processing form data
- Working with URL parameters

## Features

- **View Messages**: Display all messages on the main page with user, text, and timestamp
- **Add New Messages**: Form to submit new messages to the board
- **Message Details**: Individual page for each message with full details
- **Navigation**: Reusable navbar component for easy navigation
- **Auto-restart Development**: Built-in watch mode for development
- **Code Formatting**: Prettier integration for consistent code style

## Project Structure

```
├── app.js                 # Main application file with Express setup
├── .env                   # Environment variables (PORT configuration)
├── routes/
│   └── indexRouter.js     # All route handlers and message data
├── views/
│   ├── index.ejs          # Main message board page
│   ├── form.ejs           # New message form
│   ├── message.ejs        # Individual message details
│   └── navbar.ejs         # Reusable navigation component
├── .vscode/
│   └── settings.json      # VS Code formatting settings
├── .prettierrc            # Prettier configuration
├── .gitignore             # Git ignore rules
└── package.json
```

## Routes

- `GET /` - Display all messages with navigation
- `GET /new` - Show new message form
- `POST /new` - Process new message submission and redirect
- `GET /messages/:id` - Display individual message details by array index

## Prerequisites

- Node.js (version 18 or higher for --watch support)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Bfranks56/nodejs-mini-message-board.git
   cd nodejs-mini-message-board
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```bash
   PORT=3000
   ```

## Usage

1. **Development mode** (with auto-restart):

   ```bash
   npm start
   ```

2. **Format code**:

   ```bash
   npm run format
   ```

3. **Check code formatting**:

   ```bash
   npm run format:check
   ```

4. Open your browser and navigate to `http://localhost:3000`

5. **Navigate the app**:
   - View all messages on the homepage
   - Click "Add Message" in navigation to create new messages
   - Click "Open" next to any message to view full details
   - Use navigation links to move between pages

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Embedded JavaScript templating
- **dotenv** - Environment variable management
- **Prettier** - Code formatting
- **CSS** - Inline styling for simple UI

## Development Features

- **Watch Mode**: Automatic server restart on file changes using Node.js `--watch`
- **Code Formatting**: Prettier configured for consistent code style
- **VS Code Integration**: Format on save enabled
- **Environment Variables**: Port configuration via `.env` file

## Learning Objectives

This project demonstrates:

- Basic Express.js application setup
- Route handling (GET and POST)
- Template rendering with EJS
- Form data processing with `express.urlencoded()`
- URL parameters and routing
- MVC-like structure organization

## Assignment Source

This project is part of The Odin Project's NodeJS curriculum:
[Mini Message Board Lesson](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board)

## License

ISC
