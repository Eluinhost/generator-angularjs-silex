# generator-angularjs-silex [![Build Status](https://secure.travis-ci.org/Eluinhost/generator-angularjs-silex.png?branch=master)](https://travis-ci.org/Eluinhost/generator-angularjs-silex)

> A [Yeoman](http://yeoman.io) generator for generating an AngularJS application with a Silex PHP API

## Generators

`angularjs-silex:app` / `angularjs-silex`

Generates an application, pass the name of the application as an argument. Generates a default API endpoint as well as
a default component.

`angularjs-silex:api`

Adds a new class with the given name with an endpoint action and adds it to the API index.php

`angularjs-silex:component`

Calls `controller`, `view` and `style` for the component name supplied. They all share the same name

`angularjs-silex:controller`

Generates a controller with the name given for the component that is asked for (provide --component=name to skip the
prompt). Automatically adds the generated file to the index.html

`angularjs-silex:style`

Generates a SASS partial with the name given for the component that is asked for (provide --component=name to skip the
prompt). Automatically adds the generated file to the main.sass

`angularjs-silex:view`

Generates a view HTML file with the name given for the component that is asked for (provide --component=name to skip the
prompt).

## TODO

- Service/Factory/Constant/Provider/Value/Directive generators
- Tests

## License

MIT
