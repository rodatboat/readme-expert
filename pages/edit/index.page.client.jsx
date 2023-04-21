import React, { useEffect, useState } from "react";
import ExpertEditor from "./ExpertEditor";
import ExpertPreview from "./ExpertPreview";
import PageWrapper from "../PageWrapper";

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

  const changeMarkdown = (e) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  }

  useEffect(() => { }, []);
  return (
    <>
      <PageWrapper>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0  h-full w-full">
          <div className="flex-1 rounded-xl overflow-hidden">
            <ExpertEditor markdown={markdown} onChange={changeMarkdown} language={"markdown"} />
          </div>

          <div className="flex-1 rounded-xl overflow-hidden">
            <ExpertPreview markdown={markdown} />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
