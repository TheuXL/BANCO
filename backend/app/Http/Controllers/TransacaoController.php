namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transacao;

class TransacaoController extends Controller
{
    public function index()
    {
        return Transacao::all();
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

        return Transacao::create([
            'valor' => $valor,
            'tipo' => $request->tipo,
            'categoria' => $request->categoria,
            'descricao' => $request->descricao,
        ]);
    }

    public function update(Request $request, $id)
    {
        $transacao = Transacao::findOrFail($id);
        $transacao->update($request->all());

        return $transacao;
    }

    public function destroy($id)
    {
        $transacao = Transacao::findOrFail($id);
        $transacao->delete();

        return response()->json(['message' => 'Transação excluída']);
    }
}
