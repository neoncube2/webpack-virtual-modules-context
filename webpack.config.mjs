import webpack from 'webpack';

const WEBPACK_CONFIG = {
    entry: 'virtual:C:/project/user.js',
    mode: 'production',
    plugins: [
        new webpack.experiments.schemes.VirtualUrlPlugin(
            {
                'C:/project/user.js': {
                    source: () => `import './username.js';`
                }
            }
        )
    ]
};

export default WEBPACK_CONFIG;