# 🌸 MindBloom AI — Personal AI Companion for Mental Wellness

MindBloom AI is a modern, responsive, and premium landing page for a mental wellness platform designed to empower students and young professionals. It features personalized AI-powered tools designed to improve emotional well-being, build resilience, and support personal growth.

Built using **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Live Demo & Development Server
The local development server runs on [http://localhost:3000](http://localhost:3000).

---

## ✨ Features

- **Interactive Navigation & Progress**: Custom `<Navbar />` and a dynamic `<ScrollProgress />` indicator showing user reading progress.
- **Hero Section**: Sleek modern hero area with engaging headlines, descriptions, call-to-actions, and background animations.
- **About Section**: Core mission and values of MindBloom AI.
- **Features & Journey Showcase**: Breakdowns of AI mental wellness features, companion capabilities, and personalized user journeys.
- **Interactive Metrics & Stats**: Visual data and statistics highlighting platform impact.
- **Testimonials**: Interactive feedback section from users.
- **Resources & FAQs**: Informative articles, guides, and accordions answering common questions.
- **Contact & CTA Section**: Sleek newsletter sign-ups and clean forms for user inquiry.
- **Smooth Scroll Animations**: Powered by a custom `useScrollReveal` hook.

---

## 🛠️ Tech Stack

- **Core**: [Next.js 16 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [@vercel/analytics](https://vercel.com/docs/analytics)
- **Deployment Config**: Pre-configured [netlify.toml](netlify.toml) for seamless Netlify integration.

---

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (recommended version LTS/latest).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mindbloom-ai.git
   cd mindbloom-ai
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build
To build the application for production:
```bash
npm run build
```

---

## ☁️ Deployment on Netlify

This repository is optimized for quick deployment on [Netlify](https://www.netlify.com/).

The pre-configured `netlify.toml` file contains the build instructions:
```toml
[build]
  command = "npm run build"
  publish = ".next"
```

### Deploy Steps:
1. Connect your GitHub repository to Netlify.
2. Select **Next.js** as the framework template.
3. Netlify will auto-detect the configuration and deploy the project using `npm run build` and serve it from `.next/`.

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
