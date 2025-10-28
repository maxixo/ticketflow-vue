# 🌀 Twig + Vue Application

A modern web application built with **Twig** for server-side rendering and **Vue.js** for dynamic client-side interactions.  
This project combines the simplicity of **Symfony/Twig** templates with the power of **Vue components** to deliver a fast, modular, and scalable web experience.

---

## 🚀 Features

- ⚡ **Hybrid Rendering** — Twig handles backend rendering, Vue handles frontend interactivity  
- 🧩 **Component-Based UI** — Vue 3 with Composition API and single-file components  
- 🧠 **Reactive State** — Built with Pinia or Vuex (optional)  
- 🎨 **TailwindCSS / SCSS** — Utility-first styling and responsive design  
- 🛠️ **Modular PHP Architecture** — Clean, maintainable Symfony controller & service structure  
- 🔐 **Session-based Authentication** — Easily integrated using Symfony Security  
- 📦 **Build System** — Powered by Vite for fast builds and hot module replacement (HMR)

---

## 🏗️ Project Structure

project-root/
├── assets/ # Vue source files
│ ├── js/
│ │ ├── main.js # Vue app entry
│ │ ├── components/ # Vue components
│ │ └── stores/ # Pinia/Vuex stores (if used)
│ ├── css/ # Tailwind or global styles
│ └── images/
│
├── public/ # Public web directory
│ ├── build/ # Compiled Vue assets (after build)
│ ├── index.php
│ └── ...
│
├── src/
│ ├── Controller/ # Symfony controllers
│ ├── Entity/ # Doctrine entities
│ ├── Repository/ # Database repositories
│ └── ...
│
├── templates/ # Twig templates
│ ├── base.twig # Global layout
│ ├── dashboard.twig # Example page
│ └── ...
│
├── package.json # Vue dependencies & scripts
├── vite.config.js # Vite configuration for Vue build
├── composer.json # PHP dependencies
└── README.md


---

## ⚙️ Requirements

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) `>= 18`
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PHP](https://www.php.net/) `>= 8.1`
- [Composer](https://getcomposer.org/)
- (Optional) [Symfony CLI](https://symfony.com/download)

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/your-twig-vue-app.git
cd your-twig-vue-app

2️⃣ Install PHP dependencies
composer install

3️⃣ Install JavaScript dependencies
npm install
# or
yarn install

🧑‍💻 Development Setup

Run both the Symfony server and Vite dev server for hot reload.

Start Symfony (backend)
symfony serve
# or
php -S localhost:8000 -t public

Start Vite (frontend)
npm run dev
# or
yarn dev


Then open your browser at:

👉 http://localhost:8000

Vite will automatically inject and refresh Vue components inside your Twig templates.

🏗️ Building for Production

Compile and optimize assets for production deployment:

npm run build


This will generate optimized assets in /public/build.

Then deploy your Symfony app normally (e.g., via Docker, Forge, or a hosting provider).

🧰 Example Usage

In your Twig template, you can mount a Vue component like so:

{% extends 'base.twig' %}

{% block content %}
  <div id="app">
    <ticket-list></ticket-list>
  </div>

  {{ vite_entry_script_tags('main.js') }}
{% endblock %}
