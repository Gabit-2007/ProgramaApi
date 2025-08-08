export async function listarSeries() {
    const comando = `
    select *
    from series
    `;

    let [registros] = await connection.query(comando);
    return registros;
}

export async function inserirSeries(novaSerie) {
  const comando = `
    INSERT INTO series (titulo, ano_lancamento, genero, temporadas, criador, avaliacao)
               values (?, ?, ?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novaSerie.titulo, novaSerie.ano_lancamento, novaSerie.genero, novaSerie.temporadas, novaSerie.criador, novaSerie.avaliacao])
  return info.insertId;
}