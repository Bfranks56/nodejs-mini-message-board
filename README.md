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
- **Responsive Design**: Clean and simple user interface

## Project Structure

```
├── app.js                 # Main application file
├── routes/
│   └── index.js          # Route handlers
├── views/
│   ├── index.ejs         # Main message board page
│   ├── form.ejs          # New message form
│   └── message.ejs       # Individual message details
├── public/
│   └── stylesheets/      # CSS files
└── package.json
```

## Routes

- `GET /` - Display all messages
- `GET /new` - Show new message form
- `POST /new` - Process new message submission
- `GET /messages/:id` - Display individual message details

## Prerequisites

- Node.js (version 14 or higher)
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

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. View existing messages on the homepage
4. Click "Add New Message" to create a new message
5. Click "Open" next to any message to view full details

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Embedded JavaScript templating
- **CSS** - Styling and layout

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
