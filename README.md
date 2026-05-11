<p align="center">
  <img src="public/icon.png" alt="Lonie Logo" width="120" height="120" style="border-radius: 24px;" />
</p>

<h1 align="center">Lonie — AI Language Coach</h1>

<p align="center">
  <strong>Master real-world fluency through AI-powered roleplay scenarios.</strong><br/>
  Speak. Get corrected. Build confidence. No judgement.
</p>

<p align="center">
  <a href="https://lonieapp.com">🌐 Website</a> •
  <a href="https://apps.apple.com/app/lonie/id6744076938">📱 App Store</a> •
  <a href="https://play.google.com/store/apps/details?id=com.lonie.app">🤖 Google Play</a>
</p>

---

## 📖 About

**Lonie** is a full-stack AI language learning application that helps users overcome their fear of speaking by practicing real-life conversational scenarios with an AI coach. Unlike traditional language apps that focus on vocabulary and grammar drills, Lonie simulates realistic social situations — from ordering coffee at a busy café to negotiating a salary raise with a tough boss — and provides instant grammatical feedback powered by OpenAI's GPT-4o-mini.

The app supports **6 languages**: 🇬🇧 English, 🇪🇸 Spanish, 🇫🇷 French, 🇩🇪 German, 🇧🇷 Portuguese, and 🇹🇷 Turkish.

> This repository contains the **landing page & marketing website** for Lonie. The backend API and mobile app are maintained in private repositories.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎭 **30+ Roleplay Scenarios** | Real-life situations across 4 difficulty levels (Easy → Very Hard) including job interviews, visa interviews, hotel complaints, dating, negotiation, and more |
| 🗣️ **Voice-First Interaction** | Speech recognition + text-to-speech for natural conversation practice |
| 🤖 **AI-Powered Conversations** | Dynamic, context-aware responses using OpenAI GPT-4o-mini with character moods and adjustable anger levels |
| 📝 **Instant Grammar Feedback** | After each conversation, the AI analyzes your messages and highlights grammar/vocabulary mistakes with corrections |
| 💬 **Free Talk Mode** | Open-ended conversation on any topic with real-time grammar corrections |
| ✏️ **Custom Scenarios** | Create your own roleplay situations with custom goals |
| 📊 **Level Assessment** | AI-driven CEFR level placement test (A1–C2) |
| 🔥 **Streak System** | Daily activity tracking to build consistent practice habits |
| ⭐ **XP & Leveling** | Earn experience points from conversations to level up |
| 🏆 **Weekly Leaderboard** | Compete with other users — Top 10 win free Premium every Sunday |
| ❤️ **Phrasebook** | Save AI corrections for later review |
| 🌍 **6 Languages** | Full UI localization + scenario translations for EN, ES, FR, DE, PT, TR |
| 👑 **Premium Subscriptions** | In-app purchases via Apple App Store & Google Play |
| 📧 **Passwordless Auth** | Secure email OTP authentication — no passwords needed |

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                 Mobile App (iOS & Android)                │
│               React Native + Expo (SDK 54)               │
│         Speech Recognition · RevenueCat · Haptics        │
└──────────────────────────┬──────────────────────────────┘
                           │ HTTPS
                           ▼
┌─────────────────────────────────────────────────────────┐
│               AWS API Gateway (HTTP API)                 │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│              AWS Lambda (Python 3.12)                     │
│          FastAPI + Mangum (Serverless Adapter)            │
│                                                           │
│  ┌─────────┐  ┌──────────┐  ┌────────────┐  ┌────────┐  │
│  │  Chat   │  │ Feedback │  │  Auth/OTP  │  │ Admin  │  │
│  │ Engine  │  │ Analyzer │  │  (Resend)  │  │  API   │  │
│  └────┬────┘  └────┬─────┘  └────────────┘  └────────┘  │
│       │            │                                      │
│       ▼            ▼                                      │
│  ┌─────────────────────┐                                  │
│  │   OpenAI GPT-4o-mini │                                 │
│  └─────────────────────┘                                  │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│             Amazon RDS (PostgreSQL)                       │
│        Users · Streaks · Phrasebook · Leaderboard        │
└─────────────────────────────────────────────────────────┘

┌──────────────────┐  ┌───────────────────┐
│  Landing Page    │  │  Admin Dashboard  │
│  React + Vite    │  │   React + Vite    │
│  (This Repo) ◄───│  │   (Private)       │
└──────────────────┘  └───────────────────┘
```

---

## 🛠️ Tech Stack

### Backend (Private Repo)
| Technology | Purpose |
|---|---|
| **Python 3.12** | Runtime |
| **FastAPI** | REST API framework |
| **Mangum** | AWS Lambda adapter for ASGI apps |
| **OpenAI API** (GPT-4o-mini) | AI conversation engine & grammar analysis |
| **SQLAlchemy** | ORM for database operations |
| **PostgreSQL** (Amazon RDS) | Production database |
| **Resend** | Transactional email for OTP authentication |
| **SlowAPI** | Rate limiting per IP |
| **AWS SAM** | Infrastructure as Code (Lambda + API Gateway) |
| **Docker** | Containerized deployment |
| **EventBridge (Cron)** | Automated weekly leaderboard reset |

### Mobile App (Private Repo)
| Technology | Purpose |
|---|---|
| **React Native 0.81** | Cross-platform mobile framework |
| **Expo SDK 54** | Development & build toolchain |
| **expo-speech-recognition** | On-device speech-to-text |
| **expo-speech** | Text-to-speech for AI responses |
| **RevenueCat** | In-app subscription management (iOS + Android) |
| **AsyncStorage** | Local data persistence |
| **expo-haptics** | Tactile feedback for interactions |
| **Lucide Icons** | UI iconography |
| **EAS Build** | Cloud builds for App Store & Google Play |

### Landing Page (This Repo)
| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Vite 5** | Build tool & dev server |
| **React Router 7** | Client-side routing |
| **Lucide React** | Icon library |
| **Cloudflare Pages** | Static hosting & CDN |

### Infrastructure & Services
| Service | Purpose |
|---|---|
| **AWS Lambda** | Serverless compute (zero idle cost) |
| **AWS API Gateway** | HTTP API routing & throttling |
| **Amazon RDS** | Managed PostgreSQL database |
| **AWS SAM** | Deployment & Infrastructure as Code |
| **RevenueCat** | Cross-platform subscription management |
| **Resend** | Transactional email delivery |
| **Cloudflare** | DNS, CDN, DDoS protection, static hosting |
| **EAS (Expo)** | Mobile app builds & OTA updates |

---

## 🎮 Scenario Examples

The app features **30+ carefully crafted scenarios** across difficulty levels:

| Difficulty | Scenarios |
|---|---|
| 🟢 **Easy** | Café Order, Lost Luggage, Tech Support, Allergy Order, Flea Market, Noisy Cinema, Bar Pickup |
| 🟡 **Medium** | Hotel Complaint, Traffic Stop, First Date, Doctor Visit, Office Gossip, Friend Apology, Strict Professor, Decline Invitation |
| 🔴 **Hard** | Istanbul Taxi, Job Interview, Salary Negotiation, Gym Cancellation, The Breakup, Noisy Neighbor, Broken Heating, Pitch to Boss |
| 🟣 **Very Hard** | Car Salesman, Visa Interview, Startup Pitch (Shark Tank), Insurance Bill Dispute, Border Customs |

Each scenario features:
- 🎭 A unique AI character with distinct personality traits
- 🏁 Win/loss conditions based on conversation quality
- 📈 Progressive difficulty scoring (0–100)
- 😤 Adjustable AI mood & anger levels for varied challenge
- 🌐 Full translations in all 6 supported languages

---

## 🚀 Running the Landing Page Locally

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **yarn**

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
website/
├── public/              # Static assets (icons, images, redirects)
├── src/
│   ├── pages/
│   │   ├── Home.jsx     # Main landing page
│   │   ├── Blog.jsx     # Blog / content page
│   │   ├── Privacy.jsx  # Privacy policy
│   │   └── Terms.jsx    # Terms of service
│   ├── components/
│   │   └── Layout.jsx   # Shared layout (navbar, footer)
│   ├── App.jsx          # Router configuration
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles & design system
│   └── main.jsx         # Entry point
├── index.html           # SEO-optimized HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies & scripts
```

---

## 🔌 API Overview

The backend exposes a RESTful API deployed on AWS Lambda. Key endpoints include:

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/chat` | Send a message in a roleplay scenario and receive AI response |
| `POST` | `/feedback` | Get detailed grammar feedback on user messages |
| `GET` | `/profile/{id}` | Retrieve user profile (streak, XP, level, premium status) |
| `POST` | `/auth/request-otp` | Request a one-time password via email |
| `POST` | `/auth/verify-otp` | Verify OTP and authenticate the user |
| `GET` | `/leaderboard` | Get the weekly competition leaderboard |
| `POST` | `/phrasebook` | Save an AI correction to the personal phrasebook |
| `POST` | `/webhook/revenuecat` | Handle subscription lifecycle events |

---

## 📄 License

This project is proprietary software. All rights reserved.  
© 2025 Lonie. Unauthorized reproduction or distribution is prohibited.

---

<p align="center">
  Built with ❤️ by the Lonie team<br/>
  <a href="https://lonieapp.com">lonieapp.com</a>
</p>
