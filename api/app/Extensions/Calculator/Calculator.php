<?php


namespace App\Extensions\Calculator;


class Calculator implements CalculatorInterface
{
    public function add($base, $exp)
    {
        return $base + $exp;
    }

    public function sub($base, $exp)
    {
        return $base - $exp;
    }

    public function multi($base, $exp)
    {
        return $base * $exp;
    }

    public function div($base, $exp)
    {
        return $base / $exp;
    }

    public function per($base)
    {
        return $base / 100;
    }

    public function sqrt($base)
    {
        return pow($base, 1/2);
    }

    public function curt($base)
    {
        return pow($base, 1 / 3);
    }

    public function pow($base, $exp)
    {
        return pow($base, $exp);
    }

    public function fact($base)
    {
        if ($base <= 1) {
            return 1;
        }
        return $base * $this->fact($base - 1);
    }
}