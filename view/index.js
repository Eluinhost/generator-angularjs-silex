'use strict';

var ScriptBase = require('../scriptbase.js');


var AngularjsSilexGenerator = ScriptBase.extend({
    prompting: function () {
        var done = this.async();

        var prompts = [
            {
                name: 'component',
                message: 'What component do you want to add the controller to?',
                default: 'home'
            }
        ];

        this.prompt(prompts, function (props) {
            this.component = props.component;
            done();
        }.bind(this));
    },

    writing: function () {
        this.template('view.html', this.srcFolder + '/' + this.component + '/' + this.scriptName + '.html');
    }
});

module.exports = AngularjsSilexGenerator;
