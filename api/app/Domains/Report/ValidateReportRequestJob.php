<?php


namespace App\Domains\Report;


use Laravel\Lumen\Routing\ProvidesConvenienceMethods;
use Photon\Foundation\Http\Request;
use Photon\Foundation\Job;

class ValidateReportRequestJob extends Job
{
    use ProvidesConvenienceMethods;

    public function handle(Request $request)
    {
        return $this->validate($request, [
            'interval' => 'required|in:daily,weekly,monthly',
            'operator' => 'required|in:+,-,/,*,%,√,3√,xy,x!',
        ]);
    }
}