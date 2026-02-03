# Autonomix

React + Vite site, configured for deployment as a **static site on GitHub Pages** (HTML, CSS, JS only). The app is built into the `dist` folder and deployed via GitHub Actions.

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. repo name `Autonomix`).
2. In the repo: **Settings → Pages → Build and deployment**
   - **Source:** choose **GitHub Actions**.
3. Push to the `main` branch (or run the workflow from the **Actions** tab). The workflow builds the app and deploys it.
4. The site will be at: **`https://<your-username>.github.io/Autonomix/`**  
   (Replace `Autonomix` with your repo name if different.)

Direct links and refresh work on all routes (e.g. `/about`, `/services`) thanks to the 404.html SPA fallback.

---

## React + Vite (dev)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
