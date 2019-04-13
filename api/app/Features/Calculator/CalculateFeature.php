<?php


namespace App\Features\Calculator;


use App\Domains\Calculate\Jobs\CalculateResultJob;
use App\Domains\Calculate\Jobs\LogHistoryJob;
use App\Domains\Calculate\Jobs\ValidateCalculateRequestJob;
use Photon\Domains\Http\Jobs\JsonResponseJob;
use Photon\Foundation\Feature;

class CalculateFeature extends Feature
{
    public function handle()
    {
        // get input after validation
        $input = $this->run(ValidateCalculateRequestJob::class);

        // calculate result
        $result = $this->run(CalculateResultJob::class, compact('input'));

        $this->runInQueue(LogHistoryJob::class, [
            'input' => $result,
        ], 'history');

        return $this->run(new JsonResponseJob($result));
    }
}