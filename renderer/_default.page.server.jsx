export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'documentProps']

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

  const title = (documentProps && documentProps.title) || 'readme.expert'
  const desc = (documentProps && documentProps.description) || 'Create professional-looking READMEs quickly and easily, with customizable templates and intuitive tools.'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${title}" />
        <meta property="og:url" content="https://readme.expert" />
        <meta property="og:site_name" content="${title}" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="android-chrome" sizes="256x256" href="/android-chrome-256x256.png">
        <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png">
        <meta name="viewport" content="width=device-width">
        <meta name="description" content="${desc}" />
        <meta rel="icon" href="/favicon.ico" />
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
