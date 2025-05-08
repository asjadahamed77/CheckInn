import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='bg-gradient-to-r from-[#031a09] via-[#316c40] to-[#294e28] text-white'>
      <nav className='mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8' area-label="Global">
<Link href="/">
<p>Check<span className='text-slate-300'>Inn</span></p>
</Link>
      </nav>
    </header>
  )
}

export default Header
