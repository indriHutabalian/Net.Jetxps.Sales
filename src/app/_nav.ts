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
        icon: 'icon-arrow-right'
      },
      {
        name: 'List',
        url: '/engagement-runsheets',
        icon: 'icon-arrow-right'
      }
    ]
  },
  {
    name: 'Realization',
    url: '/tasks/active',
    icon: 'icon-people'
  },
  {
    name: 'Pick Up Request',
    url: '/pick-up-requests',
    icon: 'icon-call-in',
    children: [
      {
        name: 'Create',
        url: '/pick-up-requests/create',
        icon: 'icon-arrow-right'
      },
      {
        name: 'List',
        url: '/pick-up-requests',
        icon: 'icon-arrow-right'
      }
    ]
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
    url: '/report/sales-jet-id',
    icon: 'icon-doc'
  },
  {
    name: 'Sales Engagement',
    url: '/report/sales-engagement',
    icon: 'icon-doc'
  },
];
