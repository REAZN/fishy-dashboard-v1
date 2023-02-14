<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Stats>
 */
class StatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'chestsFound'=>$this->faker->numberBetween(0, 999),
            'chestsOpened'=>$this->faker->numberBetween(0, 999),
            'fishCaught'=>$this->faker->numberBetween(0, 999),
            'fishSold'=>$this->faker->numberBetween(0, 999),
            'moneyMade'=>$this->faker->numberBetween(0, 999),
            'moneySpent'=>$this->faker->numberBetween(0, 999),
            'coinflipsWon'=>$this->faker->numberBetween(0, 999),
            'coinflipsLost'=>$this->faker->numberBetween(0, 999),
            'coinflipsMoneyWon'=>$this->faker->numberBetween(0, 999),
            'coinflipsMoneyLost'=>$this->faker->numberBetween(0, 999),
        ];
    }
}
