<?php


namespace App\Features\Report;


use App\Data\Models\History;
use App\Domains\Report\ValidateReportRequestJob;
use Illuminate\Support\Carbon;
use Photon\Domains\Data\Jobs\BuildEloquentQueryFromRequestJob;
use Photon\Domains\Http\Jobs\JsonResponseJob;
use Photon\Foundation\Feature;

class ReportFeature extends Feature
{
    public function handle()
    {
        $input = $this->run(ValidateReportRequestJob::class);

        $date = $this->resolveDate($input['interval']);

        $model = History::latest()->where('created_at', '>=', $date)->where('operator', '=', $input['operator']);

        $result = $this->run(BuildEloquentQueryFromRequestJob::class, [
            'model' => $model
        ]);

        return $this->run(new JsonResponseJob($result));
    }

    private function resolveDate($interval): string
    {
        if ($interval === 'daily') {
            return Carbon::now()->toDateString();
        } elseif ($interval === 'weekly') {
            return Carbon::now()->subWeek()->toDateString();
        }
        return Carbon::now()->subMonth()->toDateString();
    }
}