export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
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
        url: '/engagement-runsheets/create',
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
    url: '/prospect-clients',
    icon: 'icon-people'
  }
];
