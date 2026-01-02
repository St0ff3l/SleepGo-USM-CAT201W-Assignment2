# SleepGo - Company Homepage

A responsive single-page company homepage for **SleepGo** (fictional software house), built for **USM CAT201 Assignment 2**.

Tech stack:
- React 18
- Vite 5
- CSS (custom, in `src/styles/global.css`)
- react-icons

## Project Structure

Key files and folders:

- `index.html` - Vite entry HTML
- `src/main.jsx` - React entry point
- `src/App.jsx` - Page composition (Navbar, sections, Footer) + reveal-on-scroll animation
- `src/components/` - Reusable UI components
  - `Navbar.jsx`, `Footer.jsx`, `ServiceCard.jsx`, `TeamCard.jsx`
- `src/sections/` - Page sections
  - `Hero.jsx`, `Services.jsx`, `Team.jsx`, `About.jsx`
- `src/styles/global.css` - Global styles and responsive rules
- `src/assets/` - Images and demo video used by the UI

## Prerequisites

- Node.js (recommended: 18+)
- npm

## Setup

Install dependencies:

```bash
npm install
```

## Run (Development)

Start the Vite dev server:

```bash
npm run dev
```

Vite will print the local URL (commonly `http://localhost:5173`).

## Build & Preview

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Features

- Single-page layout with anchor navigation (Home/Services/Team/About)
- Reveal-on-scroll animation using `IntersectionObserver` (elements with `.reveal-item`)
- Responsive layout (desktop + mobile) via `global.css`
- Service and team sections rendered from local arrays (easy to edit)

## Customization

Common places to edit content:

- **Hero text / contact modal**: `src/sections/Hero.jsx`
- **Services list**: `src/sections/Services.jsx`
- **Team members**: `src/sections/Team.jsx`
- **About section text**: `src/sections/About.jsx`
- **Global styles / responsive rules**: `src/styles/global.css`
- **Brand logo / images / video**: `src/assets/`

## Assignment Details

- Course: CAT201 – Integrated Software Development Workshop
- Assignment: 2
- Objective: Practice modern web development tooling (React, Node ecosystem) and apply UI/UX design principles
