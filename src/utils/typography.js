import Typography from 'typography';
import lincoln from 'typography-theme-lincoln';

lincoln.overrideThemeStyles = () => ({
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
