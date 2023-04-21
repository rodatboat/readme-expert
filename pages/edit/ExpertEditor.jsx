import React, { useEffect, useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function ExpertEditor({ markdown, onChange, language }) {
  const textRef = React.useRef();

  useEffect(() => {
  }, []);
  return (
    <div
      // data-color-mode="light"
      className="h-full"
    >
      <CodeEditor
        value={markdown}
        ref={textRef}
        language={language}
        placeholder={`Please enter ${language} code.`}
        onChange={onChange}
        padding={32}
        style={{
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          fontSize: 14,

          height: "100%"
        }}
      />
    </div>
  );
}
