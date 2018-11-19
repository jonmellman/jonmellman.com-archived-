import Typography from 'typography';
import lincoln from 'typography-theme-lincoln';

lincoln.overrideThemeStyles = () => ({
    a: {
        textShadow: 'none',
    },
});

const typography = new Typography(lincoln);

if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;
