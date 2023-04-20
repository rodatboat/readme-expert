import React from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ExpertPreview({markdown}) {
  return (
    <>
    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </>
  )
}
