
module.exports = function (grunt) {

    grunt.initConfig({
        env: {
            dev: {
                NODE_ENV: 'development'
            },
            test: {
                NODE_ENV: 'test'
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    ext: 'js,html',
                    watch: ['server.js', 'config/**/*.js', 'app/**/*.js']
                }
            }
        },
        mochaTest: {
            src: 'app/tests/**/*.js',
            options: {
                reporter: 'spec'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        protractor: {
            e2e: {
                options: {
                    configFile: 'protractor.conf.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('default', ['env:dev', 'nodemon']);
    grunt.registerTask('test', ['env:test', 'mochaTest', 'karma', 'protractor']);
};