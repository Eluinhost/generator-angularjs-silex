# generator-angularjs-silex [![Build Status](https://secure.travis-ci.org/Eluinhost/generator-angularjs-silex.png?branch=master)](https://travis-ci.org/Eluinhost/generator-angularjs-silex)

> A [Yeoman](http://yeoman.io) generator for generating an AngularJS application with a Silex PHP API

## Generators

`angularjs-silex:app` / `angularjs-silex`

Generates an application, pass the name of the application as an argument. Generates a default API endpoint as well as
a default component.

### PHP

`angularjs-silex:api`

Adds a new class with the given name with an endpoint action and adds it to the API index.php

### AngularJS Scripts

All scripts automatically add themselves to the index.html when generated. Passing --component=name will skip the prompt
asking for the component name

- angularjs-silex:controller
- angularjs-silex:constant
- angularjs-silex:decorator
- angularjs-silex:directive
- angularjs-silex:factory
- angularjs-silex:filter
- angularjs-silex:provider
- angularjs-silex:service
- angularjs-silex:value

### AngularJS Other

`angularjs-silex:component`

Calls `controller`, `view` and `style` for the component name supplied. They all share the same name

`angularjs-silex:style`

Generates a SASS partial with the name given for the component that is asked for (provide --component=name to skip the
prompt). Automatically adds the generated file to the main.sass

`angularjs-silex:view`

Generates a view HTML file with the name given for the component that is asked for (provide --component=name to skip the
prompt).

## TODO

- Route generator (adding to app.js + controller + view)
- Tests

## License

MIT
