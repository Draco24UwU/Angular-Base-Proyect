//* Lista de elementos para las difentes secciones.

interface BaseNavElement {
  text: string;
  icon: string;
}

interface NavWithRoute extends BaseNavElement {
  route: string;
  isExpanded?: never; // No puede tener isExpanded
  subNav?: never; // No puede tener subNav
}

interface NavWithSubNav extends BaseNavElement {
  isExpanded: boolean; // Debe tener isExpanded
  subNav: elemento_nav[]; // Debe tener subNav
  route?: never; // No puede tener route
}

export type elemento_nav = NavWithRoute | NavWithSubNav;

export const elementos_nav: elemento_nav[] = [
  {
    text: 'Configuración',
    icon: 'bx bx-cog',
    isExpanded: true,
    subNav: [
      {
        text: 'SubNav',
        icon: 'bx bx-color',
        isExpanded: false,
        subNav: [{ text: 'hijo', icon: 'bx bx-color', route: '' }],
      },
      {
        text: 'Perfil',
        icon: 'bx bx-color',
        route: '/profile',
      },
      {
        text: 'Seguridad',
        icon: 'bx bx-color',
        route: '/security',
      },
    ],
  },
  {
    text: 'Configuración',
    icon: 'bx bx-cog',
    isExpanded: true,
    subNav: [
      {
        text: 'SubNav',
        icon: 'SubNav',
        isExpanded: false,
        subNav: [{ text: 'hijo', icon: 'hijo', route: '' }],
      },
      {
        text: 'Perfil',
        icon: 'user',
        route: '/profile',
      },
      {
        text: 'Seguridad',
        icon: 'lock',
        route: '/security',
      },
    ],
  },
  {
    text: 'Hero',
    icon: 'bx bx-box',
    route: '/hero',
  },
  {
    text: 'Home',
    icon: 'bx bx-home',
    route: '/home',
  },
];
