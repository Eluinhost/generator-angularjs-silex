'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var AngularjsSilexGenerator = yeoman.generators.NamedBase.extend({
    initializing: function() {
        this.component = this._.classify(this._.slugify(this._.humanize(this.name)));
    },

    writing: function () {
        this.composeWith(
            'angularjs-silex:controller',
            { args: [this.component], options: { component: this.component}}
        );
        this.composeWith(
            'angularjs-silex:style',
            { args: [this.component], options: { component: this.component}}
        );
        this.composeWith(
            'angularjs-silex:view',
            { args: [this.component], options: { component: this.component}}
        );
    }
});

module.exports = AngularjsSilexGenerator;
