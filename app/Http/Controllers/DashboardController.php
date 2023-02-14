<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Command;

class DashboardController extends Controller
{
    public function index()
    {
        $commands = Command::orderBy('id')->get();
        return Inertia::render('dashboard', [
            'commands' => $commands
        ]);
    }
}
