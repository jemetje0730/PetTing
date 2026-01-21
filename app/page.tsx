'use client'

import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-primary-50 to-white">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-600 mb-2">🐕 Petting</h1>
          <p className="text-gray-600">로그인</p>
        </div>

        <div className="space-y-3">
          {/* 카카오 로그인 */}
          <button
            onClick={() => signIn('kakao', { callbackUrl: '/home' })}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#FEE500] text-[#191919] rounded-xl font-medium hover:bg-[#FDD835] transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.786 1.897 5.223 4.716 6.589-.148.526-.951 3.388-1.008 3.622 0 0-.021.172.09.238.111.066.241.016.241.016.317-.044 3.678-2.406 4.266-2.827.548.08 1.113.121 1.695.121 5.523 0 10-3.463 10-7.759C22 6.463 17.523 3 12 3z"/>
            </svg>
            카카오로 시작하기
          </button>

          {/* 네이버 로그인 */}
          <button
            onClick={() => signIn('naver', { callbackUrl: '/home' })}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#03C75A] text-white rounded-xl font-medium hover:bg-[#02B350] transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
            </svg>
            네이버로 시작하기
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          로그인 시 서비스 이용약관에 동의하게 됩니다!
        </p>
      </div>
    </main>
  )
}
