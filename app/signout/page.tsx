'use client'

import { signOut } from 'next-auth/react'

export default function SignOutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-primary-50 to-white">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold text-primary-600 mb-2">🐕 Petting</h1>
        <p className="text-gray-600 mb-8">로그아웃 하시겠습니까?</p>

        <div className="space-y-3">
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full px-4 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition"
          >
            로그아웃
          </button>
          <a
            href="/home"
            className="block w-full px-4 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition"
          >
            취소
          </a>
        </div>
      </div>
    </main>
  )
}
