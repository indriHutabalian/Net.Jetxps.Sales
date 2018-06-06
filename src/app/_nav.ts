export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Tasks'
  },
  {
    name: 'Engagement Runsheet',
    url: '',
    icon: 'icon-calendar',
    children: [
      {
        name: 'Create',
        url: '/dashboard',
        icon: ''
      },
      {
        name: 'Proof of Engagement',
        url: '/dashboard',
        icon: ''
      }
    ]
  },
  {
    name: 'Prospect Clients',
    url: '/dashboard',
    icon: 'icon-people'
  },
  {
    title: true,
    name: 'Report'
  },
  {
    title: true,
    name: 'History'
  },
  {
    name: 'Engagement Runsheet',
    url: '/dashboard',
    icon: ''
  }
];
