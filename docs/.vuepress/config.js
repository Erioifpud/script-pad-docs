import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  base: '/script-pad-docs/',

  title: 'Script Pad',
  description: 'Script Pad 相关文档（0.6.0）',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/',
      '/builtin/',
      '/remote-call/',
      { text: '启动参数', link: '/args/' },
      '/apis/',
      '/lowcode/',
    ],
    sidebar: {
      '/builtin/': [
        {
          text: '内置模块',
          children: [
            '/builtin/modules/ai.md',
            '/builtin/modules/api.md',
            '/builtin/modules/app.md',
            '/builtin/modules/archive.md',
            '/builtin/modules/capture.md',
            '/builtin/modules/clipboard.md',
            '/builtin/modules/config.md',
            '/builtin/modules/doc.md',
            '/builtin/modules/file-manager.md',
            '/builtin/modules/frame.md',
            '/builtin/modules/html.md',
            '/builtin/modules/input.md',
            '/builtin/modules/lib.md',
            '/builtin/modules/misc.md',
            '/builtin/modules/notice.md',
            '/builtin/modules/path.md',
            '/builtin/modules/random.md',
            '/builtin/modules/remote-call.md',
            '/builtin/modules/request.md',
            '/builtin/modules/template.md',
            '/builtin/modules/time.md',
            '/builtin/modules/tts.md',
            '/builtin/modules/uuid.md',
          ]
        }
      ],
      '/apis/': [
        {
          text: '接口',
          children: [
            '/apis/modules/image-upload.md',
            '/apis/modules/image-cors.md',
          ]
        }
      ],
      '/lowcode/': [
        {
          text: '低代码编辑器',
          children: [
            '/lowcode/modules/group.md',
            '/lowcode/modules/node.md',
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})
