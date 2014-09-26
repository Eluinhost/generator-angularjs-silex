'use strict';

var ScriptBase = require('../scriptbase.js');


var AngularjsSilexGenerator = ScriptBase.extend({
    prompting: function() {
        this.componentPrompt();
    },

    //TODO add the sass partial to the base main.sass
    writing: function () {
        this.template('style.sass', this.srcFolder + '/' + this.component + '/_' + this.scriptName + '.sass');
    }
});

module.exports = AngularjsSilexGenerator;
