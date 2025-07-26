export default {
  getRoutes: async () => [
    {
      path: '/',
      template: 'src/Components/Home.jsx',
    },
    {
      path: '/about',
      template: 'src/Components/About.jsx',
    },
    {
      path: '/careers',
      template: 'src/Components/Careers.jsx',
    },
    {
      path: '/contact',
      template: 'src/Components/ContactUs.jsx',
    },
    {
      path: '/feedback',
      template: 'src/Components/Feedback.jsx',
    },
    {
      path: '/info',
      template: 'src/Components/InformationCentre.jsx',
    },
    {
      path: '/projects',
      template: 'src/Components/Projects.jsx',
    },
  ],
}
