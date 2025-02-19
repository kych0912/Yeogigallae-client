import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        short_name: "여기갈래",
        name: "여기갈래 | 투표 기반 AI 여행 일정 생성 서비스",
        icons: [
          {
            src: "Yeogi.svg",
            sizes: "64x64",
            type: "image/x-icon"
          },
          {
            src: "icon192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "icon512.png",
            type: "image/png",
            sizes: "512x512"
          }
        ],
        start_url: ".",
        display: "standalone",
        theme_color: "#0A0A0A",
        background_color: "#0A0A0A"
      },
      workbox: {
        globPatterns: [
          'index.html',
          'manifest.json',
          '**/*.{js,css,ico,png,svg}'
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\..*$/i,  // API 요청에 대한 캐싱
            //캐싱 전략 NetWork만
            handler: 'NetworkOnly',
            options: {
              cacheName: 'yeogigallae-pwa-cache-v1',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 24 * 60 * 60  // 24시간
              }
            }
          }
        ]
      }
    })
  ],
})
