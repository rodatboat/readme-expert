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
          // height: "100%",
          padding: 24,
        }}

        source={markdown} />
    </div>
  )
}

