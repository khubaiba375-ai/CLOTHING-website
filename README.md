# ZK STORE — $50,000-Level Full-Stack Luxury Fashion E-Commerce Platform

A production-grade, full-stack luxury fashion e-commerce architecture engineered for **ZK STORE (Haute Luxury Atelier)**.

Featuring an integrated Node.js REST API backend, persistent JSON database, reactive client-side frontend, 50-piece bespoke ready-to-wear fashion archive, and real-time logistics tracking across Pakistan.

---

## 🏗️ Full-Stack System Architecture

```
ZK_STORE / zk-store
│
├── 🌐 FRONTEND (Client Layer)
│   ├── index.html                   # HTML5 Entry Point with Universal Bundle
│   ├── css/style.css                # Luxury Typography, Spacing, Animations
│   ├── dist/bundle.js               # Universal Standalone Client Bundle
│   └── js/
│       ├── app.js                   # Dynamic SPA Router & Store Events
│       ├── services/api.js          # REST API Client (Backend Connector + Offline Fallback)
│       ├── data/products.js         # 50 Unique Garments (PKR Pricing)
│       ├── data/categories.js       # 19 Men & Women Categories + Style Edits
│       ├── store/state.js           # Central Reactive State & Event Bus
│       ├── store/storage.js         # LocalStorage Persistence Layer
│       ├── components/              # Navbar, ProductCard, Drawers, Modals, Footer
│       └── pages/                   # All 20 Complete Pages
│
├── ⚙️ BACKEND (Server & API Layer)
│   ├── server.js                    # Integrated HTTP Static + REST API Server
│   ├── start.bat                    # One-Click Full-Stack Launcher
│   └── backend/
│       ├── controllers/
│       │   └── apiRouter.js         # RESTful Endpoint Dispatcher
│       └── data/
│           ├── db.js                # Database Controller & Order Engine
│           └── db.json              # Persistent JSON Database (Orders, Coupons, Users, Messages)
```

---

## 📡 REST API Endpoints (Live on Port 3000)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server status, uptime, products & orders count |
| `GET` | `/api/products` | Filter catalog by `gender`, `category`, `maxPrice`, `sort`, `q` |
| `GET` | `/api/products/:id` | Single garment details, reviews, and stock |
| `POST` | `/api/products/:id/reviews` | Submit verified patron review |
| `GET` | `/api/categories` | Complete Men & Women categories list |
| `GET` | `/api/orders` | List all patron orders |
| `GET` | `/api/orders/:id` | Real-time order tracking & courier milestones |
| `POST` | `/api/orders` | Place new order, validate items, calculate PKR totals, generate TCS tracking |
| `POST` | `/api/coupons/validate` | Validate promo vouchers (`ZKLUXURY10`, `WELCOMEZK`) |
| `POST` | `/api/contact` | VIP concierge inquiry dispatch |
| `POST` | `/api/newsletter` | Private circle subscription |
| `POST` | `/api/auth/login` | Patron session authentication |

---

## 🚀 How to Run the Full-Stack Application

### Option 1: One-Click Windows Launcher (Recommended)
Double-click [`start.bat`](file:///C:/Users/USER/Desktop/ZK_STORE/start.bat) in the `ZK_STORE` desktop folder.
It automatically launches both the **Backend REST API** and **Frontend Storefront** at:
👉 **[http://localhost:3000](http://localhost:3000)**

### Option 2: From VS Code Terminal
Press `` Ctrl + ` `` in VS Code and run:
```powershell
agy-node server.js
```

---

## 💎 Complete Features

1. **Integrated Backend**: Node.js REST API with zero external dependencies, persistent file-based JSON database (`db.json`), order creation, and live courier tracking.
2. **50 Unique Products**: 25 Men's & 25 Women's pieces with realistic PKR pricing, color swatches, size options, and material details.
3. **Resilient API Client**: The frontend seamlessly talks to the backend (`/api/...`) with automatic offline fallback to local storage if running standalone.
4. **Checkout & Order Tracking**: Instant order generation with TCS tracking code (`TCS-XXXXXXXXPK`), celebratory confetti, and 5-stage live progress timeline.

---

&copy; ZK STORE Haute Atelier Ltd.
