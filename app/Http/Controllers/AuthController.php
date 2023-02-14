<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Auth;

class AuthController extends Controller
{
    public function login()
    {
        return Socialite::driver('discord')->redirect();
    }

    public function logout()
    {
        Auth::logout();
        session()->invalidate();
        return redirect()->route('home');
    }

    public function callback()
    {
        $user = Socialite::driver('discord')->user();
        $dbUser = User::find($user->getId());

        if ($dbUser->rank === 'ADMIN') {
            Auth::login($dbUser);

            session()->put('discord_user', $user);
            session()->regenerate(true);

            return redirect()->route('dashboard.index');
        } else {
            return redirect()->route('home');
        }
    }
}
