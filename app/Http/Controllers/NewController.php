<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEncuestaRequest;
use App\Models\Encuesta;
use Inertia\Inertia;

class NewController extends Controller
{

    // aquí el código de NewController
    public function nuevaFuncionEjemplo()
    {
        // aquí el código de la nueva función de prueba
        if(true){
            // nueva structura de control en la funcion añadida desde new-branch
            return false;
        }
    }

    public function nuevaFuncionFromDevelop()
    {
        // aquí el código de la función añadido desde github
        // nuevos cambios para stagear
        // incluye estos cambios en el commit previo
        // nuevos cambios a incluir en commit previo (amend)
    }
}
