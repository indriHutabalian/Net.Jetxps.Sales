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
        icon: ' '
      },
      {
        name: 'List',
        url: '/engagement-runsheets/list',
        icon: ' '
      },
      {
        name: 'Realization',
        url: '/engagement-runsheets/active',
        icon: ' '
      }
    ]
  },
  {
    name: 'Pick Up Request',
    url: '/pick-up-orders',
    icon: 'icon-call-in',
    children: [
      {
        name: 'Create',
        url: '/pick-up-orders/create',
        icon: ' '
      },
      {
        name: 'List',
        url: '/pick-up-orders/list',
        icon: ' '
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
