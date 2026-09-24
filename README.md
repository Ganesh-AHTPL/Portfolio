# Ganesh R - Senior Data Engineer Portfolio 🚀

A clean, modern, recruiter-friendly personal portfolio built strictly with **React, TypeScript, Vite, Tailwind CSS, and Lucide Icons** for **Ganesh R (Data Engineer)**.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS (with clean Dark/Light theme support)
- **Icons:** Lucide React
- **Hosting:** GitHub Pages (`https://ganesh-ahtpl.github.io/Portfolio/`)

---

## 📁 Centralized Content Structure

All portfolio content is maintained in a single central configuration file:
👉 **[`src/data/profile.ts`](src/data/profile.ts)**

To update experience, skills, contact info, or architecture notes, simply update `profile.ts` without touching individual React components.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📄 Resume Location

Place the latest PDF resume at:
`public/resume/Resume.pdf`

---

## 🌐 Deploying to GitHub Pages

This project is configured with a GitHub Actions workflow `.github/workflows/deploy.yml` that automatically builds and deploys to GitHub Pages upon pushing to `main`.
