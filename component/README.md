# 🚀 React From Scratch – Hello World (Vite Version)

## 📌 Project: Hello World Using Vite + React

Welcome to your first React application built using **Vite** ⚡

This is the starting point of our journey in learning React the right way.

---

# 🎯 Why Start With Vite?

Vite is a modern build tool that is:

- ⚡ Extremely fast
- Simple to set up
- Lightweight
- The modern alternative to Create React App

We use Vite because it reflects how real-world modern React projects are built today.

---

# 📦 What Is This Project?

This is a simple **Hello World** React application created using Vite.

In this lesson, you will understand:

- How a React project is structured
- What is `main.jsx`
- What is `App.jsx`
- How components are rendered
- How React connects to the DOM

---

# 🏗️ Project Structure

After creating the Vite app, your folder structure will look like this:

```
my-app/
│
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
│
├── index.html
├── package.json
└── vite.config.js
```

---

# 🔎 Important Files Explained

## 📄 main.jsx

This is the entry point of the React application.

It connects React with the HTML file.

Example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

## 📄 App.jsx

This is your main component.

Here is our Hello World example:

```jsx
const App = () => {
  return (
    <div className='container'>
      <h1>👋 مرحباً بك في دورة React</h1>
      <p>هذا مثال بسيط لتطبيق Hello World باستخدام React.js</p>
      <button>ابدأ التعلم 🚀</button>
    </div>
  );
};
export default App;
```

---

# ▶️ How To Run The Project

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Start development server

```
npm run dev
```

Vite will give you a local URL like:

```
http://localhost:5173
```

Open it in your browser 🎉

---

# 🧠 What You Learned In This Lesson

- How to create a React app using Vite
- How React renders components
- How `App.jsx` works
- How the development server runs

This is your foundation.

---

# 🚀 What’s Next?

Next lessons will cover:

- Components
- JSX
- Props
- State
- Events

Step by step.

No rush.
No confusion.

---

# 🏁 Final Message

React is not about memorizing code.

React is about understanding:

- Components
- Data flow
- Rendering logic

Let’s build strong foundations.

Let’s learn React the right way 🚀
