<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware('role:admin|employee')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::post('/dashboard/encuestas/create', [DashboardController::class, 'create'])->name('dashboard.create');
        Route::post('/dashboard/encuestas/fetch-all', [DashboardController::class, 'fetchEncuestas'])->name('dashboard.fetchEncuestas');
    });

    Route::middleware('role:admin')->group(function () {
        Route::delete('/dashboard/encuestas/{id}', [DashboardController::class, 'delete'])->name('dashboard.delete');
    });
});

require __DIR__.'/auth.php';
