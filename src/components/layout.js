import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div style={{ margin: '3rem auto', maxWidth: 600 }}>
              <Helmet
                title={data.site.siteMetadata.title}
                  meta={[
                      { name: 'description', content: 'A really cool site!' },
                      { name: 'keywords', content: 'Portfolio, Personal' },
                  ]}
              >
                  <html lang="en" />
              </Helmet>
              {children}
          </div>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
