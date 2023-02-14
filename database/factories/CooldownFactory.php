<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CooldownFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'daily'=>$this->faker->numberBetween(0, 99),
            'dailyDate'=>$this->faker->dateTimeBetween("-100 days", "now"),
            'weekly'=>$this->faker->numberBetween(0, 99),
            'weeklyDate'=>$this->faker->dateTimeBetween("-100 days", "now"),
            'monthly'=>$this->faker->numberBetween(0, 99),
            'monthlyDate'=>$this->faker->dateTimeBetween("-100 days", "now"),
        ];
    }
}
