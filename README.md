<p align="center">
  <img src="public/avatar.png" alt="Amanjot Singh" width="140" />
</p>

<h1 align="center">Amanjot Singh — Portfolio</h1>

<p align="center">
  <b>AI + Full Stack Developer</b><br/>
  A cinematic, dark-themed portfolio built with React, TypeScript, and Framer Motion.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## ✨ Features

- **Cinematic Dark Theme** — Deep navy palette with electric blue, cyan, and purple accents
- **Animated Hero** — Floating 2D avatar with pulsing glow, typewriter text effect, and shimmer tagline
- **Interactive Skills Orbit** — Tech stack displayed in rotating orbital rings
- **Project Showcase** — Glass-morphism cards with live demo & GitHub links
- **Contact Form** — EmailJS-powered form that sends messages directly to your inbox
- **Custom Cursor** — Reactive cursor with spring physics and blend mode
- **Particle Field** — Ambient floating particles in the background
- **Scroll Progress** — Top-of-page progress indicator
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Smooth Animations** — Framer Motion reveal animations on every section

## 🗂️ Sections

| Section       | Description                                            |
|---------------|--------------------------------------------------------|
| **Hero**      | Avatar with glow effect, typewriter heading, CTAs      |
| **Story**     | Personal journey and background                        |
| **Skills**    | Tech stack with animated orbital display               |
| **Projects**  | Featured work with images, tech tags, and links        |
| **Vision**    | Future goals and aspirations                           |
| **Education** | Academic background                                    |
| **Contact**   | EmailJS contact form + social links                    |

## 🛠️ Tech Stack

| Category       | Technology                                              |
|----------------|---------------------------------------------------------|
| **Framework**  | React 19 + TypeScript 5.9                               |
| **Build Tool** | Vite 8                                                  |
| **Styling**    | Tailwind CSS 4.2                                        |
| **Animations** | Framer Motion 12                                        |
| **3D**         | Three.js + React Three Fiber + Drei                     |
| **Icons**      | React Icons (Feather)                                   |
| **Email**      | EmailJS                                                 |
| **Effects**    | Typewriter Effect, Custom Cursor, Particle Field        |

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** installed

### Installation

```bash
# Clone the repository
git clone https://github.com/amanjotsingh06/portfolio.git
cd portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start the dev server
npm run dev
```

The site will be running at `http://localhost:5173`.

### EmailJS Setup (Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. **Add an Email Service** (e.g., Gmail) → copy the **Service ID**
3. **Create an Email Template** using these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — the message body
4. **Copy your Public Key** from Account → General
5. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server for changes to take effect.

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory, ready to deploy on **Vercel**, **Netlify**, or any static host.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── avatar.png          # 3D avatar image
│   ├── favicon.svg         # Site favicon
│   └── handcricket.png     # Project screenshot
├── src/
│   ├── components/
│   │   ├── Hero.tsx         # Hero section with floating avatar
│   │   ├── Story.tsx        # About/journey section
│   │   ├── Skills.tsx       # Skills orbit display
│   │   ├── Projects.tsx     # Project showcase cards
│   │   ├── Vision.tsx       # Future goals section
│   │   ├── Education.tsx    # Education timeline
│   │   ├── Contact.tsx      # Contact form + social links
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── CustomCursor.tsx # Custom animated cursor
│   │   ├── ParticleField.tsx# Background particles
│   │   ├── ScrollProgress.tsx# Scroll progress bar
│   │   └── ui/             # Reusable UI components
│   ├── App.tsx              # Main app layout
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & animations
├── .env                     # EmailJS keys (not committed)
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies & scripts
```

## 📄 License

This project is open source and available for personal use and learning.

---

<p align="center">
  Designed & Developed by <b>Amanjot Singh</b><br/>
  <a href="https://github.com/amanjotsingh06">GitHub</a> · <a href="https://linkedin.com/in/amanjot-singh06">LinkedIn</a>
</p>
