import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as codeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";

export { Page };

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

function EditorComp() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
    <Editor
      value={code}
      onValueChange={(code) => setCode(code)}
      highlight={(code) => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
}

function Page(pageProps) {
  const [markdown, setMarkdown] = useState(`# A demo of   "react-markdown"

  "react-markdown" is a markdown component for React.
  
  👉 Changes are re-rendered as you type.
  
  👈 Try writing some markdown on the left.
  
  ## Overview
  
  * Follows [CommonMark](https://commonmark.org)
  * Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
  * Has a lot of plugins
  
  ## Table of contents
  
  Here is an example of a plugin in action
  (["remark-toc"](https://github.com/remarkjs/remark-toc)).
  This section is replaced by an actual table of contents.
  
  ## Syntax highlighting
  
  Here is an example of a plugin to highlight code:
  ["rehype-highlight"](https://github.com/rehypejs/rehype-highlight).
  `);

  useEffect(() => {}, []);
  return (
    <>
      <EditorComp />
      <SyntaxHighlighter language="markdown" style={codeStyle}>
        {markdown}
      </SyntaxHighlighter>

      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </>
  );
}
