'use strict';

var ScriptBase = require('../scriptbase.js');


var AngularjsSilexGenerator = ScriptBase.extend({
    prompting: function () {
        var done = this.async();

        var prompts = [
            {
                name: 'component',
                message: 'What component do you want to add the style to?',
                default: 'home'
            }
        ];

        this.prompt(prompts, function (props) {
            this.component = props.component;
            done();
        }.bind(this));
    },

    //TODO add the sass partial to the base main.sass
    writing: function () {
        this.template('style.sass', this.srcFolder + '/' + this.component + '/_' + this.scriptName + '.sass');
    }
});

module.exports = AngularjsSilexGenerator;
