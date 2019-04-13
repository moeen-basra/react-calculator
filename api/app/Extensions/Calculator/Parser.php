<?php


namespace App\Extensions\Calculator;


use Illuminate\Support\Arr;

class Parser
{
    private $total = null;
    private $next = null;
    private $operation = null;

    public function __construct($total, $next, $operation)
    {
        $this->total = $total;
        $this->next = $next;
        $this->operation = $operation;
    }

    public function handle($value)
    {
        if ($value === 'AC') {
            return $this->clear();
        }

        if (is_numeric($value)) {
            if ($value === '0' && $this->next === '0') {
                return $this->clear();
            }

            if ($this->operation) {
                if ($this->next) {
                    return [

                    ];
                }
            }
        }
    }



    public function clear()
    {
        return [
          'total' => null,
          'next' => null,
          'operation' => null,
        ];
    }
}