import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Layout = ({ children }) => (
    <div style={{ margin: '3rem auto', maxWidth: 600 }}>
        <Helmet
            title="Jon Mellman"
            meta={[
                { name: 'description', content: 'A really cool site!' },
                { name: 'keywords', content: 'Portfolio, Personal' },
            ]}
        >
            <html lang="en" />
        </Helmet>
        {children}
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

