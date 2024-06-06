import AuthClient from '@/components/auth/AuthClient'
import React from 'react'

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to Your Bucket List
      </h1>
      <h4 className="text-lg font-medium mb-8 text-center">
        Please sign in or create new account
      </h4>
      <AuthClient />
    </div>
  )
}

export default SignIn
