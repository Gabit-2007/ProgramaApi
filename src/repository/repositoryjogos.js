import { connection } from "../connections.js";

export async function listarJogos() {
    const comando = `
    select *
    from jogos
    `;
  
    let [registros] = await connection.query(comando);
    return registros;
  }

export async function inserirJogos(novoJogo) {
  const comando = `
    INSERT INTO filmess (titulo, ano_lancamento, genero, duracao_minutos, diretor, avaliacao)
               values (?, ?, ?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novoFilme.titulo, novoFilme.ano_lancamento, novoFilme.genero, novoFilme.duracao_minutos, novoFilme.diretor, novoFilme.avaliacao])
  return info.insertId;
}