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
        this.installStyle(this.component, this.scriptName);
    }
});

module.exports = AngularjsSilexGenerator;
