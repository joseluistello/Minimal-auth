import React from "react"
import Link from "next/link"

const HeaderSection = () => {
return (
<header className="py-10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <nav className="relative z-50 flex justify-between">
      <div className="flex items-center md:gap-x-12">
        <a aria-label="Home" href="/#">
          <svg aria-hidden="true" viewBox="0 0 109 40" className="h-10 w-auto">
            <rect x="5" y="5" width="20" height="20" fill="#007BFF" />
            <text x="40" y="25" fontFamily="Arial" fontSize="20" fill="black">Minimal</text>
          </svg>
        </a>
      </div>
      <div className="flex items-center gap-x-5 md:gap-x-8">
        <div className="hidden md:block">
          <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/login"></a>
        </div>
        <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600" href="/register">
          <span>Sign in<span className="hidden lg:inline"></span></span>
        </a>
        <div className="-mr-1 md:hidden">
          <div data-headlessui-state="">
            <button className="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none" aria-label="Toggle Navigation" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R3p6:">
              <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none" strokeWidth="2" strokeLinecap="round">
                <path d="M0 1H14M0 7H14M0 13H14" className="origin-center transition"></path>
                <path d="M2 2L12 12M12 2L2 12" className="origin-center transition scale-90 opacity-0"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>

)   

}


export default HeaderSection