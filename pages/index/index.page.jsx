import React from 'react'
import "./index.css";
import imgUrl from '../logo-no-background.svg';

export { Page }

export const documentProps = {
  title: 'readme.expert'
}

function Page() {
  return (
    <>
      <div className="flex flex-col max-h-screen h-screen overflow-auto">
        <div className="flex-1 flex flex-col items-center justify-center my-auto gap-5 max-w-full text-center mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6">
          <h2></h2>
          <h1 className="text-[#fff] font-black text-4xl md:text-6xl">readme<span className="text-primary">.expert</span></h1>
          <p className="text-[#fff] text-sm max-w-xs md:max-w-lg md:text-lg">Simplify the process of creating and previewing markdown files. Share code snippets with other developers.</p>
          <a href="/e">
            <button className="bg-primary hover:bg-primary-light font-bold text-sm lg:text-sm text-[#fff] px-6 lg:px-10 py-3 lg:py-4 rounded-lg hover:-translate-y-1 transition-all">Try it now</button>
          </a>
          <p className="-mt-4 text-primary text-xs">It's free!</p>
        </div>
        <div className="flex items-center justify-center flex-none h-16 bg-secondary p-3">
          <p className="flex flex-row items-center gap-1 justify-center text-primary">
            Made with ❤️
            by <a className="font-bold hover:text-primary-light transition-all" href="https://github.com/rodatboat">Ro</a></p>
        </div>
      </div>
    </>
  )
}
