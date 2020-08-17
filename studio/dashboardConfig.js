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
                  buildHookId: '5f3a648d98faa3c6e358534c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-q8f9oa7y',
                  apiId: '1c183fad-015b-4280-87e5-90f6def7e266'
                },
                {
                  buildHookId: '5f3a648d72903e0b7478191e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ao1pm7fj',
                  apiId: '9a22a06a-680f-4eef-a6f1-8f25837f09f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/McInkay/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ao1pm7fj.netlify.app', category: 'apps'}
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
