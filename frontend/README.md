# AI LLM Chat App - Frontend

A modern React-based chat interface for interacting with AI models through a backend API.

Built with React, TypeScript, Vite, Tailwind CSS, and Axios.

## Features

* Modern chat interface
* AI conversation support
* Responsive design
* Auto-scroll to latest message
* Markdown rendering
* Clickable links
* Long URL wrapping
* Error handling
* TypeScript support

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* Axios
* React Markdown

## Project Structure

```text
src/
├── components/
│   └── Chat.tsx
│
├── services/
│   └── chat.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## Installation

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:5173
```

## API Integration

The application communicates with a backend AI service using Axios.

Example service structure:

```typescript
import axios from "axios";

export const postChat = (payload: {
  role: string;
  content: string;
}) => {
  return axios.post("/api/chat", payload);
};
```

## Current Functionality

* Send messages to AI backend
* Display AI responses
* Render markdown content
* Support clickable hyperlinks
* Maintain chat history during session
* Automatically scroll to latest message

## Future Improvements

* Streaming responses
* Syntax highlighting
* Chat history persistence
* Dark/light theme
* Multiple AI model selection
* File upload support
* Authentication

## Author

Mir Khan

Full Stack Developer | Software Engineer | React | Angular | Node.js | AI Integrations
