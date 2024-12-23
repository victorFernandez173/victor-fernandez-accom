<?php

use App\Http\Controllers\EncuestasController;
use App\Http\Controllers\SanctumAuthController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [SanctumAuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
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
