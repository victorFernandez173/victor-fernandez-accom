<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEncuestaRequest;
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

    public function create(StoreEncuestaRequest $request)
    {
        $encuesta = Encuesta::create([
            'user_id' => auth()->id(),
            'cliente_dni' => $request->cliente_dni,
            'producto' => $request->producto,
            'subproducto' => $request->subproducto,
            'subproducto_gas' => $request->subproducto_gas,
            'mantenimiento' => $request->mantenimiento,
            'mantenimiento_gas' => $request->mantenimiento_gas,
            'estatus' => $request->estatus,
        ]);

        return redirect()->back();
    }

    public function delete($id)
    {
        $this->encuestasController->destroy($id);

        return redirect()->back();
    }
}
