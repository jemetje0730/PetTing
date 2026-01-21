// import { auth } from '@/lib/auth'
// import { redirect } from 'next/navigation'
import Link from 'next/link'

// TODO: 미리보기용 임시 코드 - 나중에 원복 필요
export default async function Home() {
  // const session = await auth()
  // if (!session) {
  //   redirect('/')
  // }

  // 임시 목업 데이터
  const session = {
    user: {
      name: '테스트 유저',
      image: 'https://via.placeholder.com/150',
      provider: 'kakao' as const,
    },
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-primary-50 to-white">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-primary-600 mb-2">🐕 Petting</h1>
        <p className="text-gray-600 mb-8">반려동물을 위한 서비스</p>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            {session.user?.image && (
              <img
                src={session.user.image}
                alt="프로필"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
            )}
            <p className="text-lg font-medium">{session.user?.name}님</p>
            <p className="text-sm text-gray-500 mb-4">
              {session.user?.provider === 'kakao' ? '카카오' : '네이버'}로 로그인됨
            </p>
            <Link
              href="/signout"
              className="inline-block px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              로그아웃
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
