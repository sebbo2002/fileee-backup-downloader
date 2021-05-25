import shebang from 'rollup-plugin-preserve-shebang';

const plugins = [
    shebang()
];

export default [
    {
        input: 'src/bin/start.js',
        output: {
            file: 'dist/bin/start.js',
            format: 'cjs'
        },
        external: [
            'os',
            'path',
            'fs/promises',
            'puppeteer',
            'readline'
        ],
        plugins
    }
];
