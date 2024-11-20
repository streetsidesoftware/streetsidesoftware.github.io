import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Street Side Software',
  tagline: 'Making life easier for software developers around the world.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://streetsidesoftware.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'streetsidesoftware', // Usually your GitHub org/user name.
  projectName: 'streetsidesoftware.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Force trailing slashes on all URLs for GitHub pages.
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        pages: {},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Street Side Software',
      logo: {
        alt: 'Street Side Software Logo',
        src: 'img/Logo Street Side Software.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'supportSidebar',
        //   position: 'left',
        //   label: 'Support',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          docId: 'support',
          to: '/support',
          label: 'Support',
          position: 'left',
        },
        {
          // type: 'doc',
          docId: 'about',
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          docId: 'sponsor',
          to: '/sponsor',
          label: 'Sponsor',
          position: 'right',
        },
        {
          href: 'https://github.com/streetsidesoftware',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Links',
        //   items: [
        //     { label: 'CSpell', to: 'https://cspell.org', },
        //     { label: 'VS Code Spell Checker', to: 'https://streetsidesoftware.com/vscode-spell-checker/', },
        //     { label: 'GitHub',  href: 'https://github.com/streetsidesoftware', },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/streetsidesoftware',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © 2008 - ${new Date().getFullYear()} Street Side Software <img style="height:1em" src="/img/Logo Heart Street Side Software 16x16.png" />`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  scripts: [
    {
      defer: true,
      'data-domain': 'streetsidesoftware.com',
      src: 'https://plausible.io/js/script.js',
    },
  ],
};

export default config;
