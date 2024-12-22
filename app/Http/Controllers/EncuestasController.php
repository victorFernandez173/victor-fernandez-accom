<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEncuestaRequest;
use App\Models\Encuesta;

class EncuestasController extends Controller
{
    public function index()
    {
        $encuestas = Encuesta::all();
        return response()->json($encuestas);
    }

    public function show($id)
    {
        $encuesta = Encuesta::findOrFail($id);
        return response()->json($encuesta);
    }

    public function store(StoreEncuestaRequest $request)
    {
        $encuesta = Encuesta::create([
            'user_id' => $request->user_id,
            'cliente_dni' => $request->cliente_dni,
            'producto' => $request->producto,
            'subproducto_luz' => $request->subproducto_luz,
            'subproducto_gas' => $request->subproducto_gas,
            'mantenimiento_luz' => $request->mantenimiento_luz,
            'mantenimiento_gas' => $request->mantenimiento_gas,
            'estatus' => $request->estatus,
        ]);

        return response()->json($encuesta, 201);
    }

    public function update(StoreEncuestaRequest $request, $id)
    {
        $encuesta = Encuesta::findOrFail($id);

        $encuesta->update([
            'user_id' => $request->user_id,
            'cliente_dni' => $request->cliente_dni,
            'producto' => $request->producto,
            'subproducto_luz' => $request->subproducto_luz,
            'subproducto_gas' => $request->subproducto_gas,
            'mantenimiento_luz' => $request->mantenimiento_luz,
            'mantenimiento_gas' => $request->mantenimiento_gas,
            'estatus' => $request->estatus,
        ]);

        return response()->json($encuesta);
    }

    public function destroy($id)
    {
        $encuesta = Encuesta::findOrFail($id);
        $encuesta->delete();

        return response()->json(['message' => 'Encuesta eliminada correctamente.']);
    }
}
