import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.petting.app',
  appName: 'Petting',
  webDir: 'out',
  server: {
    // 개발 시에는 로컬 서버 사용, 배포 후에는 실제 URL로 변경
    // url: 'https://your-domain.vercel.app',
    androidScheme: 'https',
  },
  ios: {
    contentInset: 'automatic',
  },
  android: {
    allowMixedContent: true,
  },
}

export default config
