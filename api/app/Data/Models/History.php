<?php


namespace App\Data\Models;


use Illuminate\Support\Carbon;
use Photon\Foundation\Eloquent\Model;

/**
 * Class History
 * @package App\Data\Models
 *
 * @@property integer $id
 * @property string $operand1
 * @property string $operand2
 * @property string $operation
 * @property string $result
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class History extends Model
{

}