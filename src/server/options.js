import packageJson from '../../package.json';

export default {
  packageJson,
  frameworkPresets: [require.resolve('./framework-preset-twig.js')],
};