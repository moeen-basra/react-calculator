<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(\App\Data\Models\History::class, function (\Faker\Generator $facker) {
    $operators = ['+', '-', '/', '*', '%', '√', '3√', 'xy', 'x!'];
    $expensive_operators = ['xy', 'x!'];
    $single_operand_operators = ['%', '√', '3√', 'x!'];

    $date = $facker->dateTimeBetween('-1 months');
    $operator = $operators[array_rand($operators, 1)];

    $operand1 = (in_array($operator, $expensive_operators)) ? mt_rand(1, 100) : mt_rand(1, 999999);
    $operand2 = (in_array($operator, $single_operand_operators)) ? null : ((in_array($operator, $expensive_operators))? mt_rand(1, 100) : mt_rand(1, 999999));

    $input = [
        'operand1' => $operand1,
        'operand2' => $operand2,
        'operator' => $operator,
    ];

//    dd($input);
    $result = with(new \App\Domains\Calculate\Jobs\CalculateResultJob($input))
        ->handle(new \App\Extensions\Calculator\Calculator());

    return array_merge($result, [
        'created_at' => $date,
        'updated_at' => $date
    ]);
});
