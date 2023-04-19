import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import './code.css'

export { Page }

function Page() {
  const markdown = `## Markdown example`

  return (
    <>
      <h1>TEST</h1>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </>
  )
}
