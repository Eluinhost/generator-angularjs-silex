'use strict';

var ScriptBase = require('../scriptbase.js');


var AngularjsSilexGenerator = ScriptBase.extend({
    initializing: function () {
        this.controllerName = this.scriptName + 'Ctrl';
    },

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

    //TODO add the js file to the base index.html
    writing: function () {
        this.template('controller.js', this.srcFolder + '/' + this.component + '/' + this.scriptName + '.js');
    }
});

module.exports = AngularjsSilexGenerator;
