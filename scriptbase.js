'use strict';
var NamedBase = require('yeoman-generator').generators.NamedBase;

module.exports = NamedBase.extend({

    constructor: function () {
        NamedBase.apply(this, arguments);
        this.appName = this.config.get('appname');
        this.scriptAppName = this.appName + 'App';
        this.srcFolder = this.config.get('srcfolder');
        this.distFolder = this.config.get('distfolder');
        this.scriptName = this._.classify(this._.slugify(this._.humanize(this.name)));

        this.option('component', {
            desc: 'Name of the component to be added to',
            type: String,
            defaults: null
        });
    },

    componentPrompt: function () {
        var done = this.async();

        if(this.options['component'] == null) {
            var prompts = [
                {
                    name: 'component',
                    message: 'What component do you want to add this to?',
                    default: 'home'
                }
            ];

            this.prompt(prompts, function (props) {
                this.component = props.component;
                done();
            }.bind(this));
        } else {
            this.component = this.options['component'];
            done();
        }
    },

    installScript: function(component, name) {
        var $ = require('cheerio').load(this.readFileAsString(this.srcFolder + '/index.html'));

        var path = 'components/' + component + '/' + name + '.js';

        if($('script[src="' + path + '"]').length === 0) {
            $('script[src="app.js"]').after('\n<script src="' + path +'"></script>');
            this.writeFileFromString($.html(), this.srcFolder + '/index.html');
        }
    },

    installStyle: function(component, name) {
        var file = this.readFileAsString(this.srcFolder + '/main.sass');

        var path = 'components/' + component + '/' + name;

        if(file.search(this._escapeRegex('@import ' + path)) === -1) {
            this.writeFileFromString(file + '\n@import ' + path, this.srcFolder + '/main.sass');
        }
    },

    _escapeRegex: function(string) {
        return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    }
});
