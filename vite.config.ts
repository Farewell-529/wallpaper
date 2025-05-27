import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { HttpsProxyAgent } from 'https-proxy-agent'
// 本地代理地址
// const localProxy = 'http://127.0.0.1:7890'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   proxy: {
  //     //代理请求，解决跨域问题
  //     '/api-wallhaven': {
  //       target: 'https://wallhaven.cc/api/v1',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api-wallhaven/, ''),
  //       agent:  new HttpsProxyAgent(localProxy),
  //       timeout: 10000 // 设置超时时间
  //     }
  //   }
  // }
})
