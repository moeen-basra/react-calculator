<?php

use Illuminate\Database\Seeder;

class HistoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Data\Models\History::class, 5000)
            ->make()
            ->each(function ($history) {
                if (!$history->result) {
                    dd($history->toArray());
                }
                $history->save();
            });
    }
}
