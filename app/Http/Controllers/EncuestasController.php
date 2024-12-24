<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEncuestaRequest;
use App\Models\Encuesta;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;

class EncuestasController extends Controller
{
    public function index()
    {
        try {
            $encuestas = Encuesta::all();
            return response()->json($encuestas);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error al obtener las encuestas'], 500);
        }
    }

    public function show($id)
    {
        try {
            $encuesta = Encuesta::findOrFail($id);
            return response()->json($encuesta);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Encuesta no encontrada'], 404);
        }
    }

    public function store(StoreEncuestaRequest $request)
    {
        try {
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
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Datos inválidos', 'details' => $e->errors()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error al crear la encuesta'], 500);
        }
    }

    public function update(StoreEncuestaRequest $request, $id)
    {
        try {
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
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Encuesta no encontrada'], 404);
        } catch (Exception $e) {
                return response()->json(['error' => 'Error al actualizar la encuesta: ' . $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $encuesta = Encuesta::findOrFail($id);
            $encuesta->delete();

            return response()->json(['message' => 'Encuesta eliminada correctamente.']);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Encuesta no encontrada'], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error al eliminar la encuesta'], 500);
        }
    }
}
