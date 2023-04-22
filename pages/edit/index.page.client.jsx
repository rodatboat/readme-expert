import React, { useEffect, useState } from "react";
import ExpertEditor from "./ExpertEditor";
import ExpertPreview from "./ExpertPreview";
import NavBar from "../NavBar";

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
  // mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6
  // h-[50%]
  useEffect(() => { }, []);
  return (
    <>
      <div className="flex flex-col max-h-screen h-screen overflow-auto">
        <div className="flex-none min-h-16 h-16 md:min-h-12 md:h-12">
          <NavBar togglePreview={togglePreview} preview={preview} />
        </div>
        <div className="flex-1 mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 h-[90%]">
          <div className="flex flex-col md:flex-row md:gap-x-4 md:gap-y-0 md:h-full h-full">
            <div className={`relative flex-1 basis-1/2 rounded-xl overflow-y-scroll scrollbar-hide ${preview ? "hidden" : "block"} md:block border-2 border-primary bg-secondary`}>
              <p className="z-50 sticky top-0 w-full flex-1 text-sm py-1 font-bold text-center text-[#fff] bg-secondary border-2 border-l-0 border-r-0 border-t-0 border-b-1 border-primary uppercase">Editor</p>
              <div
                // data-color-mode="light"
                className="h-min editor-bg"
              >
                <ExpertEditor markdown={markdown} onChange={changeMarkdown} language={"markdown"} />
              </div></div>

            <div className={`relative flex-1 basis-1/2 rounded-xl overflow-y-scroll scrollbar-hide ${preview ? "block" : "hidden"} md:block border-2 border-primary bg-secondary`}>
              <p className="z-50 sticky top-0 w-full flex-1 text-sm py-1 font-bold text-center text-[#fff] bg-secondary border-2 border-l-0 border-r-0 border-t-0 border-b-1 border-primary uppercase">Preview</p>

                <div
                  // data-color-mode="light"
                  className="h-min editor-bg"
                >
                  <ExpertPreview markdown={markdown} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
