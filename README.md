# AI Chat LLM Assistant

A full-stack application featuring a backend API powered by OpenAI's language models and a frontend interface for interacting with the AI assistant.

## Project Structure

```
ai-chat-llm-assistant/
├── backendapi/          # Express.js backend API
│   ├── package.json
│   └── ...
├── frontend/            # Frontend application
│   └── ...
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

## Setup Instructions

### Backend API Setup

1. Navigate to the backend directory:
   ```bash
   cd backendapi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backendapi` directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000` (or your configured port).

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Backend API

### Technologies Used

- **Express.js** - Web framework
- **OpenAI** - LLM integration
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Features

- RESTful API endpoints for chat interactions
- Integration with OpenAI's language models
- CORS enabled for frontend communication
- Environment-based configuration

### API Endpoints

(Add your API endpoint documentation here)

Example:
- `POST /api/chat` - Send a message to the AI assistant

## Getting Started

1. Setup both backend and frontend as described above
2. Ensure the backend server is running
3. Open the frontend application in your browser
4. Start chatting with the AI assistant!

## Environment Variables

Create a `.env` file in the `backendapi` directory:

```
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

## License

ISC
