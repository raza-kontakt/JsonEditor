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

# 👋 Hi there, I'm Ali Raza

## 🚀 About Me
I'm a passionate Full Stack Developer based in Berlin, Germany, with extensive experience in building scalable web and mobile applications. I specialize in React, React Native, and Node.js, with a strong focus on creating performant and user-friendly solutions. When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or mentoring other developers.

## 💻 Tech Stack
- **Languages**: TypeScript, JavaScript, Python
- **Frontend**: React, Next.js, HTML5, CSS3
- **Mobile**: React Native, Expo
- **Backend**: Node.js, Express
- **Database**: MongoDB, PostgreSQL, Redis
- **Tools**: Git, Docker, VS Code
- **Cloud**: AWS, Vercel, Azure

## 📦 Package Dependencies
```json
{
  "dependencies": {
    "prismjs": "^1.30.0",
    "typescript": "^5.0.0"
  }
}
```

## 🌟 Current Focus
- Building scalable web and mobile applications
- Contributing to open-source projects
- Learning new technologies and best practices
- Creating developer tools and utilities
- Exploring AI and machine learning integration

## 🏆 Achievements
- Built and launched multiple successful web and mobile applications
- Contributed to various open-source projects
- Mentored junior developers
- Created reusable React components and libraries
- Developed and maintained production applications for major companies

## 🎯 Goals for 2024
- Master advanced TypeScript patterns
- Dive deeper into cloud architecture
- Build more developer tools
- Contribute to major open-source projects
- Enhance mobile development skills

## 📫 Connect With Me
- [LinkedIn](https://www.linkedin.com/in/ali-raza-4a3284164/)
- [Twitter](https://twitter.com/raza_kontakt)
- [Portfolio](https://my-cv-b154e.web.app/)

## 📊 GitHub Stats
![Your GitHub stats](https://github-readme-stats.vercel.app/api?username=aliraza401&show_icons=true&theme=radical)

## 🏆 Top Languages
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=aliraza401&layout=compact&theme=radical)

## 🌟 Fun Facts
- 🎮 Avid gamer and tech enthusiast
- 📚 Love reading tech blogs and documentation
- 🎵 Code with music playing in the background
- 🌍 Always excited to learn about new technologies
- 🎯 Based in Berlin, Germany
- 🌱 Currently learning German

## 📈 Activity Graph
![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=aliraza401&theme=radical)

## 🏢 Professional Experience
- **Kibsons** (Dubai) - Software Engineer
- **Convo** (Pakistan) - Frontend Developer
- **Septem Systems** (Pakistan) - Software Engineer

## 🎓 Education
- B.S. in Software Engineering from Foundation University

## 🌍 Languages
- English (Professional)
- German (Basic)

---
⭐️ From [aliraza401](https://github.com/aliraza401)
