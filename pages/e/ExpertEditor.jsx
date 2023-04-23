import React, { useEffect, useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import './index.css';

export default function ExpertEditor({ markdown, onChange, language }) {
  const textRef = React.useRef();

  useEffect(() => {
  }, []);
  return (
      <CodeEditor
        value={markdown}
        ref={textRef}
        language={language}
        placeholder={`Please enter ${language} code.`}
        onChange={onChange}
        padding={24}
        style={{
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          fontSize: 14,

          maxHeight: "100%",
          maxWidth: "100%"
        }}
      />
  );
}
