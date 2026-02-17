# 🚀 React From Scratch – Function vs Class Component

## 📌 Project: Understanding Function vs Class Components

In this lesson, we move beyond Hello World.

Now we start understanding one of the most important concepts in React:

👉 Components.

Specifically:

- Function Components
- Class Components

Understanding the difference between them is essential to thinking like a real React developer.

---

# 🎯 Why Is This Important?

Components are the building blocks of React.

If you understand:

- How components work
- How they render
- How they differ

You will be able to:

- Read any React code
- Refactor old projects
- Understand modern React patterns
- Write cleaner code

---

# 🏗️ Project Structure

```
my-app/
│
├── src/
│   ├── components/
│   │   ├── FunctionGreeting.jsx
│   │   └── ClassGreeting.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
```

We organize components inside a `components` folder.

This is how real projects are structured.

---

# 🔹 Function Component

A Function Component is simply a JavaScript function that returns JSX.

## Example: `FunctionGreeting.jsx`

```jsx
const FunctionGreeting = () => {
  return (
    <div className='box'>
      <h2>👋 This is a Function Component</h2>
      <p>Created using a JavaScript function.</p>
    </div>
  );
};

export default FunctionGreeting;
```

✅ Simple  
✅ Clean  
✅ Modern approach

Today, most React projects use Function Components.

---

# 🔹 Class Component

A Class Component uses ES6 classes and extends `React.Component`.

## Example: `ClassGreeting.jsx`

```jsx
import React, { Component } from 'react';

class ClassGreeting extends Component {
  render() {
    return (
      <div className='box'>
        <h2>🙌 This is a Class Component</h2>
        <p>Created using a JavaScript class.</p>
      </div>
    );
  }
}

export default ClassGreeting;
```

Before React Hooks, this was the standard way to write components.

---

# 📄 App.jsx

Now we import both components and render them.

```jsx
import FunctionGreeting from './components/FunctionGreeting';
import ClassGreeting from './components/ClassGreeting';

const App = () => {
  return (
    <div className='container'>
      <h1>📘 Function vs Class Component</h1>

      <FunctionGreeting />
      <ClassGreeting />
    </div>
  );
};

export default App;
```

---

# 🎨 Optional Styling (index.css)

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

.box {
  margin: 20px auto;
  padding: 20px;
  width: 400px;
  border-radius: 8px;
  background-color: #f4f4f4;
}
```

---

# ▶️ How To Run The Project

### Using npm

```
npm install
npm run dev
```

### Using pnpm

```
pnpm install
pnpm dev
```

Open the provided local URL in your browser.

---

# 🧠 What You Learned In This Lesson

- What is a Component
- What is a Function Component
- What is a Class Component
- The structural difference between them
- How to organize components in folders

---

# ⚖️ Function vs Class (Quick Comparison)

| Function Component | Class Component        |
| ------------------ | ---------------------- |
| Simpler syntax     | More verbose           |
| Uses Hooks         | Uses lifecycle methods |
| Modern standard    | Older approach         |
| Preferred today    | Mostly legacy          |

---

# 🏁 Final Message

Modern React prefers **Function Components**.

However, understanding Class Components is important because:

- You will see them in older codebases
- Many companies still maintain legacy projects

Real developers understand both.

Let’s continue building real knowledge.

Let’s learn React the right way 🚀
