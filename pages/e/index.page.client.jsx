import React, { useEffect, useState } from "react";
import ExpertEditor from "./ExpertEditor";
import ExpertPreview from "./ExpertPreview";
import NavWrapper from "../NavWrapper";

export { Page };

export const documentProps = {
  title: 'readme.expert | Editor',
  desc: 'Editor'
}

function Page() {
  const [preview, setPreview] = useState(false);
  const [markdown, setMarkdown] = useState(`# Project Title

One Paragraph of the project description

Initially appeared on
[repo](https://github.com/rodatboat/readme-expert). But the page cannot open anymore so that is why I have moved it here.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push 
- [Example 1](https://www.example.com)
- [Example 2](https://www.example.com)

### Installing

A step by step series of examples that tell you how to get a development
environment running

Say what the step will be

    Give the example

And repeat

    until finished

End with an example of getting some data out of the system or using it
for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Sample Tests

Explain what these tests test and why

    Give an example

### Style test

Checks if the best practices and the right coding style has been used.

    Give an example

## Deployment

Add additional notes to deploy this on a live system

## Built With

  - React

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## Authors

  - **Ro** - *Provided README Template* -
    [rodatboat](https://github.com/rodatboat)

See also the list of
[contributors](https://github.com/rodatboat/readme-expert/contributors)
who participated in this project.

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details

## Acknowledgments

  - Hat tip to anyone whose code is used
  - Inspiration
  - etc

`);

  const changeMarkdown = (e) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  }
  const togglePreview = () => {
    setPreview(!preview);
  }

  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `README.md`;
    document.body.appendChild(element);
    element.click();
  }

  useEffect(() => { }, []);
  return (
    <>
      <NavWrapper togglePreview={togglePreview} preview={preview} downloadFile={downloadFile} >
        <div className="flex-1 mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 h-[90%] max-w-full">
          <div className="flex flex-col md:flex-row md:gap-x-4 md:gap-y-0 md:h-full h-full">
            <div className={`relative flex-1 basis-1/2 rounded-xl overflow-y-scroll scrollbar-hide ${preview ? "hidden" : "block"} md:block border-2 border-primary bg-secondary`}>
              <p className="z-50 sticky top-0 flex-1 rounded-t-xl text-sm py-1 font-bold text-center text-[#fff] bg-secondary border-2 border-l-0 border-r-0 border-t-0 border-b-1 border-primary uppercase">
                Editor
              </p>
              <div
                // data-color-mode="light"
                className="h-min editor-bg"
              >
                <ExpertEditor markdown={markdown} onChange={changeMarkdown} language={"markdown"} />
              </div></div>

            <div className={`relative flex-1 basis-1/2 rounded-xl overflow-y-scroll scrollbar-hide ${preview ? "block" : "hidden"} md:block border-2 border-primary bg-secondary`}>
              <p className="z-50 sticky top-0 flex-1 rounded-t-xl text-sm py-1 font-bold text-center text-[#fff] bg-secondary border-2 border-l-0 border-r-0 border-t-0 border-b-1 border-primary uppercase">
                Preview
              </p>

              <div
                // data-color-mode="light"
                className="h-min editor-bg"
              >
                <ExpertPreview markdown={markdown} />
              </div>
            </div>
          </div>
        </div>
      </NavWrapper>
    </>
  );
}