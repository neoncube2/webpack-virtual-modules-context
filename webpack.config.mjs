import webpack from 'webpack';

const WEBPACK_CONFIG = {
    entry: '/index.js',
    mode: 'production',
    plugins: [
        new webpack.experiments.schemes.VirtualUrlPlugin(
            {
                'C:/project/user.js': {
                    type: '.js',
                    source: () => `import './username.js';`
                }
            }
        )
    ]
};

export default WEBPACK_CONFIG;