<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['name' => 'admin']);
        Role::create(['name' => 'employee']);

        $adminUser = \App\Models\User::where('email', 'admin@accom.com')->first();
        $adminUser->email_verified_at = now();
        $adminUser->save();
        $adminUser?->assignRole('admin');

        $employeeUser = \App\Models\User::where('email', 'employee@accom.com')->first();
        $employeeUser->email_verified_at = now();
        $employeeUser->save();
        $employeeUser?->assignRole('employee');
    }
}
