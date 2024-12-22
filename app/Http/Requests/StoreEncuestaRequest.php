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
