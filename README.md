# IdeaSpark 💡

IdeaSpark is a web application to manage ideas, follow-ups, and get AI-generated feedback for each idea.

---

## Features

- Add new ideas with a title, tagline, and improvement notes.
- Track and manage follow-ups for each idea.
- Ask AI questions about specific ideas and receive answers.
- Responsive UI using React and Tailwind CSS.
- Backend powered by Node.js, Express.js, and OpenAI API.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **AI:** OpenAI GPT-3.5 Turbo
- **Environment Management:** dotenv
- **CORS Handling:** cors

---

## Project Structure

ideaspark/
│
├─ server/ # Express backend
│ ├─ index.js # Server entry point
│ └─ .env # Environment variables (ignored in Git)
│
├─ src/ # React frontend
│ ├─ components/ # React components (IdeaCard, Navbar, StatsBar)
│ ├─ App.js # Main frontend app
│ ├─ index.js # React entry point
│ └─ api.js # Optional API utilities
│
├─ package.json
├─ package-lock.json
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md


---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Om21o7/IdeaSprark.git
cd IdeaSprark

Backend Setup
cd server
npm install
reate a .env file in the server folder:

OPENAI_API_KEY=your_openai_api_key_here


Start the backend server:

node index.js


Runs on http://localhost:5000.


Frontend Setup
cd ..
npm install
npm start


Frontend runs on http://localhost:3000.


 ### Usage :
 Open the app in your browser.

Add a new idea using the input field.

Click Add Follow-up to add notes for each idea.

Ask the AI by typing a question and clicking Ask.

AI responses appear below each idea.