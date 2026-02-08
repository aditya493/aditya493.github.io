
# Aditya — Personal Brand (React + Vite + Tailwind)

This repository is a minimal, premium dark-themed personal site built with React, Vite and Tailwind CSS. It is mobile-first, responsive, and ready to publish to GitHub Pages.

Quick setup

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

Notes
- The project uses Tailwind; configuration files `tailwind.config.cjs` and `postcss.config.cjs` are included.
- The site is client-side static: the contact form is UI-only (no backend).
- A GitHub Actions workflow is provided at `.github/workflows/deploy-pages.yml` to build and deploy to GitHub Pages automatically on push to `master`.

Publishing to GitHub Pages (recommended)

1. Create a GitHub repo and push this project to `master`.

```bash
git init
git add .
git commit -m "Initial site"
git branch -M master
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin master
```

2. The included Actions workflow will build and deploy to Pages automatically on push to `master`.

Tailwind / Vite notes
- If you prefer, run the Vite setup generator instead, then copy `src` and config files into the generated project.
- Ensure Node.js 18+ is used in CI (workflow uses Node 18).

Customization
- Replace `aditya@example.com` in `src/components/Contact.jsx` with your real email or wire up an API.
- Replace the Himalayan image placeholder in `src/components/Hero.jsx` with your own image.

Want me to run the installs and set up the repo remotes here? Or should I only add workflows and files and you run installs locally? Reply with your preference.

