<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id' => $this->faker->numberBetween(99999999, 99999999999),
            'name' => $this->faker->username,
            'avatar' => $this->faker->imageUrl(),
            'rank' => $this->faker->randomElement(['USER', 'VIP']),
            'balance' => $this->faker->numberBetween(0, 999999999),
            'xp' => $this->faker->numberBetween(0, 999999999),
            'prestige' => $this->faker->numberBetween(0, 5),
        ];
    }
}
