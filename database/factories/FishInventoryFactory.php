<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FishInventory>
 */
class FishInventoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'uuid'=>$this->faker->uuid(),
            'id'=>$this->faker->unique(true)->randomElement(['fish_cod', 'fish_salmon', 'fish_pufferfish', 'fish_tropical']),
            'amount'=>$this->faker->numberBetween(0, 9999),
            'level'=>$this->faker->numberBetween(1, 3),
        ];
    }
}
