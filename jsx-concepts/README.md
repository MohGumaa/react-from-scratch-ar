# 🚀 React From Scratch – Understanding JSX

## 📌 Project: What is JSX & How It Works

In this lesson, we move beyond basic components.

Now we start understanding one of the most important concepts in React:

👉 JSX.

JSX is everywhere in React.

If you don’t understand JSX, you don’t understand React.

In this lesson we cover:

- What JSX really is
- Why React uses JSX
- How JSX works behind the scenes
- JSX vs React.createElement()

---

# 🎯 Why Is This Important?

JSX is how we build UI in React.

If you understand JSX:

- You understand how components return UI
- You understand how React renders elements
- You understand what happens behind the scenes
- You can read and debug React code confidently

JSX is not optional knowledge.

It is fundamental.

---

# 🧠 What Is JSX?

JSX stands for:

> JavaScript XML

But very important:

- ❌ It is NOT HTML
- ❌ It is NOT a new language
- ✅ It is a Syntax Extension for JavaScript

JSX allows us to write code that looks like HTML inside JavaScript.

### Example:

```jsx
<h1>Hello React</h1>
```

This looks like HTML…

But it is actually JavaScript.

---

# 🔍 Why Does React Use JSX?

In traditional web development, we separated technologies:

- HTML → Structure
- CSS → Styling
- JavaScript → Behavior

But modern applications became dynamic.

JavaScript started controlling:

- What appears on screen
- When it appears
- How it updates

React introduced a new idea:

👉 Instead of separating by technology, we separate by Component.

Each component contains:

- Structure
- Logic
- Behavior

JSX makes this clean and readable.

---

# 🏗️ Project Structure

```
my-app/
│
├── src/
│   ├── components/
│   │   ├── Hello.jsx
│   │   ├── HelloWithoutJSX.jsx
│   │   ├── InfoCard.jsx
│   │   └── InfoCardWithoutJSX.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
```

We keep components organized inside a `components` folder.

This is how real-world projects are structured.

---

# 🔹 JSX Version Example

## `Hello.jsx`

```jsx
export const Hello = () => {
  return (
    <div id='container'>
      <h1>Hello Vishwas</h1>
    </div>
  );
};
```

This is:

- A JavaScript function
- Returning JSX
- Clean and readable

---

# 🔹 Using It Inside App.jsx

```jsx
import { Hello } from './components/Hello';

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;
```

When React sees:

```jsx
<Hello />
```

It actually executes:

```js
Hello();
```

A component is just a function call.

---

# ⚙️ What Happens Behind The Scenes?

The browser does NOT understand JSX.

The browser understands:

👉 JavaScript only.

So JSX gets transformed into:

```js
React.createElement();
```

This transformation is done by:

👉 Babel (a transpiler)

---

# 🔄 JSX Under The Hood

This JSX:

```jsx
<h1>Hello</h1>
```

Becomes:

```js
React.createElement('h1', null, 'Hello');
```

JSX is simply:

> Syntactic Sugar for React.createElement()

---

# 🔴 Without JSX (Raw Version)

## `HelloWithoutJSX.jsx`

```jsx
import React from 'react';

export const HelloWithoutJSX = () => {
  return React.createElement(
    'div',
    { id: 'container' },
    React.createElement('h1', null, 'مرحبا بكم في React'),
    React.createElement('p', null, 'Welcome to JSX lesson'),
    React.createElement('button', null, 'Start Learning'),
  );
};
```

Notice:

- Every element requires createElement
- Nested structure becomes complex
- Harder to read and maintain

Now imagine a component with 30 elements.

JSX solves this readability problem.

---

# 🆚 JSX vs React.createElement()

| JSX                | React.createElement      |
| ------------------ | ------------------------ |
| Clean and readable | Verbose and nested       |
| Looks like HTML    | Pure JavaScript          |
| Easy to maintain   | Hard to scale            |
| Developer friendly | Harder to debug manually |

---

# 🧠 Component Execution Flow

When you write:

```jsx
<Hello />
```

React does:

1. Calls the function `Hello()`
2. The function returns JSX
3. JSX becomes `React.createElement()`
4. React builds Virtual DOM
5. React compares with previous version
6. React updates the real DOM

Every component is simply:

👉 A JavaScript function that returns UI.

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

Open the local development URL in your browser.

---

# 🧠 What You Learned In This Lesson

- What JSX really is
- JSX is not HTML
- JSX is not a new language
- JSX gets converted to React.createElement
- Why JSX improves readability
- How components execute internally

---

# 🏁 Final Message

JSX is not magic.

It is just JavaScript made easier to read.

Understanding JSX means:

You now understand how React builds UI.

Next lesson, we will learn:

👉 JSX Rules

- Why we use `className`
- Why we need one root element
- How to write JavaScript inside JSX

Let’s keep building real React knowledge 🚀
