'use strict';
var ScriptBase = require('../scriptbase.js');

var AngularjsSilexGenerator = ScriptBase.extend({
    prompting: function() {
        this.componentPrompt();
    },

    writing: function () {
        this.template('directive.js', this.srcFolder + '/components/' + this.component + '/' + this.scriptName + '.js');
    },

    install: function() {
        this.installScript(this.component, this.scriptName);
    }
});

module.exports = AngularjsSilexGenerator;
