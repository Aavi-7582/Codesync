# Realtime Collaborative Code Editor

A real-time collaborative code editor where multiple users can edit code simultaneously with instant synchronization. Built with React, Node.js, and Socket.io.

---

## Features

- **Real-time Collaboration** - Multiple users editing the same code with <50ms latency
- **7 Programming Languages** - JavaScript, Python, HTML, CSS, Java, C++, SQL with syntax highlighting
- **Room-based Sessions** - Create/join rooms with unique IDs for isolation
- **User Presence** - See connected collaborators with avatars
- **CodeMirror Editor** - Professional editor with line numbers, code folding, bracket matching
- **Responsive Design** - Works on desktop and tablets

---

## Tech Stack

**Frontend:** React 19.2 | Vite 7.2 | CodeMirror 6 | Socket.io Client | React Router

**Backend:** Node.js | Express 5.2 | Socket.io 4.8

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/realtime-editor.git
cd realtime-editor
npm install
```

### Run Locally

```bash
# Terminal 1: Start backend (runs on port 5000)
npm run server:dev

# Terminal 2: Start frontend (runs on port 5173)
npm run dev
```

Open `http://localhost:5173` and start collaborating!

### Usage

1. **Create a room** - Enter your username and click "Create"
2. **Share the Room ID** with others
3. **Others join** - They paste the Room ID and join with their username
4. **Edit together** - All changes sync in real-time across all users

---

## Project Structure

```
src/
  components/
    Editor.jsx       # CodeMirror with multi-language support
    Client.jsx       # User presence/avatars
  pages/
    Home.jsx         # Create/join room interface
    EditorPage.jsx   # Main editor page
server.js            # Express + Socket.io backend
```

---

## Key Implementation Details

- **Real-time Sync**: Socket.io events for broadcasting code changes across all connected clients
- **Language Support**: Multiple CodeMirror language modes for syntax highlighting
- **Room Isolation**: Namespace-based Socket.io rooms for data isolation
- **State Management**: React hooks for editor state and user presence

---

## Environment Setup

Create `.env` file:
```env
PORT=5000
NODE_ENV=development
VITE_SOCKET_URL=http://localhost:5000
```

---

## Available Scripts

```bash
npm run dev           # Start frontend with Vite
npm run server:dev    # Start backend with hot reload
npm run build         # Build for production
npm run lint          # Run ESLint
```

---

## What I Learned

This project helped me understand:
- Real-time bidirectional communication with WebSockets (Socket.io)
- Event-driven architecture for synchronizing state across clients
- Full-stack development with React frontend and Node.js backend
- Handling concurrent user sessions and state consistency
- UI/UX for collaborative applications

---