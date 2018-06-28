export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Tasks'
  },
  {
    name: 'Runsheet',
    url: '/engagement-runsheets',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Create',
        url: '/engagement-runsheets/create',
        icon: ''
      }
    ]
  },
  {
    name: 'Tasks',
    url: '/tasks',
    icon: 'icon-people',
    children: [
      {
        name: 'Active',
        url: '/tasks/active',
        icon: ''
      },
      {
        name: 'History',
        url: '/dashboard',
        icon: ''
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
  }
];
