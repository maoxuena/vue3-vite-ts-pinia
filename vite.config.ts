import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
// @ts-ignore
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    // root,
    base: env.VITE_PUBLIC_PATH, //打包路径
    plugins: [
      vue(),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            // ensureStyleFile: true,
            resolveStyle: (name) => {
              /**
               * 这里这个name不能直接使用
               * 因为element的组件文件都带有el-开头
               * 但是样式文件并没有
               * 所以导致引入的样式文件无法正常解析
               * 这里只需要加上一句代码即可
               */
              name = name.slice(3)
              return `element-plus/theme-chalk/src/${name}.scss`
            },
          },
        ],
      }),
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
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/index.scss" as *; `,
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
      // outDir: 'dist', // 指定输出路径
      // assetsDir: 'assets', // 指定生成静态资源的存放路径
      terserOptions: {
        //去除 console debugger
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      chunkSizeWarningLimit: 2000,
    },
  }
}
