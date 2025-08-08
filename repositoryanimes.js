export async function listarAnimes() {
    const comando = `
    select *
    from animes
    `;

    let [registros] = await connection.query(comando);
    return registros;
}

export async function inserirAnimes(novoAnime) {
  const comando = `
    INSERT INTO animes (nome, genero, episodios, ano_lancamento, estudio, avaliacao)
               values (?, ?, ?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novoAnime.nome, novoAnime.genero, novoAnime.episodios, novoAnime.ano_lancamento, novoAnime.estudio, novoAnime.avaliacao])
  return info.insertId;
}
