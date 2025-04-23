// src/declarations.d.ts or types/react-simple-code-editor.d.ts
declare module "react-simple-code-editor" {
  import * as React from "react";

  export interface EditorProps {
    value: string;
    onValueChange: (code: string) => void;
    highlight: (code: string) => React.ReactNode;
    padding?: number;
    style?: React.CSSProperties;
    textareaId?: string;
    textareaClassName?: string;
    preClassName?: string;
    insertSpaces?: boolean;
    tabSize?: number;
    ignoreTabKey?: boolean;
  }

  const Editor: React.FC<EditorProps>;

  export default Editor;
}
