<?php


namespace App\Http\Middleware;


use Photon\Foundation\Http\Request;

class CorsMiddleware
{
    /**
     * * Handle an incoming request.
     *
     * @param Request $request
     * @param \Closure $next
     * @return \Illuminate\Http\Response|\Laravel\Lumen\Http\ResponseFactory
     */
    public function handle(Request $request, \Closure $next)
    {
        //Intercepts OPTIONS requests
        if($request->isMethod('OPTIONS')) {
            $response = response('', 200);
        } else {
            // Pass the request to the next middleware
            $response = $next($request);
        }

        // Adds headers to the response
        $response->header('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
        $response->header('Access-Control-Allow-Headers', $request->header('Access-Control-Request-Headers'));
        $response->header('Access-Control-Allow-Origin', '*');

        // Sends it
        return $response;
    }
}