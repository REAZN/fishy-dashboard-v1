<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;

class User extends Model implements
    AuthenticatableContract,
    AuthorizableContract
{
    use HasApiTokens, HasFactory, Notifiable, \Illuminate\Auth\Authenticatable, Authorizable;

    protected $table = 'User';

    protected $keyType = "string";

    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = ["id" => "string"];

    public function inventory()
    {
        return $this->hasOne(Inventory::class);
    }

    public function stat()
    {
        return $this->hasOne(Stat::class);
    }

    public function cooldown()
    {
        return $this->hasOne(Cooldown::class);
    }
}
