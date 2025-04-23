# 🧩 React JSON Editor

A lightweight, customizable JSON editor for React with syntax highlighting powered by [PrismJS](https://prismjs.com/). Ideal for admin panels, internal tools, or any interface where users need to view or edit JSON.

![npm](https://img.shields.io/npm/v/react-json-editor-lite) ![License](https://img.shields.io/npm/l/react-json-editor-lite) ![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)

---

## ✨ Features

- 💡 Live JSON editing
- 🎨 Syntax highlighting (keys, values, numbers, etc.)
- 🧩 Fully customizable styles
- 🛠 Built using `react-simple-code-editor` and `prismjs`
- 📦 Easy to integrate with any React project

---

## 📦 Installation

```bash
npm install react-json-editor-lite prismjs
# or
yarn add react-json-editor-lite prismjs
```

## 🚀 Usage

```javascript
import React, { useState } from "react";
import { JsonEditor } from "react-json-editor-lite";

const App = () => {
  const [json, setJson] = useState({ name: "Ali", age: 25 });

  return (
    <JsonEditor
      value={json}
      onChange={setJson}
      editorStyle={{
        backgroundColor: "#1e1e1e",
        color: "#d4d4d4",
        minHeight: "300px",
      }}
    />
  );
};
```

## 🧰 Props

| Prop          | Type                                   | Description                             |
| ------------- | -------------------------------------- | --------------------------------------- |
| `value`       | `Record<string, any>`                  | The JSON object to display/edit         |
| `onChange`    | `(value: Record<string, any>) => void` | Called when the editor content changes  |
| `style`       | `React.CSSProperties`                  | Optional wrapper style                  |
| `editorStyle` | `React.CSSProperties`                  | Optional style for the code editor area |

## 🛡 License

MIT License © 2025 Ali Raza

## 🙌 Acknowledgments

- react-simple-code-editor
- PrismJS
