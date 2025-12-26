module.exports = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Learn AI in the Physical World',
  url: 'https://physai-robotics.github.io',
  baseUrl: '/physical-ai-humanoid-robotics-textbook/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'physical-ai-humanoid-robotics-textbook',
  organizationName: 'physai-robotics',
  themeConfig: {
    navbar: {
      title: 'Physical AI & Robotics',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Curriculum',
        },
        {
          label: 'Resources',
          position: 'right',
        },
        {
          href: 'https://github.com/physai-robotics/physical-ai-humanoid-robotics-textbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'Built with Docusaurus. RAG Chatbot powered by OpenAI & Qdrant.',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/physai-robotics/physical-ai-humanoid-robotics-textbook/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
