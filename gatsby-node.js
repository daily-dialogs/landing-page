/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  // Ensure apple-app-site-association is served with correct content type
  if (page.path === '/.well-known/apple-app-site-association') {
    page.context.contentType = 'application/json'
  }
}

// You can delete this file if you're not using it
