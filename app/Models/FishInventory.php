<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class FishInventory extends Model
{
    use HasFactory;

    protected $table = 'FishInventory';
    
    protected $keyType = "string";

    public $incrementing = false;
    public $timestamps = false;

}
