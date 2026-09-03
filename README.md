# My Portfolio

Personal portfolio website for **Monica Leung** — Software Developer.

**Live site:** [monicaleung0.github.io/My_Portfolio](https://monicaleung0.github.io/My_Portfolio/)

## About

A multi-page portfolio built with React and TypeScript. It showcases projects, skills, education, and contact info, with a responsive layout and light/dark themes.

**Pages:** Home · About · Skills · Projects · Education · Contact

## Tech stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- Plain CSS (theme variables, animations)
- [GitHub Pages](https://pages.github.com/) + GitHub Actions

## Features

- Light / dark mode with a smooth theme transition
- Project cards with school vs. self filters, GitHub links, and live demos
- Skills, education, and contact sections
- Card hover glow and scroll reveal animations
- Content driven from a single data file: `src/data/portfolio.ts`

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushing to the `main` branch triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

Make sure:

1. The GitHub repo name matches the `base` path in `vite.config.ts` (currently `/My_Portfolio/`).
2. GitHub Pages is set to **GitHub Actions** as the source.

## Edit your content

Update `src/data/portfolio.ts` to change bio, skills, projects, education, and contact details.

## Contact

- **Email:** monica.leung.w@gmail.com
- **LinkedIn:** [monica-leung](https://www.linkedin.com/in/monica-leung-85b899403)
- **GitHub:** [MonicaLeung0](https://github.com/MonicaLeung0)
