<div align="center">

# TuneTalk

### Modern Music Streaming Platform

A full-stack, Spotify-inspired music streaming application that lets users sign up, explore a rich music library, curate personalized playlists, and enjoy seamless playback — with a sleek, responsive UI and comprehensive social features.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express-4-000000?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8-13AA52?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Screenshots](#sceenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Deployment](#deployment)

---

## Overview

**TuneTalk** is a modern music streaming platform built with cutting-edge web technologies. It delivers an intuitive, responsive experience that empowers users to discover, organize, and enjoy music with features like personalized playlists, advanced search, and a full-featured music player.

The platform provides:

- A **secure authentication system** with OAuth and session management
- A **comprehensive music library** with browsing and discovery
- **Playlist management** for creating and organizing music collections
- A **responsive, mobile-first design** that works seamlessly across all devices
- **Real-time playback controls** with shuffle, repeat, and queue management
- **Dark mode** for comfortable viewing at any time

---

## Screenshots

### Product Preview

![Product Preview](./thumbnail.png)
*Full-width hero section with product preview.*

---

## Features

### Music Discovery & Browsing

| Feature | Description |
|---------|-------------|
| **Music Library** | Browse an extensive collection of songs, albums, and artists |
| **Advanced Search** | Instantly find songs by title, artist, or album |
| **Artist & Album Pages** | Dedicated pages showcasing artist information and discographies |
| **Trending & Recommendations** | Personalized suggestions based on user activity |

### Playlist Management

| Feature | Description |
|---------|-------------|
| **Create Playlists** | Build custom music collections with an intuitive interface |
| **Edit Playlists** | Rename, reorder, and manage playlist content |
| **Delete Playlists** | Remove playlists and manage library cleanup |
| **Share Playlists** | Share collections with other users or via link |

### Playback & Controls

| Feature | Description |
|---------|-------------|
| **Music Player** | Full-featured player with play, pause, and skip controls |
| **Shuffle & Repeat** | Shuffle songs or repeat entire playlists/tracks |
| **Volume Control** | Adjust volume with a smooth slider interface |
| **Progress Tracking** | Real-time progress bar with seek functionality |
| **Queue Management** | View and manage upcoming tracks in the queue |

### User Experience

| Feature | Description |
|---------|-------------|
| **User Authentication** | Secure sign-up and login with OAuth support |
| **User Profiles** | Personalized user profiles with favorites and listening history |
| **Responsive Design** | Optimized for desktop, tablet, and mobile devices |
| **Dark Mode** | Eye-friendly dark theme with seamless toggle |
| **Persistent Sessions** | Remember user preferences and playback state |

---

## Tech Stack

### Frontend
- **[React 18](https://react.dev/)** — UI library with hooks
- **[Vite 5](https://vitejs.dev/)** — Next generation frontend build tool
- **[TypeScript](https://www.typescriptlang.org/)** — Static type checking for type safety
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** — Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** — Beautiful icon library
- **[Zustand](https://github.com/pmndrs/zustand)** — Lightweight state management
- **[Axios](https://axios-http.com/)** — HTTP client for API requests
- **[React Router DOM v6](https://reactrouter.com/)** — Client-side routing
- **[Socket.IO Client](https://socket.io/docs/v4/socket-io-client-api/)** — Real-time communication
- **[React Hot Toast](https://react-hot-toast.com/)** — Toast notifications
- **[Clerk React](https://clerk.com/)** — Authentication & user management

### Backend
- **[Node.js](https://nodejs.org/)** — JavaScript runtime
- **[Express.js 4](https://expressjs.com/)** — Web application framework
- **[MongoDB 8](https://www.mongodb.com/)** — NoSQL database
- **[Mongoose](https://mongoosejs.com/)** — MongoDB object modeling
- **[Socket.IO](https://socket.io/)** — Real-time bidirectional communication
- **[Clerk Express](https://clerk.com/)** — Authentication middleware
- **[Cloudinary](https://cloudinary.com/)** — Image/media management service
- **[Node Cron](https://www.npmjs.com/package/node-cron)** — Task scheduling
- **[Express File Upload](https://www.npmjs.com/package/express-fileupload)** — File handling
- **[CORS](https://github.com/expressjs/cors)** — Cross-Origin Resource Sharing

---

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│               Frontend (React + Vite)                        │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ React Components (UI Layer)                            │ │
│  │ - Music Library                                        │ │
│  │ - Playlist Management                                 │ │
│  │ - Music Player                                        │ │
│  │ - User Profile                                        │ │
│  └────────────────────────────────────────────────────────┘ │
│  - State Management: Zustand                               │
│  - Routing: React Router v6                                │
│  - Styling: Tailwind CSS + Radix UI                        │
└──────────────────────┬───────────────────────────────────────┘
                       │ HTTP + WebSocket (Socket.IO)
                       ▼
┌──────────────────────────────────────────────────────────────┐
│             Backend (Express.js)                             │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              API Routes & Services                     │ │
│  │  - /api/auth       (Clerk)                             │ │
│  │  - /api/songs      (Music library)                     │ │
│  │  - /api/albums     (Album management)                  │ │
│  │  - /api/playlists  (User playlists)                    │ │
│  │  - /api/admin      (Admin controls)                    │ │
│  │  - /api/stats      (Analytics)                         │ │
│  └────────────────────────────────────────────────────────┘ │
│  - Real-time: Socket.IO                                     │
│  - Media: Cloudinary integration                            │
│  - Scheduling: Node Cron                                    │
└──────────────────────┬───────────────────────────────────────┘
                       │ Database Query
                       ▼
┌──────────────────────────────────────────────────────────────┐
│          MongoDB (NoSQL Database)                            │
│  - Users & Authentication                                   │
│  - Songs & Albums                                           │
│  - Playlists                                                │
│  - User Activity & Statistics                               │
└──────────────────────────────────────────────────────────────┘
```

### Data Flow

```
User Interaction
     │
     ▼
React Component (Frontend)
     │
     ├─ State Management (Zustand)
     ├─ API Call (Axios)
     └─ Real-time Events (Socket.IO)
             │
             ▼
        Express.js API
             │
             ├─ Route Handler
             ├─ Clerk Authentication
             ├─ Business Logic
             ├─ Cloudinary (Media)
             └─ Mongoose Query
                     │
                     ▼
                  MongoDB
                     │
                     ▼
              Response to Client
                     │
                     ▼
          UI Update (React)
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v10 or higher
- **MongoDB** (local or cloud via MongoDB Atlas)
- A **Clerk** account for authentication
- A **Cloudinary** account for media management
- Git for version control

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/tunetalk.git
cd tunetalk

# 2. Install backend dependencies
cd backend
npm install

# 3. Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

#### Backend - Create `.env` in `/backend`:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tunetalk

# Clerk Authentication
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Cloudinary Media Management
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# CORS
CORS_ORIGIN=http://localhost:5173
```

#### Frontend - Create `.env.local` in `/frontend`:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api

# Clerk Configuration
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Running the App

**Terminal 1 - Start Backend Server:**
```bash
cd backend
npm run dev
```

Backend will run on `http://localhost:3000`

**Terminal 2 - Start Frontend Dev Server:**
```bash
cd frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

**Production Build:**
```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm start
```

---

## Project Structure

```
TuneTalk/
│
├── frontend/                     # React + Vite Frontend
│   ├── src/
│   │   ├── pages/                # Route pages
│   │   │   ├── Home.tsx
│   │   │   ├── Library.tsx
│   │   │   ├── Playlists.tsx
│   │   │   └── Profile.tsx
│   │   │
│   │   ├── components/           # Reusable React components
│   │   │   ├── Player/           # Music player component
│   │   │   ├── Sidebar/          # Navigation sidebar
│   │   │   ├── Playlist/         # Playlist components
│   │   │   ├── Header/           # Header component
│   │   │   ├── MusicCard/        # Song/album cards
│   │   │   └── ui/               # Radix UI components
│   │   │
│   │   ├── hooks/                # Custom React hooks
│   │   │   ├── usePlayer.ts      # Player state management
│   │   │   ├── useAuth.ts        # Authentication hook
│   │   │   └── useMusicLibrary.ts# Music library hook
│   │   │
│   │   ├── lib/                  # Utility functions
│   │   │   ├── api.ts            # Axios API client
│   │   │   ├── socket.ts         # Socket.IO setup
│   │   │   └── utils.ts          # Helper functions
│   │   │
│   │   ├── store/                # Zustand state management
│   │   │   ├── playerStore.ts
│   │   │   ├── authStore.ts
│   │   │   └── musicStore.ts
│   │   │
│   │   ├── types/                # TypeScript definitions
│   │   │   └── index.ts
│   │   │
│   │   ├── App.tsx               # Main app component
│   │   └── main.tsx              # Entry point
│   │
│   ├── public/                   # Static assets
│   ├── .env.local                # Environment variables
│   ├── vite.config.ts            # Vite config
│   ├── tsconfig.json             # TypeScript config
│   ├── tailwind.config.js        # Tailwind config
│   └── package.json              # Dependencies
│
├── backend/                      # Express.js Backend
│   ├── src/
│   │   ├── routes/               # API route handlers
│   │   │   ├── song.route.js     # Song endpoints
│   │   │   ├── album.route.js    # Album endpoints
│   │   │   ├── user.route.js     # User endpoints
│   │   │   ├── admin.route.js    # Admin endpoints
│   │   │   ├── auth.route.js     # Auth endpoints
│   │   │   └── stat.route.js     # Statistics endpoints
│   │   │
│   │   ├── models/               # Mongoose schemas
│   │   │   ├── Song.js
│   │   │   ├── Album.js
│   │   │   ├── User.js
│   │   │   └── Stats.js
│   │   │
│   │   ├── lib/                  # Utility functions
│   │   │   ├── db.js             # MongoDB connection
│   │   │   ├── socket.js         # Socket.IO initialization
│   │   │   └── cloudinary.js     # Cloudinary helpers
│   │   │
│   │   ├── middleware/           # Express middleware
│   │   │   ├── auth.js           # Clerk authentication
│   │   │   └── errorHandler.js   # Error handling
│   │   │
│   │   ├── seeds/                # Database seed scripts
│   │   │   ├── songs.js
│   │   │   └── albums.js
│   │   │
│   │   ├── controllers/          # Business logic (optional)
│   │   │
│   │   └── index.js              # App entry point
│   │
│   ├── .env                      # Environment variables
│   ├── package.json              # Dependencies
│   └── nodemon.json              # Nodemon config

```

---

## Key Components

### Music Player
A fully-featured player component with:
- Play/pause controls
- Previous/next track navigation
- Shuffle and repeat modes
- Volume control
- Progress bar with seek functionality
- Real-time duration display

### Sidebar Navigation
- Quick access to home, music library, and playlists
- User profile menu
- Theme toggle (dark mode)
- Create playlist button

### Playlist Manager
- Create new playlists
- Add/remove songs from playlists
- Rename and delete playlists
- Drag-and-drop reordering

---

## Deployment

### Frontend - Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from frontend directory
cd frontend
vercel --prod
```

Set `VITE_API_BASE_URL` environment variable in Vercel settings.

### Backend - Railway / Render / Heroku

**Environment Variables:**
- `MONGODB_URI` — MongoDB Atlas connection string
- `CLERK_SECRET_KEY` — Clerk secret key
- `CLOUDINARY_*` — Cloudinary credentials
- `PORT` — Port number (default: 3000)
- `NODE_ENV` — Set to `production`

```bash
# Start production server
cd backend
npm start
```

### Docker Deployment

**Backend Dockerfile:**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --omit=dev
COPY backend/src ./src
EXPOSE 3000
CMD ["npm", "start"]
```

**Frontend Dockerfile:**
```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/src ./src
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## NPM Scripts

### Frontend Scripts (from `/frontend`)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server (port 5173) |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

### Backend Scripts (from `/backend`)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start server with nodemon (hot reload) |
| `npm start` | Start production server |
| `npm run seed:songs` | Seed database with sample songs |
| `npm run seed:albums` | Seed database with sample albums |

---

<div align="center">

Built with React, Express.js, MongoDB, and Vite

</div>
