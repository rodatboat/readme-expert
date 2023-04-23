import React, { useState } from "react";
import NavWrapper from "../NavWrapper";
import ExpertEditor from "../e/ExpertEditor";

export { Page };

export const documentProps = {
  title: "readme.expert | Snippets",
  desc: "Snippets",
};

function Page() {

    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("python")
    const changeCode = (e) => {
      e.preventDefault();
      setMarkdown(e.target.value);
    }
  return (
    <>
      <NavWrapper>
        <div className="text-[#fff]">
            <form className="flex flex-col">
            <input type="text" name="title" id="title" title="Code snippet title" placeholder="Snippet title" required />

            <select type="text" name="title" id="title" title="Code snippet title" />

            <div
                className="editor-bg"
              >
                <ExpertEditor code={code} onChange={changeCode} language={language} />
              </div>            
              </form>
        </div>
      </NavWrapper>
    </>
  );
}
