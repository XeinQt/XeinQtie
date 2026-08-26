# Modern Portfolio & Experience Showcase Remake

A high-performance, responsive Developer Portfolio and interactive Experience Showcase built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

---

## ✏️ How to Customize Your Content

All data is structured with clean TypeScript interfaces and placeholder (**Lorem Ipsum**) content so you can effortlessly replace it with your own details:

### 1. Work Experience & Career Data
Edit [`src/data/experienceData.ts`](file:///c:/Portfolio/src/data/experienceData.ts):
- **`experiences`**: Array of roles, companies, dates, locations, bullet points, metrics, and tech skills.
- **`careerStats`**: Years of experience, completed projects count, satisfaction score, and availability status.
- **`careerHighlights`**: High-level timeline milestone descriptions.

### 2. Profile, Bio & Social Links
Edit [`src/data/portfolioData.ts`](file:///c:/Portfolio/src/data/portfolioData.ts):
- **`name`**, **`title`**, **`tagline`**, **`bio`**
- **`location`**, **`email`**, **`availability`**
- **`socials`**: GitHub, LinkedIn, Twitter/X, and Email links.
- **`skillsSummary`**: Featured skills list.

---

## 🌟 Key Features & UI Highlights

- **✨ 3 Interactive Experience Views**:
  - **Timeline Mode**: Vertical timeline with glowing connector line, animated active role marker, and expandable achievements.
  - **Bento Grid Mode**: High-density card layout for quick browsing.
  - **Summary Table View**: Clean tabular breakdown suited for recruiters.
- **🔍 Real-Time Search & Filtering**:
  - Instant search across job titles, companies, locations, bullet points, and skills (e.g. *React, Laravel, SEO*).
  - Category filters (*All, Engineering, Leadership, Freelance, Consulting*).
- **🌓 Theme Engine**:
  - Dark mode by default with ambient emerald/cyan glow + light mode toggle with localStorage persistence.
- **📄 Resume Modal & Print PDF**:
  - Integrated CV viewer with instant print / export to PDF.
- **💬 Direct Contact Modal**:
  - One-click copy email button with celebration confetti and message form.
- **📱 100% Mobile-First Responsive**:
  - Tested across mobile viewports, tablets, and wide screens.
