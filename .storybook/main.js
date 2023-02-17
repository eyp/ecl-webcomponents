const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

let staticDirs = [];

if (!isProd) {
  staticDirs = [
    path.resolve(`${__dirname}/../src/components/ecl-expandable`),
    path.resolve(`${__dirname}/../src/components/ecl-accordion`),
    path.resolve(`${__dirname}/../src/components/ecl-icon`),
    path.resolve(`${__dirname}/../src/components/ecl-social-media-share`),
    path.resolve(`${__dirname}/../src/components/ecl-media-container`),
    path.resolve(`${__dirname}/../src/components/ecl-message`),
    path.resolve(`${__dirname}/../src/components/ecl-carousel`),
    path.resolve(`${__dirname}/../src/components/ecl-file`),
    path.resolve(`${__dirname}/../src/components/ecl-news-ticker`),
    path.resolve(`${__dirname}/../src/components/ecl-select`),
    path.resolve(`${__dirname}/../src/components/ecl-input`),
    path.resolve(`${__dirname}/../src/components/ecl-category-filter`),
    path.resolve(`${__dirname}/../src/components/ecl-timeline`),
    path.resolve(`${__dirname}/../src/components/ecl-breadcrumb`),
    path.resolve(`${__dirname}/../src/components/ecl-inpage-navigation`),
    path.resolve(`${__dirname}/../src/components/ecl-popover`),
    path.resolve(`${__dirname}/../src/components/ecl-datepicker`),
    path.resolve(`${__dirname}/../src/components/ecl-site-header`),
    path.resolve(`${__dirname}/../src/components/ecl-gallery`),
  ];
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/html',
  staticDirs,
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
};
