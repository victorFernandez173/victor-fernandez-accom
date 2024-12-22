<?php

namespace App\Http\Controllers;

use App\Models\Encuesta;
use Inertia\Inertia;

class DashboardController extends Controller
{
    protected EncuestasController $encuestasController;

    public function __construct(EncuestasController $encuestasController)
    {
        $this->encuestasController = $encuestasController;
    }
    public function index()
    {
        $encuestas = Encuesta::all();

        return Inertia::render('Dashboard', [
            'encuestas' => $encuestas,
        ]);
    }

    public function delete($id)
    {
        $this->encuestasController->destroy($id);

        return redirect()->back();
    }
}
