'use strict';

var ScriptBase = require('../scriptbase.js');


var AngularjsSilexGenerator = ScriptBase.extend({
    initializing: function () {
        this.controllerName = this.scriptName + 'Ctrl';
    },

    prompting: function() {
        this.componentPrompt();
    },

    //TODO add the js file to the base index.html
    writing: function () {
        this.template('controller.js', this.srcFolder + '/' + this.component + '/' + this.scriptName + '.js');
    }
});

module.exports = AngularjsSilexGenerator;
