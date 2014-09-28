'use strict';

var ScriptBase = require('../scriptbase.js');

var AngularjsSilexGenerator = ScriptBase.extend({
    prompting: function() {
        this.componentPrompt();
    },

    writing: function () {
        this.template('style.sass', this.srcFolder + '/components/' + this.component + '/_' + this.scriptName + '.sass');
    },

    install: function() {
        this.installStyle('components/' + this.component + '/' + this.scriptName);
    },

    _escapeRegex: function(string) {
        return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    }
});

module.exports = AngularjsSilexGenerator;
