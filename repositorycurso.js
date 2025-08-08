import { connection } from "./connections.js";


export async function listarCursos() {
  const comando = `
    select *
      from curso
  `;

  let [registros] = await connection.query(comando);
  return registros;
}


export async function inserirCurso(novoCurso) {
  const comando = `
    INSERT INTO curso (nome, carga_horaria, area)
               values (?, ?, ?)
  `

  let [info] = await connection.query(comando, [novoCurso.nome, novoCurso.carga_horaria, novoCurso.area])
  return info.insertId;
}

export async function listarTenis() {
    const comando = `
    select *
    from tenis
    `;

    let [registros] = await connection.query(comando);
    return registros;
}

export async function inserirTenis(novoTenis) {
  const comando = `
    INSERT INTO tenis (nome, marca, cor, tamanho, preco, categoria, estoque)
               values (?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novoTenis.nome, novoTenis.marca, novoTenis.cor, novoTenis.tamanho, novoTenis.preco, novoTenis.categoria, novoTenis.estoque])
  return info.insertId;
}

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

export async function listarJogos() {
  const comando = `
  select *
  from jogos
  `;

  let [registros] = await connection.query(comando);
  return registros;
}