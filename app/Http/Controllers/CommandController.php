<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Command;

class CommandController extends Controller
{
    public function update(Request $request, Command $command) 
    {
        $data = $request->validate([
            'enabled' => 'required',
        ]);

        $command->update($data);

        return back();
    }
}
