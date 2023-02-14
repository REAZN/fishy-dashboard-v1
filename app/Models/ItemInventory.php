<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class ItemInventory extends Model
{
    use HasFactory;

    protected $table = 'ItemInventory';

    protected $keyType = "string";

    public $incrementing = false;
    public $timestamps = false;

}
