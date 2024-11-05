<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTipoTransacaoIdToTransacoesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('transacoes', function (Blueprint $table) {
            // Verifica se a coluna já existe
            if (!Schema::hasColumn('transacoes', 'tipo_transacao_id')) {
                $table->unsignedBigInteger('tipo_transacao_id')->nullable(); // Adicionando a coluna
            }

            // Adicionando a chave estrangeira
            $table->foreign('tipo_transacao_id')
                  ->references('id')
                  ->on('tipos_transacao')
                  ->onDelete('cascade'); // Ou 'set null' se preferir
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('transacoes', function (Blueprint $table) {
            // Removendo a chave estrangeira
            $table->dropForeign(['tipo_transacao_id']);
            // Remover a coluna, se necessário
            $table->dropColumn('tipo_transacao_id');
        });
    }
}
