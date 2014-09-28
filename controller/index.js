'use strict';

var ScriptBase = require('../scriptbase.js');

var AngularjsSilexGenerator = ScriptBase.extend({
    initializing: function () {
        this.controllerName = this.scriptName + 'Ctrl';
    },

    prompting: function() {
        this.componentPrompt();
    },

    writing: function () {
        this.template('controller.js', this.srcFolder + '/components/' + this.component + '/' + this.scriptName + '.js');
    },

    install: function() {
        this.installScript(this.component, this.scriptName);
    }
});

module.exports = AngularjsSilexGenerator;
