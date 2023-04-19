export { PageLayout };

import React from "react";
import { PageContextProvider } from "./usePageContext";

function PageLayout({ children, pageContext }) {
  return (
    <React.StrictMode>
      {/* <PageContextProvider pageContext={pageContext}> */}
        <div className="bg-primary-light text-primary h-full w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            {children}
          </div>
        </div>
      {/* </PageContextProvider> */}
    </React.StrictMode>
  );
}
