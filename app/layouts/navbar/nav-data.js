import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks =[ 
  {
  label: 'linkedin',
  url: `https://linkedin.com/in/${config.linkedin}`,
  icon: 'linkedin',
  },
  {
    label: 'facebook',
    url: `https://facebook.com/${config.facebook}`,
    icon: 'facebook',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'instagram',
    url: `https://instagram.com/${config.instagram}`,
    icon: 'instagram',
  },
];
