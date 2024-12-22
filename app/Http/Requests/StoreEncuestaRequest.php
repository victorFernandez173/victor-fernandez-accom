<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEncuestaRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'cliente_dni' => 'required|string|max:20',
            'producto' => 'required|string|max:255',
            'subproducto_luz' => 'nullable|string|max:255',
            'subproducto_gas' => 'nullable|string|max:255',
            'mantenimiento_luz' => 'nullable|string|max:255',
            'mantenimiento_gas' => 'nullable|string|max:255',
            'estatus' => 'required|string|max:20',
            'user_id' => 'required|exists:users,id',
        ];
    }

    public function messages(): array
    {
        return [
            'cliente_dni.required' => 'El DNI del cliente es obligatorio.',
            'producto.required' => 'El producto es obligatorio.',
            'estatus.required' => 'El estatus es obligatorio.',
        ];
    }
}
