import Typography from 'typography';
import lincoln from 'typography-theme-lincoln';

const typography = new Typography(lincoln);

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
