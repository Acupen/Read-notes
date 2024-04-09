import { defineConfig } from 'vitepress'

// import test_icon from '../svg-icon/testzheng.svg'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "My Vue.js Project",
  base: '/read-notes/',
  description: "A Vitepress Site to record my comprehend ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/api-examples' },
      {
        text: '算法',items:[
          {text: 'Sort',link:'/algorithm/Sort/quickSort'}
        ]
      }
    ],
    sidebar:{
      '/render/': {
        base: '/render/',
        items: [
          {
            text: '算法',
            collapsed: false,
            items: [
              { text: '测试', link: 'test' },
            ],
          },
        ],
      },
      '/algorithm/Sort/': {
        base: '/algorithm/Sort/',
        items: [
          {
            text: '算法',
            collapsed: false,
            items: [
              { text: '快排', link: 'quickSort' },
            ],
          },
        ],
      },
      '/':{
        base:'/',
        items:[
          {
            text: 'Examples',
            collapsed: false,
            items:[
              {text:'api',link:'api-examples'},
              {text:'markdown',link:'markdown-examples'}
            ]
          }
        ]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Acupen' },
      // { icon: test_icon, link: 'https://github.com/Acupen' },
      { icon:{svg: '<svg t="1712132666674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5628" width="20" height="20"><path d="M528.901064 3.071698a49.159362 49.159362 0 0 0-34.190927 0L125.387171 139.762273C105.445511 147.161166 91.42784 166.52993 91.42784 188.239036v323.75944c0 72.282425 22.806141 144.589228 66.321867 214.860422 33.362057 53.876613 79.778831 106.704949 137.226904 157.034482 96.100276 84.142593 191.469195 132.704681 195.479467 134.642776a49.805394 49.805394 0 0 0 44.612762 0.17065c4.083408-1.986852 99.342624-49.793205 195.540414-133.594499C788.167029 834.965613 833.876826 782.125089 867.27545 728.065636 910.742419 657.611604 932.488093 584.902554 932.488093 511.913151V188.226847c0.158461-21.660349-13.030339-41.07787-32.947621-48.501141L528.901064 3.071698z" fill="#BBCEDF" p-id="5629"></path><path d="M176.752793 513.765922V236.411067a24.951454 24.951454 0 0 1 16.431148-23.574066l312.655007-113.567513c2.986373-1.121414 6.143397-1.718688 9.336988-1.755256v416.483286h340.775674v0.731357c0 90.749182-45.843878 180.693872-136.056733 268.286031-70.441844 68.381855-150.47665 117.199918-191.652034 140.16452a31.241122 31.241122 0 0 1-13.042528 3.20578V513.851247L176.752793 513.765922z" fill="#FFFFFF" p-id="5630"></path><path d="M855.963799 513.765922V236.411067a24.951454 24.951454 0 0 0-16.431148-23.574066L526.889833 99.269488A27.499013 27.499013 0 0 0 517.540656 97.514232v416.483286H176.764982a6.179964 6.179964 0 0 0 0 0.731357c0 90.749182 45.843878 180.693872 136.056733 268.286031 70.454033 68.381855 150.47665 117.199918 191.652034 140.16452 4.071219 1.999042 8.532495 3.096077 13.054718 3.20578V513.851247l338.435332-0.085325z" fill="#5B748B" p-id="5631"></path></svg>'}, link: 'https://github.com/Acupen' },
    ],
    outline: {
      label: '页面导航',
      level: [1,4],
    },
  },
  
})
