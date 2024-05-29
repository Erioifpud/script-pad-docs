import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  base: '/script-pad-docs/',

  title: 'Script Pad',
  description: 'Script Pad 相关文档',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/builtin/'],
    sidebar: {
      '/builtin/': [
        {
          text: '内置对象',
          children: [
            '/builtin/modules/file-manager.md',
            '/builtin/modules/request.md',
            '/builtin/modules/ai.md',
            '/builtin/modules/config.md',
            '/builtin/modules/html.md',
            '/builtin/modules/app.md',
            '/builtin/modules/input.md',
            '/builtin/modules/tts.md',
            '/builtin/modules/clipboard.md',
            '/builtin/modules/uuid.md',
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})
