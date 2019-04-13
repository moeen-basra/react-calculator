<?php


namespace App\Http\Controllers;


use App\Features\Report\ReportFeature;
use Photon\Foundation\Controller;

class ReportController extends Controller
{
    public function index()
    {
        return $this->serve(ReportFeature::class);
    }
}