# AI API Wrapper – Backend AI Engineering Assignment

## Overview

This project demonstrates how to integrate a Large Language Model (LLM) into a Node.js + Express backend while following production-ready engineering practices.

The application exposes a REST API that accepts text, sends it to an AI model (Gemini or Groq), validates the response using a schema, and returns structured JSON.

---

## Features

* Node.js + Express backend
* AI-powered text summarization
* Provider abstraction (Gemini / Groq)
* Schema validation using Zod
* Environment-based API keys
* Timeout handling
* Smart retries for transient failures
* Token usage logging
* Estimated cost logging
* Easy provider switching with a single environment variable

---

## Tech Stack

* Node.js
* Express.js
* Groq SDK
* Google GenAI SDK
* Zod
* dotenv

---

## Project Structure

```text
backend/
│
├── src/
│   ├── ai/
│   │   ├── ai.js
│   │   ├── gemini.js
│   │   ├── groq.js
│   │   └── schema.js
│   │
│   ├── routes/
│   │   └── summarize.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd backend
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000

AI_PROVIDER=groq

GROQ_API_KEY=your_groq_api_key

GEMINI_API_KEY=your_gemini_api_key
```

Example configuration is provided in `.env.example`.

---

## Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs at:

```
http://localhost:3000
```

---

## API Endpoint

### POST `/summarize`

#### Request

```json
{
  "text": "Node.js is an open-source JavaScript runtime built on Chrome's V8 engine."
}
```

#### Response

```json
{
  "bullets": [
    "Node.js uses Google's V8 JavaScript engine.",
    "It enables server-side JavaScript execution.",
    "It is widely used for backend application development."
  ]
}
```

---

## Provider Abstraction

Only one file (`src/ai/ai.js`) knows which AI provider is being used.

Switch providers by changing:

```env
AI_PROVIDER=groq
```

or

```env
AI_PROVIDER=gemini
```

No other application code needs to be modified.

---

## Error Handling

The application includes:

* JSON schema validation using Zod
* Graceful handling of invalid AI responses
* Timeout protection
* Retry for HTTP 429 and 5xx errors
* No retry for HTTP 400 errors

---

## Token & Cost Logging

Each request logs:

* Feature name
* Prompt tokens
* Completion tokens
* Total tokens
* Estimated API cost

Example:

```text
Feature: summarize

Prompt Tokens: 128

Completion Tokens: 36

Total Tokens: 164

Estimated Cost: $0.00001
```

---

## Assignment Requirements Checklist

* AI API integration
* Environment variables for API keys
* Provider abstraction layer
* Schema-validated JSON output
* Timeout handling
* Smart retry logic
* Token usage logging
* Estimated cost logging
* REST API endpoint
* Easy provider switching

---

## Future Improvements

* Support additional AI providers (Ollama, OpenAI, Anthropic)
* In-memory caching
* Rate limiting
* Request logging with Morgan
* Docker support
* Unit and integration tests
* API documentation using Swagger

---

## Author

**Sai Surya**

Backend AI Engineering Assignment
