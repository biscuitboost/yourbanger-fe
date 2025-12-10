import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Examples',
      href: getPermalink('/examples'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/faq'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { text: 'Sign In', href: 'https://app.yourbanger.com/auth', target: '_blank' },
    { text: 'Get Started', href: 'https://app.yourbanger.com/auth?tab=signup', target: '_blank' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Examples', href: getPermalink('/examples') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'FAQ', href: getPermalink('/faq') },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { text: 'Birthday Songs', href: getPermalink('/birthday-songs') },
        { text: 'Wedding Songs', href: getPermalink('/wedding-songs') },
        { text: 'Anniversary Songs', href: getPermalink('/anniversary-songs') },
        { text: 'Retirement Songs', href: getPermalink('/retirement-songs') },
        { text: 'Funny Songs', href: getPermalink('/funny-songs') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Refund Policy', href: getPermalink('/refund-policy') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact', href: 'mailto:support@yourbanger.com' },
        { text: 'Dashboard', href: 'https://app.yourbanger.com/dashboard' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} YourBanger.com. All rights reserved.
  `,
};
