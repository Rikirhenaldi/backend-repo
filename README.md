# Backend-app Technical Test

This is a backend project using Express.js and Firebase. The project structure is organized to separate different concerns like configuration, controllers, core application logic, entities, middleware, repositories, and routes.

## Project Structure

├── config/
│ └── firebaseConfig.ts
├── controller/
│ └── api.ts
├── core/
│ └── app.ts
├── entities/
│ └── ApiError.ts
├── middleware/
│ └── authMiddleware.ts
├── repository/
│ └── userCollection.ts
├── routes/
│ └── userRoutes.ts
├── src/
│ └── index.ts
└── package.json


## Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
