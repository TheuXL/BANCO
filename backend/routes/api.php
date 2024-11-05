<?php

use App\Http\Controllers\TransacaoController;

// Rotas para Transações
Route::apiResource('transacoes', TransacaoController::class);
Route::get('transacoes/tipo/{tipo}', [TransacaoController::class, 'getByTipo']);