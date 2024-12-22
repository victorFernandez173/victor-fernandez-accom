<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@accom.com',
            'password' => Hash::make('admin@accom.com'),
        ]);

        $employee = User::create([
            'name' => 'Employee',
            'email' => 'employee@accom.com',
            'password' => Hash::make('employee@accom.com'),
        ]);
    }
}
