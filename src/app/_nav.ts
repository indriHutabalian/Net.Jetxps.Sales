export const navItems = [
  {
    title: true,
    name: 'Tasks'
  },
  {
    name: 'Sales Runsheet',
    url: '/engagement-runsheets',
    icon: 'icon-calendar',
    children: [
      {
        name: 'Create',
        url: '/engagement-runsheets/create',
        icon: 'icon-dot'
      },
      {
        name: 'List',
        url: '/engagement-runsheets',
        icon: 'icon-circle'
      }
    ]
  },
  {
    name: 'Realization',
    url: '/tasks/active',
    icon: 'icon-people'
  },
  {
    title: true,
    name: 'Master Data'
  },
  {
    name: 'Prospect Clients',
    url: '/prospect-clients',
    icon: 'icon-people'
  },
  {
    title: true,
    name: 'Reports'
  },
  {
    name: 'Sales JET ID',
    url: '/sales-jet-id-report',
    icon: 'icon-doc'
  },
  {
    name: 'Sales Engagement',
    url: '/sales-engagement-report',
    icon: 'icon-doc'
  },
];
