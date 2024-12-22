<?php

use App\Http\Controllers\EncuestasController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::middleware('role:admin|employee')->group(function () {
        Route::get('encuestas', [EncuestasController::class, 'index'])->name('encuestas.index');
        Route::get('encuestas/{id}', [EncuestasController::class, 'show'])->name('encuestas.show');
        Route::post('encuestas', [EncuestasController::class, 'store'])->name('encuestas.store');
    });

    Route::middleware('role:admin')->group(function () {
        Route::put('encuestas/{id}', [EncuestasController::class, 'update'])->name('encuestas.update');
        Route::patch('encuestas/{id}', [EncuestasController::class, 'update'])->name('encuestas.update');
        Route::delete('encuestas/{id}', [EncuestasController::class, 'destroy'])->name('encuestas.destroy');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
