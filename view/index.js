'use strict';

var ScriptBase = require('../scriptbase.js');


var AngularjsSilexGenerator = ScriptBase.extend({
    prompting: function() {
        this.componentPrompt();
    },

    writing: function () {
        this.template('view.html', this.srcFolder + '/' + this.component + '/' + this.scriptName + '.html');
    }
});

module.exports = AngularjsSilexGenerator;
