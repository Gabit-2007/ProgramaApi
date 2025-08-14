import { connection } from "./connections.js";

export async function listarLivro(){
    const comando = `
    select * from livros
    `
    let [registros] = await connection.query(comando);
    return registros;
}

export async function inserirLivro(novoLivro) {
    const comando = `
    insert into livros (titulo, autor, ano_publicacao, genero, editora, preco)
    values (?, ?, ?, ?, ?, ?)
    `

    let [info] = await connection.query(comando, [novoLivro.titulo, novoLivro.autor, novoLivro.ano_publicacao, novoLivro.genero, novoLivro.editora, novoLivro.preco]);
    return info.insertId;
}