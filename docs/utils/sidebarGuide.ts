const AllSide = {
    'render': [
        {
            text: '算法',
            collapsed: false,
            items: [{ text: '测试', link: 'test' }]
        }
    ],
    'algorithm':[
        {
          text: '排序',
          collapsed: false,
          items: [
            { text: '快排', link: 'quickSort' },
          ],
        },
      ],
      'common-method':[
        {
          text: '类型判断',
          collapsed: false,
          items: [
            { text: 'type', link: 'type' },
          ],
        },
      ],
    'examples':[
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

const sideBarGuide = (params: string) => {
    return AllSide[params]
}

export default sideBarGuide
