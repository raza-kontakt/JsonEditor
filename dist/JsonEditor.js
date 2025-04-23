import React, { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";
export const JsonEditor = ({ value, onChange, style, editorStyle, }) => {
    const [text, setText] = useState(JSON.stringify(value, null, 2));
    const [error, setError] = useState(null);
    useEffect(() => {
        setText(JSON.stringify(value, null, 2));
    }, [value]);
    const handleChange = (input) => {
        setText(input);
        try {
            const parsed = JSON.parse(input);
            setError(null);
            onChange(parsed);
        }
        catch (_a) {
            setError("Invalid JSON");
        }
    };
    const highlight = (code) => Prism.highlight(code, Prism.languages.json, "json");
    return (React.createElement("div", { style: Object.assign({ fontFamily: "monospace" }, style) },
        React.createElement(Editor, { value: text, onValueChange: handleChange, highlight: highlight, padding: 10, style: Object.assign({ minHeight: "300px", fontFamily: "monospace", fontSize: 15, border: "1px solid", borderColor: error ? "red" : "#ccc", borderRadius: 4, backgroundColor: "#fafafa" }, editorStyle) }),
        error && React.createElement("div", { style: { color: "red", marginTop: "5px" } }, error)));
};
