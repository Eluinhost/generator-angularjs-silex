'use strict';

var ScriptBase = require('../scriptbase.js');

var AngularjsSilexGenerator = ScriptBase.extend({
    prompting: function() {
        this.componentPrompt();
    },

    writing: function () {
        this.template('style.sass', this.srcFolder + '/' + this.component + '/_' + this.scriptName + '.sass');
    },

    install: function() {
        var file = this.readFileAsString(this.srcFolder + '/main.sass');

        if(file.search(this._escapeRegex('@import ' + this.component + '/' + this.scriptName)) === -1) {
            this.writeFileFromString(file + '\n@import ' + this.component + '/' + this.scriptName, this.srcFolder + '/main.sass');
        }
    },

    _escapeRegex: function(string) {
        return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    }
});

module.exports = AngularjsSilexGenerator;
