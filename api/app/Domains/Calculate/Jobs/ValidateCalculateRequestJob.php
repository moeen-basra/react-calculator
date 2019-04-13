<?php


namespace App\Domains\Calculate\Jobs;


use Laravel\Lumen\Routing\ProvidesConvenienceMethods;
use Photon\Foundation\Http\Request;
use Photon\Foundation\Job;

class ValidateCalculateRequestJob extends Job
{
    use ProvidesConvenienceMethods;

    /**
     * @param Request $request
     * @return array
     * @throws \Illuminate\Validation\ValidationException
     */
    public function handle(Request $request)
    {
        return $this->validate($request, [
            'operand1' => 'required|numeric',
            'operand2' => 'required_if:operator,+,-,/,*,xy',
            'operator' => 'required|in:+,-,/,*,%,√,3√,xy,x!',
        ]);
    }
}