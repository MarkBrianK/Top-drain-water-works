module.exports = {
  siteMetadata: {
    title: 'TopDrain Water Works LTD',
    description: 'TopDrain Water Works LTD provides reliable solutions for flood control, plumbing, sewer systems, and water supply across Kenya.',
    author: 'TopDrain Water Works LTD',
    siteUrl: 'https://www.topdrainlimited.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TopDrain Water Works LTD',
        short_name: 'TopDrain',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#007bff',
        display: 'minimal-ui',
        icon: 'src/Assets/Images/logo.png',
      },
    },
  ],
}
