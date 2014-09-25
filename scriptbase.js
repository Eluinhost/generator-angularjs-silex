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
    }
});
