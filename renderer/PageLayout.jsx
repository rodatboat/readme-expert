export { PageLayout };

import React from "react";
import { PageContextProvider } from "./usePageContext";

import
 { Analytics } 
from
 
'@vercel/analytics/react'
;

function PageLayout({ children, pageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
            {children}
      </PageContextProvider>
      <Analytics />
    </React.StrictMode>
  );
}
