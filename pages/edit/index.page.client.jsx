import React, { useEffect, useState } from "react";
import ExpertEditor from "./ExpertEditor";
import ExpertPreview from "./ExpertPreview";
import PageWrapper from "../PageWrapper";

export { Page };


function Page() {
  const [preview, setPreview] = useState(false);
  const [markdown, setMarkdown] = useState(`# A demo of   "react-markdown"
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

  const changeMarkdown = (e) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  }
  const togglePreview = () => {
    setPreview(!preview);
  }

  useEffect(() => { }, []);
  return (
    <>
      <div className="flex flex-col max-h-screen h-screen">
        <div className="flex-auto h-1/6"><button onClick={togglePreview}>Preview</button></div>
        <div className="flex-auto mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 h-5/6">
          <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 h-full">
            <div className={`md:flex-1 rounded-xl overflow-y-scroll scrollbar-hide ${preview ? "hidden" : "block"} md:block`}>
              <ExpertEditor markdown={markdown} onChange={changeMarkdown} language={"markdown"} />
            </div>

            <div className={`md:flex-1 rounded-xl overflow-y-scroll scrollbar-hide ${preview ? "block" : "hidden"} md:block`}>
              <ExpertPreview markdown={markdown} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
