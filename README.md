# TreeMatch

TreeMatch is a web application that helps users find the ideal tree to plant in their garden by guiding them through a questionnaire.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation
   git clone
   cd tree-match
   npm install
   npm start

### API

The application interacts with the following API endpoints:

GET /api/begin: Fetches the first question.
POST /api/answer: Submits the user's answer and fetches the next question or a tree match.
