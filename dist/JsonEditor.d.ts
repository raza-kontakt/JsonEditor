import React from "react";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";
type JsonEditorProps = {
    value: Record<string, any>;
    onChange: (updatedValue: Record<string, any>) => void;
    style?: React.CSSProperties;
    editorStyle?: React.CSSProperties;
};
export declare const JsonEditor: React.FC<JsonEditorProps>;
export {};
