public function up()
{
    Schema::create('transacoes', function (Blueprint $table) {
        $table->id();
        $table->decimal('valor', 10, 2);
        $table->enum('tipo', ['receita', 'despesa']);
        $table->string('categoria');
        $table->text('descricao')->nullable();
        $table->timestamps();
    });
}
