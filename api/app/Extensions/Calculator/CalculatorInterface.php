<?php


namespace App\Extensions\Calculator;


interface CalculatorInterface
{
    /**
     * Addition expression
     *
     * @param int|float $base
     * @param int|float $exp
     * @return int|float
     */
    public function add($base, $exp);

    /**
     * Subtraction expression
     *
     * @param int|float $base
     * @param int|float $exp
     * @return int|float
     */
    public function sub($base, $exp);

    /**
     * Multiplication expression
     *
     * @param int|float $base
     * @param int|float $exp
     * @return int|float
     */
    public function multi($base, $exp);

    /**
     * Division expression
     *
     * @param int|float $base
     * @param int|float $exp
     * @return int|float
     */
    public function div($base, $exp);

    /**
     * Percentage expression
     *
     * @param int|float $base
     * @return int|float
     */
    public function per($base);

    /**
     * Exponential expression
     *
     * @param int|float $base
     * @param int|float $exp
     * @return int|float base
     */
    public function pow($base, $exp);

    /**
     * Square root expression
     *
     * @param int|float $base
     * @return int|float
     */
    public function sqrt($base);

    /**
     * Cudbe root expression
     *
     * @param int|float $base
     * @return int|float
     */
    public function curt($base);

    /**
     * Factorial expression
     *
     * @param int|float $base
     * @return int|float
     */
    public function fact($base);
}