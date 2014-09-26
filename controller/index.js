'use strict';

var ScriptBase = require('../scriptbase.js');
var cheerio = require('cheerio');
var fs = require('fs');

var AngularjsSilexGenerator = ScriptBase.extend({
    initializing: function () {
        this.controllerName = this.scriptName + 'Ctrl';
    },

    prompting: function() {
        this.componentPrompt();
    },

    writing: function () {
        this.template('controller.js', this.srcFolder + '/' + this.component + '/' + this.scriptName + '.js');
    },

    install: function() {
        var $ = cheerio.load(this.readFileAsString(this.srcFolder + '/index.html'));

        var scriptName = 'component/' + this.component + '/' + this.scriptName + '.js';

        if($('script[src="' + scriptName + '"]').length == 0) {
            $('script[src="app.js"]').after('\n<script src="' + scriptName +'"></script>');
            this.writeFileFromString($.html(), this.srcFolder + '/index.html');
        }
    }
});

module.exports = AngularjsSilexGenerator;
