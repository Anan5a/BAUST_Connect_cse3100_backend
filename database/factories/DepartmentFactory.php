<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Date;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Department>
 */
class DepartmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => 'Computer Science and Engineering',
            'name_short'=>'CSE',
            'description'=>'description .... ddd',
            'birth_date'=>Date::now(),
            'icon'=>'icon',
            'backdrop'=>'bd',
            'external_link'=>'el',
        ];
    }
}
