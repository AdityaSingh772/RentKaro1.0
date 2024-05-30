

import React from 'react'
import Link from 'next/link'

function defaultPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="text-center font-bold text-white text-[2.5rem]">
        <p>Please login first</p>
        <Link href="/api/auth/login" className='hover:underline text-blue-300 hover:text-blue-800'>
          click here to login
        </Link>
      </div>
    </div>
  )
}

export default defaultPage
