# 🤖 Abhishek Bussa Reddy — AI Portfolio

A personal portfolio website built with **Next.js 14**, **Tailwind CSS**, **OpenAI API**, and **MongoDB**.

## 🚀 Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | Next.js 14 (App Router), React, Tailwind CSS |
| Backend    | Next.js API Routes             |
| AI         | OpenAI GPT-3.5-turbo           |
| Database   | MongoDB + Mongoose             |
| Deployment | Vercel                         |

---

## 📁 Folder Structure

```
ai-portfolio/
├── app/
│   ├── page.tsx               ← Main page (assembles all sections)
│   ├── layout.tsx             ← Root layout + fonts + metadata
│   ├── globals.css            ← Global styles + animations
│   ├── api/
│   │   ├── chat/route.ts      ← AI chatbot API (POST → OpenAI + MongoDB)
│   │   └── contact/route.ts   ← Contact form API (POST → MongoDB)
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Marquee.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Certifications.tsx
│       ├── Experience.tsx
│       ├── Contact.tsx
│       ├── Chatbot.tsx        ← Floating AI chat widget
│       ├── Footer.tsx
│       └── Divider.tsx
├── lib/
│   └── mongodb.ts             ← DB connection with connection pooling
├── models/
│   ├── Message.ts             ← Chat message schema
│   └── Contact.ts             ← Contact form schema
├── .env.example               ← Environment variable template
├── .gitignore                 ← Excludes .env.local, node_modules etc.
└── package.json
```

---

## ⚙️ Local Setup

### Step 1 — Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/ai-portfolio.git
cd ai-portfolio
npm install
```

### Step 2 — Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
OPENAI_API_KEY=sk-your-openai-key-here
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> 🔑 Get OpenAI key: https://platform.openai.com/api-keys  
> 🍃 Get MongoDB URI: https://cloud.mongodb.com (free tier M0)

### Step 3 — Run Development Server

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Database (MongoDB Atlas Setup)

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free **M0** cluster
3. Create a database user (username + password)
4. Whitelist IP: `0.0.0.0/0` (allows Vercel)
5. Click **Connect → Drivers** and copy the URI
6. Paste into `.env.local` as `MONGODB_URI`

**Collections created automatically:**
- `messages` — stores all chatbot conversations
- `contacts` — stores contact form submissions

---

## 🌐 Deployment on Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: AI Portfolio"
git remote add origin https://github.com/YOUR_USERNAME/ai-portfolio.git
git push -u origin main
```

> ⚠️ Make sure `.env.local` is in `.gitignore` — NEVER push API keys!

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Add Environment Variables:
   - `OPENAI_API_KEY` → your OpenAI key
   - `MONGODB_URI` → your MongoDB connection string
5. Click **Deploy** 🚀

---

## ✅ Pre-Submission Checklist

- [ ] Chatbot responding with AI answers
- [ ] Chat messages saved in MongoDB `messages` collection
- [ ] Contact form saving data to `contacts` collection
- [ ] Website is fully responsive (mobile + desktop)
- [ ] No console errors
- [ ] Environment variables set in Vercel dashboard
- [ ] GitHub repository is **public**
- [ ] Vercel live link is working

---

## 🔥 Features

- ✅ Dark glassmorphism UI with gradient accents
- ✅ Animated hero with floating orbs & particles
- ✅ Scroll-triggered reveal animations on every section
- ✅ Rolling marquee ticker
- ✅ Custom animated cursor
- ✅ AI chatbot (OpenAI GPT) with portfolio context
- ✅ Chat history stored in MongoDB
- ✅ Contact form with MongoDB storage
- ✅ Fully responsive (mobile-first)
- ✅ SEO metadata configured
- ✅ TypeScript throughout

---

## 📬 Contact

- Email: bussareddyabhishekreddy@gmail.com
- GitHub: [github.com/AbhishekReddy12-programmer](https://github.com/AbhishekReddy12-programmer)
- LinkedIn: [linkedin.com/in/bussareddy-abhishek-51a4b9341](https://www.linkedin.com/in/bussareddy-abhishek-51a4b9341)
