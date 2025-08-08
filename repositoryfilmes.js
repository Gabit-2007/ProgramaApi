export async function listarFilmes() {
    const comando = `
    select *
    from filmess
    `;

    let [registros] = await connection.query(comando);
    return registros;
}

export async function inserirFilmes(novoFilme) {
  const comando = `
    INSERT INTO filmess (titulo, ano_lancamento, genero, duracao_minutos, diretor, avaliacao)
               values (?, ?, ?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novoFilme.titulo, novoFilme.ano_lancamento, novoFilme.genero, novoFilme.duracao_minutos, novoFilme.diretor, novoFilme.avaliacao])
  return info.insertId;
}