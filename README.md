# Ganesh R - AWS Data Engineer Portfolio 🚀

A modern, high-performance, and responsive portfolio website designed for **Ganesh R (AWS Data Engineer & ETL Specialist)**.

Built with semantic HTML5, modern vanilla CSS (Dark glassmorphism, cyan/emerald glowing accents, responsive grid), dynamic data pipeline particle animations, interactive skills filtering, architecture workflows, and a printable resume.

---

## 📁 Project Structure

```
Portfolio/
├── index.html        # Main portfolio homepage with interactive sections
├── style.css         # Modern dark theme styles with glassmorphism & animations
├── script.js         # Interactive background particle network & UI controls
├── resume.html       # Web & Printable PDF resume
└── README.md         # Deployment & GitHub Pages hosting guide
```

---

## 🌐 How to Host on GitHub Pages (github.io)

You can host this portfolio completely free on GitHub Pages in under 2 minutes:

### Step 1: Create a GitHub Repository
1. Log in to your GitHub account: [https://github.com](https://github.com)
2. Click **New Repository**.
3. Name your repository:
   - **Option A (Custom User Domain):** Name it `<your-github-username>.github.io` (e.g. `ganesh-r.github.io`).
   - **Option B (Project Subdomain):** Name it `portfolio` (will be hosted at `<your-github-username>.github.io/portfolio`).
4. Set visibility to **Public**.
5. Do not check "Add a README" since we already have one. Click **Create repository**.

### Step 2: Push your code to GitHub
Open PowerShell / Terminal inside `C:\Users\Hp\Desktop\Portfolio` and run:

```bash
cd C:\Users\Hp\Desktop\Portfolio

# Initialize git repository
git init
git add .
git commit -m "Initial commit: Ganesh R Data Engineer Portfolio"

# Link to your GitHub repository (replace with your repo URL)
git branch -M main
git remote add origin https://github.com/<your-github-username>/<repo-name>.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repo Settings
1. On your GitHub repository page, go to **Settings** -> **Pages** (in the left sidebar).
2. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`
   - **Branch:** Select `main` and folder `/ (root)`
   - Click **Save**.
3. Within 1-2 minutes, your website will be live at:
   👉 **`https://<your-github-username>.github.io/`** (or `.../portfolio/`)

---

## ✨ Features

- **Data Pipeline Particle Network:** Custom Canvas animation simulating real-time data packets flowing through nodes.
- **End-to-End System Design:** Visual interactive architecture flow (Ingestion ➔ S3 Medallion Lakehouse ➔ Glue/PySpark ETL ➔ Snowflake/Redshift ➔ BI).
- **Skill Matrix with Filter:** Dynamically categorize skills by Cloud, Processing, Warehousing, and Industry domain.
- **Career Timeline:** Clean interactive experience milestones for Analytix hub ai, Dataman Computer Systems, and Anunta Technology.
- **Case Studies Showcase:** Healthcare HMIS, Medallion Lakehouse, and Batch PySpark Engine.
- **Printable Resume:** Dedicated `/resume.html` with one-click print-to-PDF layout.
- **Fast & SEO Optimized:** No heavy framework dependencies, instant load speeds.
