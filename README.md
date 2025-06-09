# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


📦MylifUX
├── 📁 gateway/                  # Backend (Express + PostgreSQL)
│   ├── 📁 controllers/
│   ├── 📁 middlewares/
│   ├── 📁 routes/
│   ├── 📁 utils/
│   ├── 📄 index.js
│   ├── 📄 Dockerfile
│   └── 📄 package.json
│
├── 📁 public/
├── 📁 src/
│   ├── 📁 assets/
│   ├── 📁 components/
│   │   ├── 📁 atoms/
│   │   ├── 📁 molecules/
│   │   ├── 📁 organisms/
│   │   └── 📁 templates/
│   ├── 📁 data/
│   ├── 📁 styles/
│   ├── 📄 App.jsx
│   ├── 📄 index.css
│   ├── 📄 main.jsx
│   └── 📄 index.html
│
├── 📄 Dockerfile
├── 📄 docker-compose.yml
├── 📄 tailwind.config.js
├── 📄 vite.config.js
└── 📄 README.md
