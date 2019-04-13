<?php


namespace App\Domains\Calculate\Jobs;


use App\Extensions\Calculator\Calculator;
use Illuminate\Support\Arr;
use Photon\Foundation\Job;

class CalculateResultJob extends Job
{
    /**
     * @var array
     */
    private $input;

    public function __construct(array $input)
    {
        $this->input = $input;
    }

    public function handle(Calculator $calculator): array
    {
        $operator = Arr::get($this->input, 'operator');
        $operand1 = Arr::get($this->input, 'operand1');
        $operand2 = Arr::get($this->input, 'operand2');
        $result = null;

        switch ($operator) {
            case '+':
                $result = $calculator->add($operand1, $operand2);
                break;
            case '-':
                $result = $calculator->sub($operand1, $operand2);
                break;
            case '*':
                $result = $calculator->multi($operand1, $operand2);
                break;
            case '/':
                $result = $calculator->div($operand1, $operand2);
                break;
            case '%':
                $result = $calculator->per($operand1);
                break;
            case '√':
                $result = $calculator->sqrt($operand1);
                break;
            case '3√':
                $result = $calculator->curt($operand1);
                break;
            case 'xy':
                $result = $calculator->pow($operand1, $operand2);
                break;
            case 'x!':
                $result = $calculator->fact($operand1);
                break;
            default:
                break;
        }

        return [
            'operand1' => $operand1,
            'operand2' => $operand2,
            'operator' => $operator,
            'result' => $result === INF ? 'INF' : $result,
        ];
    }
}