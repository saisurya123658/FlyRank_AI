# Background Job Queue with BullMQ & OpenAI

## Overview

This project demonstrates how to process slow AI requests using a **background job queue** instead of making users wait for the response.

When a client sends a request, the server immediately accepts it with **HTTP 202 Accepted**, adds the task to a queue, and returns a unique **Job ID**. A separate worker processes the job in the background, and the client can check the job status using a dedicated status endpoint.

This architecture is commonly used in production applications for AI, email delivery, file processing, report generation, and other long-running tasks.

---

## Features

* Fast API response using **HTTP 202 Accepted**
* Background job processing with **BullMQ**
* **Redis** as the message queue
* Separate worker process
* AI request processing using the OpenAI API
* Job status tracking
* Automatic retry on failure
* Simple REST API

---

## Tech Stack

* Node.js
* Express.js
* BullMQ
* Redis
* OpenAI API
* UUID
* dotenv

---

## Project Structure

```text
background-job/
│
├── routes/
│   └── ai.js
│
├── queue.js
├── worker.js
├── jobs.js
├── server.js
├── package.json
├── .env
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/background-job.git
```

Move into the project

```bash
cd background-job
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
OPENAI_API_KEY=your_openai_api_key
```

---

## Start Redis

If using Docker:

```bash
docker run -p 6379:6379 redis
```

---

## Run the Application

Start the Express server

```bash
node server.js
```

Open another terminal and start the worker

```bash
node worker.js
```

---

## API Endpoints

### Create AI Job

**POST**

```
/ai/generate
```

Request

```json
{
  "prompt": "Explain Node.js in 100 words."
}
```

Response

```json
{
  "jobId": "xxxxxxxx",
  "status": "pending"
}
```

Status Code

```
202 Accepted
```

---

### Check Job Status

**GET**

```
/ai/status/:jobId
```

Possible Response

```json
{
  "status": "processing",
  "result": null
}
```

Completed Response

```json
{
  "status": "completed",
  "result": "Node.js is..."
}
```

Failed Response

```json
{
  "status": "failed",
  "result": "Error message"
}
```

---

## How It Works

1. Client sends a prompt to `/ai/generate`.
2. The server creates a unique Job ID.
3. The job is added to the BullMQ queue.
4. The server immediately responds with **202 Accepted**.
5. A background worker picks up the job.
6. The worker calls the OpenAI API.
7. The worker stores the result and updates the job status.
8. The client checks the result using `/ai/status/:jobId`.

---

## Architecture

```text
Client
   │
POST /ai/generate
   │
   ▼
Express Server
   │
Create Job
   │
Return 202 Accepted
   │
   ▼
BullMQ Queue
   │
   ▼
Background Worker
   │
Calls OpenAI API
   │
Updates Job Status
   │
   ▼
GET /ai/status/:jobId
```

---

## Assignment Objectives

* Implement asynchronous background processing
* Use BullMQ for job queues
* Use Redis as the queue backend
* Return immediate responses using HTTP 202
* Process AI requests in a worker
* Track job status
* Retry failed jobs automatically

---

## Future Improvements

* Store jobs in MongoDB or PostgreSQL
* Add authentication
* Add WebSocket notifications instead of polling
* Implement job cancellation
* Add email or Slack alerts for failed jobs
* Deploy using Docker and Render/Railway

---

## Author

**Sai Surya**

Backend AI Engineering – Week 6 Assignment
