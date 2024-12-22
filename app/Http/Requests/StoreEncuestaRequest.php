<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEncuestaRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'cliente_dni' =>  [
                'required',
                'string',
                'max:20',
                function ($attribute, $value, $fail) {
                    if (!$this->isValidNif($value) && !$this->isValidNie($value)) {
                        return $fail('El DNI/NIE proporcionado no es válido.');
                    }
                },
            ],
            'producto' => 'required|string|max:255',
            'subproducto' => 'nullable|string|max:255',
            'subproducto_gas' => 'nullable|string|max:255',
            'mantenimiento' => 'required|string|max:255',
            'mantenimiento_gas' => [
                'required_if:producto,DUAL',
                'max:255',
            ],
            'estatus' => 'required|string|max:20',
            'user_id' => 'required|exists:users,id',
        ];
    }

    public function messages(): array
    {
        return [
            'cliente_dni.required' => 'El DNI del cliente es obligatorio.',
            'cliente_dni.max' => 'El DNI no puede exceder los 20 caracteres.',
            'producto.required' => 'El producto es obligatorio.',
            'producto.string' => 'El producto debe ser un texto válido.',
            'producto.max' => 'El producto no puede exceder los 255 caracteres.',
            'subproducto.string' => 'El subproducto de luz debe ser un texto válido.',
            'subproducto.max' => 'El subproducto de luz no puede exceder los 255 caracteres.',
            'subproducto_gas.string' => 'El subproducto de gas debe ser un texto válido.',
            'subproducto_gas.max' => 'El subproducto de gas no puede exceder los 255 caracteres.',
            'mantenimiento.required' => 'El mantenimiento es obligatorio.',
            'mantenimiento.string' => 'El mantenimiento debe ser un texto válido.',
            'mantenimiento.max' => 'El mantenimiento no puede exceder los 255 caracteres.',
            'mantenimiento_gas.required' => 'El mantenimiento de gas es obligatorio.',
            'mantenimiento_gas.string' => 'El mantenimiento de gas debe ser un texto válido.',
            'mantenimiento_gas.max' => 'El mantenimiento de gas no puede exceder los 255 caracteres.',
            'mantenimiento_gas.required_if' => 'El mantenimiento de gas es obligatorio cuando el producto es DUAL.',
            'estatus.required' => 'El estado es obligatorio.',
            'estatus.string' => 'El estado debe ser un texto válido.',
            'estatus.max' => 'El estado no puede exceder los 20 caracteres.',
            'user_id.required' => 'El ID del usuario es obligatorio.',
            'user_id.exists' => 'El usuario proporcionado no existe en el sistema.',
        ];
    }


    public function isValidNif(?string $value): bool
    {
        if ($value) {
            $regEx = '/^[0-9]{8}[A-Z]$/i';

            $letters = 'TRWAGMYFPDXBNJZSQVHLCKE';

            $value = strtoupper($value);

            if (preg_match($regEx, $value)) {
                return $letters[substr($value, 0, 8) % 23] == $value[8];
            }
        }

        return false;
    }

    public function isValidNie(?string $value): bool
    {
        if ($value) {
            $regEx = '/^[KLMXYZ][0-9]{7}[A-Z]$/i';
            $letters = 'TRWAGMYFPDXBNJZSQVHLCKE';

            $value = strtoupper($value);

            if (preg_match($regEx, $value)) {
                $replaced = str_replace(['X', 'Y', 'Z'], [0, 1, 2], $value);

                return $letters[substr($replaced, 0, 8) % 23] == $value[8];
            }
        }

        return false;
    }

}
