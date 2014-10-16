'use strict';
var ScriptBase = require('../scriptbase.js');

var AngularjsSilexGenerator = ScriptBase.extend({
    initializing: function() {
        this.scriptName = this.scriptName.substr(0,1).toLowerCase() + this.scriptName.substr(1);
    },

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
