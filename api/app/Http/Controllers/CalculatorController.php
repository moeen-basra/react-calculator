<?php


namespace App\Http\Controllers;

use App\Features\Calculator\CalculateFeature;
use Photon\Foundation\Controller;

/**
 * Class CalculatorController
 * @package App\Http\Controllers
 */
class CalculatorController extends Controller
{
    public function calculate()
    {
        return $this->serve(CalculateFeature::class);
    }
}