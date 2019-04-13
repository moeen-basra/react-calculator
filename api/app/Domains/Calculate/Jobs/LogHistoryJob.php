<?php


namespace App\Domains\Calculate\Jobs;


use App\Data\Models\History;
use Illuminate\Bus\Queueable;
use Photon\Foundation\Exceptions\Exception;
use Photon\Foundation\Job;

class LogHistoryJob extends Job
{
    use Queueable;

    /**
     * @var array
     */
    private $input;

    public function __construct(array $input)
    {
        $this->input = $input;
    }

    /**
     * @return History
     * @throws Exception
     */
    public function handle(): History
    {
        $history = new History();

        $history->forceFill($this->input);

        app('db')->beginTransaction();

        if (!$history->save()) {
            app('db')->rollBack();

            throw new Exception('Oops, something went wrong while saving history');
        }

        app('db')->commit();

        return $history;
    }
}