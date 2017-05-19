
const webPackConfig = require('./../webpack/webpack.config.styleguide.js');

module.exports = {
    sections: [
        {
            name: 'Base Components',
            components: '../../app/client/modules/base/components/**/*.js'
        },
        {
            name: 'Shell',
            components: '../../app/client/modules/shell/components/**/*.js'
        }
    ],
    webpackConfig: webPackConfig,
    require: [
        'font-awesome-webpack-2'
    ],
    assetsDir: '../../app/public'
};