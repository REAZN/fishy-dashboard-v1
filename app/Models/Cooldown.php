<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cooldown extends Model
{
    use HasFactory;

    protected $table = 'Cooldowns';
    protected $keyType = "string";

    public $incrementing = false;
    public $timestamps = false;

}
