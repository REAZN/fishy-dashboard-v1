<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Inventory extends Model
{
    use HasFactory;

    protected $table = 'Inventory';
    protected $keyType = "string";

    public $incrementing = false;
    public $timestamps = false;


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items() 
    {
        return $this->hasMany(ItemInventory::class, "user_id", "user_id");
    }

    public function fish()
    {
        return $this->hasMany(FishInventory::class, "user_id", "user_id");
    }
}
