'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var AngularjsSilexGenerator = yeoman.generators.NamedBase.extend({
    initializing: function () {
        this.className = this._.classify(this._.slugify(this._.humanize(this.name)));
        this.namespace = this.config.get('namespace');
    },

    writing: function () {
        this.template('API.php', 'src/' + this.className + '.php');
    },

    install: function () {
        var file = this.readFileAsString(this.config.get('srcfolder') + '/api/index.php');

        //generate Name\Space\ClassName::getClassNameAction
        var staticReference = this.namespace + '\\' + this.className + '::get' + this.className + 'Action';

        //change the \ to \\ as it will be in a string
        staticReference = staticReference.replace(/\\/g, '\\\\');

        if (file.indexOf(staticReference) === -1) {
            var newLine = '$app->get(\'/' + this.className.toLowerCase() + '\', \'' + staticReference + '\');';

            file = file.replace(/(\$app->run\(\);)/, newLine + '\n$1');

            this.writeFileFromString(file, this.config.get('srcfolder') + '/api/index.php');
        }
    },

    _escapeRegex: function (string) {
        return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    }
});

module.exports = AngularjsSilexGenerator;
