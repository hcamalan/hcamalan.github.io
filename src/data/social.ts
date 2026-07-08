export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export const social: SocialLink[] = [
  {
    label: 'LinkedIn',
    handle: '/in/huseyin-camalan',
    href: 'https://www.linkedin.com/in/huseyin-camalan/',
  },
  {
    label: 'GitHub',
    handle: '@hcamalan',
    href: 'https://github.com/hcamalan',
  },
  {
    label: 'Email',
    handle: 'huseyin@camalan.de',
    href: 'mailto:huseyin@camalan.de',
  },
];
