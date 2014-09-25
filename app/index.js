'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var AngularjsSilexGenerator = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('appname', { type: String, required: false });
        this.appname = this.appname || path.basename(process.cwd());
        this.appname = this._.classify(this._.slugify(this._.humanize(this.appname)));
        this.config.set('appname', this.appname);
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the AngularJS/Silex generator!'
        ));

        var prompts = [
            {
                name: 'namespace',
                message: 'What namespace do you want to use for the PHP files?',
                default: 'Temp\\Temp'
            },
            {
                name: 'author',
                message: 'What is your name? (Github username)',
                default: 'anon'
            },
            {
                name: 'srcfolder',
                message: 'Folder for AngularJS:',
                default: 'app'
            },
            {
                name: 'distfolder',
                message: 'Folder for built website:',
                default: 'dist'
            }
        ];

        this.prompt(prompts, function (props) {
            this.namespace = props.namespace;
            this.config.set('namespace', this.namespace);
            this.author = props.author;
            this.config.set('author', this.author);
            this.srcfolder = props.srcfolder;
            this.config.set('srcfolder', this.srcfolder);
            this.distfolder = props.distfolder;
            this.config.set('distfolder', this.distfolder);
            this.config.save();

            done();
        }.bind(this));
    },

    writing: {
        app: function () {
            var appFolder = this.config.get('srcfolder');
            this.dest.mkdir(appFolder);
            this.src.copy('app/robots.txt', appFolder + '/robots.txt');
            this.template('app/index.html', appFolder + '/index.html');
            this.template('app/app.js',     appFolder + '/app.js');
            this.src.copy('app/main.sass',  appFolder + '/main.sass');

            //api folder
            this.dest.mkdir('app/api');
            this.src.copy('app/api/.htaccess', appFolder + '/api/.htaccess');
            this.template('app/api/index.php', appFolder + '/api/index.php');
        },

        test: function() {
            this.dest.mkdir('test');
            this.src.copy('test/jshintrc', 'test/.jshintrc');
            this.src.copy('test/karma.conf.js', 'test/karma.conf.js');
        },

        config: function() {
            this.dest.mkdir('config');
            this.src.copy('config/config.yml', 'config/config.yml');
            this.src.copy('config/config_dev.yml', 'config/config_dev.yml');
            this.src.copy('config/config_prod.yml', 'config/config_prod.yml');
        },

        php: function() {
            this.dest.mkdir('src');
            this.template('src/Home.php', 'src/Home.php');
        },

        gruntfile: function() {
            this.template('_Gruntfile.js', 'Gruntfile.js');
        },

        projectfiles: function () {
            this.template('_package.json', 'package.json');
            this.template('_bower.json', 'bower.json');
            this.template('_bowerrc', '.bowerrc');
            this.template('_composer.json', 'composer.json');
            this.template('gitignore', '.gitignore');

            this.src.copy('sassConfig.rb', 'sassConfig.rb');
            this.src.copy('travis.yml', '.travis.yml');
            this.src.copy('editorconfig', '.editorconfig');
            this.src.copy('jshintrc', '.jshintrc');
        }
    },

    end: function () {
        var installDeps = this.options['skip-install'];
        var self = this;
        this.installDependencies({
            skipInstall: installDeps,
            skipMessage: this.options['skip-message'],
            callback: function() {
                if(installDeps) {
                    self.log(
                            'After running `npm install & bower install`, inject your front end dependencies' +
                            '\ninto your source code by running:' +
                            '\n' +
                            '\n' + chalk.yellow.bold('grunt wiredep')
                    );
                    self.log(
                            'You can install PHP composer dependencies by running: ' +
                            '\n' + chalk.yellow.bold('composer install')
                    );
                } else {
                    self.spawnCommand('grunt', ['wiredep']);
                    self.spawnCommand('composer', ['install']);
                }
            }
        });
    }
});

module.exports = AngularjsSilexGenerator;
