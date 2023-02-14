<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ItemInventory>
 */
class ItemInventoryFactory extends Factory
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
            'item_id'=>$this->faker->unique(true)->randomElement(['chest_common', 'rod_diamond']),
            'amount'=>$this->faker->numberBetween(0, 9999),
        ];
    }
}
