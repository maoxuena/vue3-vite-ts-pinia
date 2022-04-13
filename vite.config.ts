import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/index.scss";',
      },
    },
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  // 生产环境打包配置
  build: {
    terserOptions: {
      //去除 console debugger
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
