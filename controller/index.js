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
        var file = fs.readFileSync(this.srcFolder + '/index.html');
        var $ = cheerio.load(file);

        var scriptName = this.srcFolder + '/' + this.component + '/' + this.scriptName + '.js';

        if($('script[src="' + scriptName + '"]').length == 0) {
            $('script[src="app.js"]').after('\n<script src="' + scriptName +'"></script>');
        }

        fs.writeFileSync(this.srcFolder + '/index.html', $.html());
    }
});

module.exports = AngularjsSilexGenerator;
