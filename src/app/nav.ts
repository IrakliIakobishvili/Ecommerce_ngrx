import { MenuItem } from './shared-models/menu.item';

export const MainMenu: MenuItem[] = [
  {
    title: 'profile',
    url: '/profile',
    icon: 'purple-nav nav-profile',
    activeBg: 'active-bg-profile',
    activeBgColor: 'purple',
    badge: null,
    image: {
      width: 37,
      height: 37,
      url: '',
      description: ''
    }
  },
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speed nav-dashboard',
    activeBg: 'active-bg-dashboard',
    activeBgColor: 'blue',
    badge: 2,
    image: null
  },
  {
    title: 'Catalog',
    url: '/catalog',
    icon: 'icon-sale link-catalog',
    activeBg: 'active-bg-catalog',
    activeBgColor: 'blue',
    badge: null,
    image: null
  },
  {
    title: 'Inventory',
    url: '/inventory',
    icon: 'purple-nav icon-heart link-inventory',
    activeBg: 'active-bg-inventory',
    activeBgColor: 'purple',
    badge: null,
    image: null
  },
  {
    title: 'Cart',
    url: '/cart',
    icon: 'icon-basket link-cart',
    activeBg: 'active-bg-inventory',
    activeBgColor: 'purple',
    badge: null,
    image: null
  },
  {
    title: 'Orders',
    url: '/orders',
    icon: 'icon-box link-orders',
    activeBg: 'active-bg-inventory',
    activeBgColor: 'purple',
    badge: null,
    image: null
  },
  {
    title: 'Transactions',
    url: '/transactions',
    icon: 'icon-bank link-transactions',
    activeBg: 'active-bg-inventory',
    activeBgColor: 'purple',
    badge: null,
    image: null
  },
  {
    title: 'Stores List',
    url: '/store',
    icon: 'purple-nav link-stores',
    activeBg: 'active-bg-inventory',
    activeBgColor: 'purple',
    badge: null,
    image: null
  }
];
