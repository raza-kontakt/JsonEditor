import React, { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";

type JsonEditorProps = {
  value: Record<string, any>;
  onChange: (updatedValue: Record<string, any>) => void;
  style?: React.CSSProperties;
  editorStyle?: React.CSSProperties;
};

export const JsonEditor: React.FC<JsonEditorProps> = ({
  value,
  onChange,
  style,
  editorStyle,
}) => {
  const [text, setText] = useState(JSON.stringify(value, null, 2));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setText(JSON.stringify(value, null, 2));
  }, [value]);

  const handleChange = (input: string) => {
    setText(input);
    try {
      const parsed = JSON.parse(input);
      setError(null);
      onChange(parsed);
    } catch {
      setError("Invalid JSON");
    }
  };

  const highlight = (code: string) =>
    Prism.highlight(code, Prism.languages.json, "json");

  return (
    <div style={{ fontFamily: "monospace", ...style }}>
      <Editor
        value={text}
        onValueChange={handleChange}
        highlight={highlight}
        padding={10}
        style={{
          minHeight: "300px",
          fontFamily: "monospace",
          fontSize: 15,
          border: "1px solid",
          borderColor: error ? "red" : "#ccc",
          borderRadius: 4,
          backgroundColor: "#fafafa",
          ...editorStyle,
        }}
      />
      {error && <div style={{ color: "red", marginTop: "5px" }}>{error}</div>}
    </div>
  );
};
