import React from 'react'
import Link from 'next/link'

function SideNav() {
  return (
    <nav className='shadow-lg p-10 rounded-lg'>
        <ul>
            <li className='block my-3 p-3 rounded'>
            <Link href='/admin'>Dashboard</Link>
            </li>
            <li className='block my-3 p-3 rounded'>
            <Link href='/admin/posts'>Posts</Link>
            </li>
            <li className='block my-3 p-3 rounded'>
            <Link href='/admin/users'>Users</Link>
            </li>
        </ul>
    </nav>
  )
}

export default SideNav
