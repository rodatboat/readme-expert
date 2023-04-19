import React from 'react'
import "./index.css";

export { Page }
export const documentProps = {
  // This title and description will override the defaults
  // title: 'About SpaceX',
  // description: 'Our mission is to explore the galaxy.'
}

function Page() {
  return (
    <>
      <h1>Welcome to the Index page!</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive.
        </li>
      </ul>
    </>
  )
}
