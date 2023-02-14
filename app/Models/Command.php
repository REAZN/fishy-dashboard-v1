<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Command extends Model
{
    use HasFactory;

    protected $table = 'Commands';
    protected $fillable = [
        'enabled',
    ];
    protected $keyType = 'string';

    public $incrementing = false;

}
