module.exports = function (config) {
    config.set({
        files: [
            'src/test-setup.js',
            'src/index.js',
            'src/**/*.spec.js'
        ],

        frameworks: ['jasmine', 'browserify'],
        browsers: ['PhantomJS'],
        preprocessors: {
            'src/**/*.js': ['browserify']
        },
        reporters: config.reporters.concat(['coverage', 'junit']),
        browserify: {
            debug: true,
            transform: [
                'browserify-ngannotate',
                ['browserify-istanbul', {
                    ignore: ['src/test-setup.js', '**/*.html', '**/*.spec.js', '**/*.css']
                }]
            ]

        },
        coverageReporter: {
            dir: 'reports/coverage',
            reporters: [
                { type: 'text-summary' },
                {
                    type: 'lcov',
                    subdir: 'lcov',
                    root: 'src/'
                }
            ]
        }
    });
};