export { render }
// export const clientRouting = true
// export const hydrationCanBeAborted = true

import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { PageLayout } from './PageLayout'
import "./index.css";


let root
async function render(pageContext) {
  const { Page, pageProps } = pageContext

  const {documentProps} = pageContext.exports
  document.title = (documentProps && documentProps.title) || 'readme.expert'
  document.desc = (documentProps && documentProps.description) || 'Create professional-looking READMEs quickly and easily, with customizable templates and intuitive tools.'


  const page = (
    <PageLayout pageContext={pageContext}>
      <Page {...pageProps} />
    </PageLayout>
  )
  const container = document.getElementById('page-view')
  // SPA
  if (container.innerHTML === '' || !pageContext.isHydration) {
    if (!root) {
      root = createRoot(container)
    }
    root.render(page)
    
    // SSR
  } else {
    root = hydrateRoot(container, page)
  }
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
