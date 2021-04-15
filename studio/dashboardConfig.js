export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6078342fda93e6e16fea6df3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kveaji2a',
                  apiId: '8164181a-f9a8-4b3e-b2ac-63886944262e'
                },
                {
                  buildHookId: '6078342fda93e6d340ea7187',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ityf8jgj',
                  apiId: '46afa6cc-7c8b-4082-b555-0db6bb80b4f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rokasta12/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ityf8jgj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
