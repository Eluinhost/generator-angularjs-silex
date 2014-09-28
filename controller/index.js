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
        var scriptName = 'components/' + this.component + '/' + this.scriptName + '.js';
        this.installScript(scriptName);
    }
});

module.exports = AngularjsSilexGenerator;
