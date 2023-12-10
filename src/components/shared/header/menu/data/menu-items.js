/**
 * @type {{ title: string, href: string, submenu?: { title: string, href: string }[] }[]}
 */
const items = [
  { title: 'Integrations', href: '/integrations' },
  {
    title: 'Core Platform',
    href: '/core-platform',
    submenu: [
      { title: 'Products', href: '/core-platform/products' },
      { title: 'Pricing', href: '/core-platform/pricing' },
    ],
  },
  {
    title: 'Company',
    href: '/company',
    submenu: [
      { title: 'About', href: '/company/about' },
      { title: 'Blog', href: '/company/blog' },
      { title: 'Contact', href: '/company/contact' },
      { title: 'Careers', href: '/company/careers' },
    ],
  },
  {
    title: 'Resources',
    href: '/resources',
    submenu: [
      { title: 'Support', href: '/resources/support' },
      { title: 'Security', href: '/resources/security' },
      { title: 'FAQ', href: '/resources/faq' },
      { title: 'Privacy Policy', href: '/resources/privacy-policy' },
      { title: 'Terms of Service', href: '/resources/terms-of-service' },
      { title: 'Cookie Policy', href: '/resources/cookie-policy' },
      { title: 'Accessibility', href: '/resources/accessibility' },
    ],
  },
];

export default items;
