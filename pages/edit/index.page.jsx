import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export { Page };


function Page() {
  const [markdown, setMarkdown] = useState(`
  # A demo of   "react-markdown"
  ## test

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
    <h1 className="font-light">test</h1>

      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </>
  );
}
