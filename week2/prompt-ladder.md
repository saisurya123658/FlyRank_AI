# Prompt Ladder

## Baseline Prompt (Weak)

**Prompt:**

> Write backend code.

### Output (Excerpt)

The AI generated a generic Express.js server with a single "Hello World" endpoint. It lacked structure, error handling, validation, and explanations.

---

## Version 1 – Layer Added: Clearer Goal

**Prompt:**

> Build a REST API backend for a Temple Management System using Node.js and Express.

### Output (Excerpt)

The AI generated a REST API with routes related to temple bookings instead of a generic server.

### Notes

- **What changed in the prompt?**
  - Added a clear goal.

- **What improved in the output?**
  - The output became relevant to my actual project instead of being generic.

- **What still failed?**
  - No database integration or validation.

- **What I would try next**
  - Add project context.

---

## Version 2 – Layer Added: Real Context

**Prompt:**

> Build a REST API backend for my Temple Management System using Node.js, Express, and MySQL. The system should allow users to book sevas and allow an admin to view bookings.

### Output (Excerpt)

The AI included booking routes, database tables, and CRUD endpoints.

### Notes

- **What changed in the prompt?**
  - Added real project context.

- **What improved in the output?**
  - The generated API matched my application's requirements.

- **What still failed?**
  - Error handling was still basic.

- **What I would try next**
  - Specify the output format.

---

## Version 3 – Layer Added: Output Format

**Prompt:**

> Build the backend and organize the answer into:
>
> 1. Folder Structure
> 2. Database Schema
> 3. API Endpoints
> 4. Express Code
> 5. Testing Steps

### Output (Excerpt)

The response became organized into clear sections.

### Notes

- **What changed in the prompt?**
  - Added an output format.

- **What improved in the output?**
  - The answer became much easier to follow and implement.

- **What still failed?**
  - Authentication was missing.

- **What I would try next**
  - Add constraints.

---

## Version 4 – Layer Added: Constraints

**Prompt:**

> Build the backend using only Express.js, MySQL, and plain JavaScript. Do not use TypeScript, authentication libraries, or ORMs.

### Output (Excerpt)

The AI generated code that matched the specified technology stack.

### Notes

- **What changed in the prompt?**
  - Added implementation constraints.

- **What improved in the output?**
  - The code became compatible with my current project.

- **What still failed?**
  - The code lacked validation and production-ready practices.

- **What I would try next**
  - Add quality criteria.

---

## Version 5 – Layer Added: Quality Criteria

**Prompt:**

> Build the backend using Express.js and MySQL. Include proper HTTP status codes, input validation, error handling, clean code structure, and comments explaining important decisions.

### Output (Excerpt)

The AI generated cleaner code with validation, meaningful HTTP status codes, and better project organization.

### Notes

- **What changed in the prompt?**
  - Added quality criteria.

- **What improved in the output?**
  - The backend became much closer to production quality and easier to understand.

- **What still failed?**
  - The generated validation logic still required manual review.

- **What I would try next**
  - Ask the AI to review the generated code for security and edge cases.

---

## Honest Observation

Adding the output format helped readability, but it did not improve the actual code quality. The biggest improvement came from adding project context and quality criteria.

---

# Final Reusable Prompt

Build a REST API backend for a Temple Management System using Node.js, Express.js, and MySQL.

The system should allow users to book temple services and allow administrators to manage bookings.

Organize the response into:

1. Project Folder Structure
2. Database Schema
3. REST API Endpoints
4. Express.js Implementation
5. Error Handling
6. Input Validation
7. Testing with Postman

Requirements:

- Use plain JavaScript.
- Use proper HTTP status codes.
- Include input validation.
- Write clean, modular code.
- Explain important implementation decisions.
- Ensure the solution is suitable for a backend engineering internship project.
