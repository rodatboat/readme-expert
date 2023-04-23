import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function ExpertPreview({ markdown }) {
  return (
    <div
      className="h-full editor-bg"
      >
      <MarkdownPreview
      className="bg-secondary"
        style={{
          padding: 24,

          maxHeight: "100%",
          maxWidth: "100%"
        }}

        source={markdown} />
    </div>
  )
}

