import shebang from 'rollup-plugin-preserve-shebang';

const plugins = [
    shebang()
];

const external = [
    'os',
    'path',
    'fs/promises',
    'puppeteer',
    'readline'
];

export default [
    {
        input: 'src/bin/start.js',
        output: {
            file: 'dist/bin/start.cjs',
            format: 'cjs'
        },
        plugins,
        external
    },
];
