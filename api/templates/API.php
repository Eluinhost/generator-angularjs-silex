<?php

namespace <%= namespace %>;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class <%= className %>
{

    public function <%= "get" + className + "Action" %>(Request $request, Application $app)
    {
        return $app->json([
            'name' => $app['user']['name'],
            'age' => $app['user']['age']
        ]);
    }
}
