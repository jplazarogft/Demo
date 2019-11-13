export const detailData = {
  header: {
    title: 'titlecompbutton',
    titleTags: ['Functional', 'Atom'],
    description: '',
    icons: [
      { class: 'inbox', text: 'Passing' },
      { class: 'download', text: '17' },
      { class: 'public', text: 'Public' },
      { class: 'watch', text: 'Day ago' },
      { class: 'microsoft', text: '150.510 Mb' },
    ],
    related: ['Card', 'Accounts', 'Payments', 'Insurance', 'Loans'],
    team: {
      owner: ['alexangarcia'],
      coowners: ['mariobrown', 'davidbarreiro', 'martaperezgarcia'],
      collaborators: [
        'mariobrown',
        'davidbarreiro',
        'sergiomartin',
        'martaperezgarcia',
        'michaelsans',
      ],
    },
    componentDetail: {
      access: 'Yesterday',
      release: 'This month',
      tests: '11 of 24 detail',
      coverage: '70%',
    },
    analysis: [],
  },
};

export const detailSections = {
  overview: {
    properties: [
      {
        name: 'Active',
        type: 'Boolean',
        default: 'false',
      },
      {
        name: 'Loading',
        type: 'Boolean',
        default: 'false',
      },
      {
        name: 'Disabled',
        type: 'Boolean',
        default: 'false',
      },
      {
        name: 'Type',
        type: 'String',
        default: '',
      },
      {
        name: 'Shape',
        type: 'String',
        default: '',
      },
      {
        name: 'Size',
        type: 'String',
        default: '',
      },
      {
        name: 'ClassObject',
        type: '',
        default: '',
      },
    ],
    references: [
      {
        thumb: 'https://stackblitz.com/edit/embed?embed=1&file=app/app.component.ts',
        url: 'https://via.placeholder.com/120.png',
      },
      {
        thumb: 'https://stackblitz.com/edit/ball-demo?embed=1&file=index.ts',
        url: 'https://via.placeholder.com/120.png',
      },
      {
        thumb: 'https://stackblitz.com/edit/embed?embed=1&file=app/app.component.ts',
        url: 'https://via.placeholder.com/120.png',
      },
      {
        thumb: 'https://stackblitz.com/edit/ball-demo?embed=1&file=index.ts',
        url: 'https://via.placeholder.com/120.png',
      },
    ],
  },
};
