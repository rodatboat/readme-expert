export { PageLayout };

import React from "react";
import { PageContextProvider } from "./usePageContext";

function PageLayout({ children, pageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
            {children}
      </PageContextProvider>
    </React.StrictMode>
  );
}
