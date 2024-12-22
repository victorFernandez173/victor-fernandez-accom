<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Encuesta extends Model
{
    protected $table = 'encuestas';
    const CREATED_AT = 'creado';
    const UPDATED_AT = 'modificado';

    protected $fillable = [
        'user_id',
        'cliente_dni',
        'producto',
        'subproducto_luz',
        'subproducto_gas',
        'mantenimiento_luz',
        'mantenimiento_gas',
        'estatus',
    ];

    /**
     * Get the user that owns the encuesta.
     */
    public function comercial(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
