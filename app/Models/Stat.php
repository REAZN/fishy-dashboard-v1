<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Stat extends Model
{
    use HasFactory;

    protected $table = 'Stats';
    protected $keyType = "string";

    public $incrementing = false;
    public $timestamps = false;

}
