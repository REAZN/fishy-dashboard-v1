<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create()->each(function ($user) {
            $inventory = \App\Models\Inventory::factory()->make();

            $user->inventory()->save($inventory);
            $user->stat()->save(\App\Models\Stat::factory()->make());
            $user->cooldown()->save(\App\Models\Cooldown::factory()->make());

            $inventory->items()->saveMany(\App\Models\ItemInventory::factory(1)->make());
            $inventory->fish()->saveMany(\App\Models\FishInventory::factory(1)->make());
        });


        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
