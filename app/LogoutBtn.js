'use client'

import { signIn, signOut } from 'next-auth/react'

export default function LoginBtn() {
    return (
        <button className='w-32 font-semibold py-1 bg-green-400 rounded-full' onClick={() => { signOut() }}>LOG OUT</button>
    )
}