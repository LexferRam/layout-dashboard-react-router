export const menuItems = [
  {
    key: 1,
    to: '/dashboard',
    icon: 'home',
    listItemText: 'Page 1',
    dropdown: false,
  },
  {
    key: 2,
    to: '/dashboard/page2',
    icon: 'account_circle',
    listItemText: 'Page 2',
    dropdown: false,
  },
  {
    key: 3,
    to: '/dashboard/page3',
    icon: 'settings',
    listItemText: 'Page 3',
    dropdown: false,
  },
  {
    key: 4,
    icon: 'category',
    listItemText: 'Category',
    dropdown: true,
    dropdownItems: [
      {
        key: 5,
        to: '/dashboard/category/category1',
        icon: 'directions_car',
        listItemText: 'Page 3',
      },
    ],
  },
]
