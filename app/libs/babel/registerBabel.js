// allow loading file in nodejs using import
require("@babel/polyfill");
require('@babel/register')({
  cache: false,
  ignore: [/\/(build|node_modules)\//],
  presets: ['@babel/preset-env'],
  plugins: [
    'dynamic-import-node',
    'closure-elimination',
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        alias: {
          '~': './app/src',
          constants: './app/src/constants',
          components: './app/src/components',
          systems: './app/src/systems',
        },
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
      },
    ],
  ],
});
