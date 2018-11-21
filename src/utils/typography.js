import Typography from 'typography';
import lincoln from 'typography-theme-lincoln';

lincoln.overrideThemeStyles = () => ({
    html: {
        backgroundColor: '#a8b5b2',
    },
    body: {
        margin: '3rem auto',
        maxWidth: '36rem',
        minHeight: '40rem',
        padding: '2rem',
        backgroundColor: 'white',
        boxShadow: '1rem 1rem 0rem 0rem #00000099',
    },
    a: {
        textShadow: 'none',
        backgroundImage: 'none',
    },
    'p a:hover': {
        textDecoration: 'underline',
    },
    '.grid-tile': {
        flex: '1 1 auto',
        minWidth: '260px',
    },
    '.grid-title-bar': {
        transition: 'bottom 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        bottom: '0',
    },
    '.grid-tile:hover img': {
        filter: 'blur(3px) grayscale(40%)',
    },
    '.grid-tile:hover .grid-title-bar': {
        bottom: '100px',
    },
});

const typography = new Typography(lincoln);

if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;
