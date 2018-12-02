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
        textShadow: 'none',
    },
    '.grid-tile img': {
        transition: 'filter 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.grid-tile:hover img': {
        filter: 'blur(2px) grayscale(50%)',
    },
    '.grid-tile .icon-container': {
        position: 'relative',
        left: '5.5rem',
        transition: 'left 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.grid-tile:hover .icon-container': {
        left: '-1rem',
    },
    '@media (hover: none)': {
        '.grid-tile .icon-container': {
            left: '-1rem',
        },
    },
    '.grid-title-bar': {
        transition: 'background-color 100ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.grid-tile:hover .grid-title-bar': {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
});

const typography = new Typography(lincoln);

if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;
