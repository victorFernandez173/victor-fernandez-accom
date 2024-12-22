<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEncuestasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('encuestas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('cliente_dni', 9)->nullable(false);
            $table->enum('producto', ['LUZ', 'GAS', 'DUAL'])->nullable(false);
            $table->string('subproducto_luz', 50)->nullable();
            $table->string('subproducto_gas', 50)->nullable();
            $table->enum('mantenimiento_luz', ['SI', 'NO'])->nullable();
            $table->enum('mantenimiento_gas', ['SI', 'NO'])->nullable();
            $table->enum('estatus', ['VENDIDO', 'EN PROCESO', 'NO VENDIDO', 'NO VALIDO'])->nullable(false);
            $table->timestamp('creado')->useCurrent();
            $table->timestamp('modificado')->useCurrent();

            $table->engine = 'InnoDB';
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_unicode_ci';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('encuestas');
    }
}
