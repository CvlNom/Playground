'use client'

import { signIn, signOut } from 'next-auth/react'

export default function LoginBtn() {
    return (
        <button className='loginButton' onClick={() => { signOut() }}>LOG OUT</button>
    )
}