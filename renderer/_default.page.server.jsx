export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps']

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { PageLayout } from './PageLayout'
import "./index.css";

async function render(pageContext) {
  const { Page, pageProps } = pageContext

  let pageHtml;
  if (pageContext.Page) {
    // For SSR pages
    pageHtml = ReactDOMServer.renderToString(
      <PageLayout pageContext={pageContext}>
        <Page {...pageProps} />
      </PageLayout>
    )
  } else {
    // For SPA pages
    pageHtml = ''
  }

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
