<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model as LModel;

class Model extends LModel
{
    public function getCreatedAtColumn()
    {
        return 'createdAt';
    }

    public function getUpdatedAtColumn()
    {
        return 'updatedAt';
    }
}