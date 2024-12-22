<?php

namespace App\Http\Controllers;

use App\Models\Encuesta;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $encuestas = Encuesta::all();

        return Inertia::render('Dashboard', [
            'encuestas' => $encuestas,
        ]);
    }
}
