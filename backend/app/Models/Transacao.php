<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transacao extends Model
{
    use HasFactory;

    protected $table = 'transacoes'; // Certifique-se de que o nome está correto
    protected $fillable = ['valor', 'tipo', 'categoria', 'descricao'];
}