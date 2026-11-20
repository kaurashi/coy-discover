# Coy Discover ❤️

Coy Discover is a swipe-based profile discovery platform inspired by Coy. It allows users to explore profiles, like or pass on people, and find mutual connections through a matching system.

## ✨ Features

- Explore 30+ mock user profiles.
- Swipe right to like and left to pass.
- Smooth drag-based swipe interactions.
- Like and Pass buttons for desktop users.
- Swiped profiles automatically disappear from the feed.
- Swipe history persists across page reloads.
- Mutual like detection and matching system.
- Interactive "It's a Match!" popup.
- Dedicated Matches page for mutual connections.
- Responsive interface for desktop and mobile.
- Empty states when no profiles or matches are available.

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- Tailwind CSS
- Axios
- Lucide React

**Backend**
- Node.js
- Express.js
- PostgreSQL
- Neon Database
- pg
- dotenv
- CORS

## 📁 Project Structure

```text
coy-discover/
├── Frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Discover.jsx
│   │   │   └── Matches.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── routes/
│   │   ├── feed.js
│   │   ├── swipe.js
│   │   └── matches.js
│   ├── server.js
│   ├── seed.js
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL database (Neon recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/kaurashi/coy-discover
cd coy-discover
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=5000
DATABASE_URL=neon_database_url
```

Create the required database tables and seed the database with mock profiles.

Start the backend server:

```bash
npm run dev
```

Backend runs at:

`http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/feed` | Fetch available profiles |
| POST | `/swipe` | Save like or pass actions |
| GET | `/matches` | Fetch mutual matches |

### Swipe API Request

```json
{
  "profileId": 12,
  "action": "like"
}
```

## 🗄️ Database Design

The application uses PostgreSQL with three main tables:

- **profiles:** Stores user profile information and seeded incoming likes.
- **swipes:** Stores like and pass actions.
- **matches:** Stores confirmed mutual matches.

### Matching Logic

A match is created only when the current user likes a profile that has already liked them.

All swipe actions and mutual matches are persisted in PostgreSQL, ensuring that previously swiped profiles do not reappear after refreshing the application.

## 🔒 Environment Variables

Database credentials are stored in environment variables and should never be committed to GitHub.

Make sure `.env` files are included in `.gitignore`.

## 🔮 Future Improvements

- Individual user authentication.
- Real-time chat between mutual matches.
- Profile customization.
- Advanced profile discovery and filtering.

## 👩‍💻 Author

Developed as a standalone Coy Discover project.
