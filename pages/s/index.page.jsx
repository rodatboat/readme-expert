import React from 'react';
import NavWrapper from "../NavWrapper";

export { Page }

export const documentProps = {
    title: 'readme.expert | Snippets',
    desc: 'Snippets'
}

function Page() {
    return (
        <>
            <NavWrapper>
                <div>Snippet create and explore page.</div>
            </NavWrapper>
        </>
    )
}
