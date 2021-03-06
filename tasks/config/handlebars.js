/**
 * Precompiles Handlebars templates.
 *
 * ---------------------------------------------------------------
 */

module.exports = function(grunt) {

    grunt.config.set('emberTemplates', {
        dev: {
            options: {
                templateBasePath: /assets\/templates\//
            },
            files: {
                '.tmp/public/template.js': require('../pipeline').templateFilesToInject
            }
        }
    });

    grunt.loadNpmTasks('grunt-ember-templates');
};
