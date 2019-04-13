<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Laravel\Lumen\Exceptions\Handler as ExceptionHandler;
use Photon\Domains\Http\Jobs\JsonErrorResponseJob;
use Photon\Foundation\Traits\JobDispatcherTrait;
use Photon\Foundation\Traits\MarshalTrait;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Handler extends ExceptionHandler
{
    use MarshalTrait, JobDispatcherTrait;
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        AuthorizationException::class,
        HttpException::class,
        ModelNotFoundException::class,
        ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param Exception $exception
     * @throws Exception
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param \Illuminate\Http\Request $request
     * @param Exception $exception
     * @return \Illuminate\Http\Response|mixed
     */
    public function render($request, Exception $exception)
    {
        if ($exception instanceof ValidationException) {
            return $this->run(JsonErrorResponseJob::class, [
                'message' => $exception->errors(),
                'code' => get_class($exception),
                'status' => 422,
            ]);
        }
        if (env('APP_DEBUG') === true) {
            return parent::render($request, $exception);
        }

        return $this->run(JsonErrorResponseJob::class, [
            'message' => $exception->getMessage(),
            'code' => get_class($exception),
            'status' => ($exception->getCode() < 100 || $exception->getCode() >= 600) ? 400 : $exception->getCode(),
        ]);
    }
}
