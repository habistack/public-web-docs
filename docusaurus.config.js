const path = require('path');

module.exports = {
  title: 'Fathym Habistack',
  tagline: 'Ground weather foecasts made easy.',
  url: 'https://www.fathym.com/forecast',
  baseUrl: '/forecast/docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'habistack', // Usually your GitHub org/user name.
  projectName: 'public-web-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    navbar: {
      title: 'Habistack',
      logo: {
        alt: 'Habistack',
        src: 'img/Fathym-logo-white-01.png',
      },
      items: [
        {
          href: 'https://www.fathym.com/forecast',
          label: 'Home',
          position: 'left',
          target: '_top',
        },
        //{
        //  href: 'https://www.fathym.com/dashboard/forecast',
        //  label: 'Sign Up',
        //  position: 'left',
        //  target: '_top',
        //},
        //{
        // href: 'https://www.fathym.com/pricing',
        //  label: 'Pricing',
        //  position: 'right',
        //  target: '_top',
        //},
        {
          to: '/',
          label: 'Docs',
          position: 'right',
        },
        //{
        //  href: 'https://www.fathym.com/blog',
        //  label: 'Blog',
        // position: 'right',
        //  target: '_top',
        //},
        {
          href: 'https://www.fathym.com/dashboard/forecast',
          label: 'Sign In',
          position: 'right',
          target: '_top',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Next Steps',
          items: [
            {
              label: 'Getting Started',
              to: 'https://www.fathym.com/dashboard',
              target: '_top',
            },
            {
              label: 'Pricing',
              to: 'https://www.fathym.com/pricing',
              target: '_top',
            },
            {
              label: 'Support',
              to: '/introduction/support',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/habistack',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/habistack',
            //},
            {
              label: 'Twitter',
              href: 'https://twitter.com/habistack',
            },
          ],
        },
        {
          title: 'Powered by Fathym',
          items: [
            {
              label: 'Learn More',
              href: 'https://www.fathym.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fathym, Inc`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // The habistack website repo
          // editUrl: 'https://github.com/habistack/public-web-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // plugins: [path.resolve(__dirname, 'plugins/oribi')],
};
