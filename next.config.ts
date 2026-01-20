import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Capacitor에서는 웹서버 URL을 사용하므로 정적 내보내기 불필요
  // 배포 후 Vercel 등에서 실행되는 웹 서버를 웹뷰에서 로드
  images: {
    unoptimized: true,
  },
}

export default nextConfig
