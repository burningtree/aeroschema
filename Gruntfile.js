module.exports = function(grunt) {
  grunt.initConfig({
    yaml: {
      schema: {
        options: {
        },
        files: [{
          expand: true,
          cwd: 'src/schema',
          src: [ '**/*.yaml' ],
          dest: 'schema',
          ext: '.json'
        }]
      },
      examples: {
        files: [{
          expand: true,
          cwd: 'src/examples',
          src: [ '**/*.yaml' ],
          dest: 'examples',
          ext: '.json'
        }]
      },
    }
  });
  grunt.loadNpmTasks('grunt-yaml');
  return grunt.registerTask('default', ['yaml']);
};
