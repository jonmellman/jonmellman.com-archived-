import Typography from 'typography';
import lincoln from 'typography-theme-lincoln';

lincoln.overrideThemeStyles = () => ({
    html: {
        backgroundColor: '#a8b5b2',
    },
    body: {
        margin: '3rem auto',
        maxWidth: '632px',
        padding: '32px',
        backgroundColor: 'white',
        boxShadow: '20px 20px 20px 0px black',
    },
    a: {
        textShadow: 'none',
        backgroundImage: 'none',
    },
    'p a:hover': {
        textDecoration: 'underline',
    },
    'a img:hover': {
        filter: 'contrast(1.5)',
    },
});

const typography = new Typography(lincoln);

if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;
