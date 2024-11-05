<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transacao;
use Illuminate\Support\Facades\Response;

class TransacaoController extends Controller
{
    public function index()
    {
        // Retorna todas as transações em formato JSON
        return response()->json(Transacao::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'valor' => 'required|numeric',
            'tipo' => 'required|in:receita,despesa',
            'categoria' => 'required|string',
            'descricao' => 'nullable|string',
        ]);

        $valor = $request->tipo === 'despesa' ? -abs($request->valor) : abs($request->valor);

        $transacao = Transacao::create([
            'valor' => $valor,
            'tipo' => $request->tipo,
            'categoria' => $request->categoria,
            'descricao' => $request->descricao,
        ]);

        return response()->json($transacao, 201); // Retorna a nova transação com código 201
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'valor' => 'sometimes|required|numeric',
            'tipo' => 'sometimes|required|in:receita,despesa',
            'categoria' => 'sometimes|required|string',
            'descricao' => 'sometimes|nullable|string',
        ]);

        $transacao = Transacao::findOrFail($id);

        $valor = $request->input('tipo', $transacao->tipo) === 'despesa' 
            ? -abs($request->input('valor', $transacao->valor)) 
            : abs($request->input('valor', $transacao->valor));

        $transacao->update(array_merge($request->all(), ['valor' => $valor]));

        return response()->json($transacao);
    }

    public function destroy($id)
    {
        $transacao = Transacao::findOrFail($id);
        $transacao->delete();

        return response()->json(['message' => 'Transação excluída']);
    }
    
    public function getByTipo($tipo)
    {
        return response()->json(Transacao::where('tipo', $tipo)->get());
    }
}
