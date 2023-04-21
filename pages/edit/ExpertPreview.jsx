import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function ExpertPreview({ markdown }) {
  return (
    <div
      className="h-full">
      <MarkdownPreview
        style={{
          height: "100%",
          padding: 32
        }}

        source={markdown} />
    </div>
  )
}

