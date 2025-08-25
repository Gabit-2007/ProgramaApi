import { connection } from "../connections.js";

export async function listarProdutos(){
    const comando = `
    Select * from produtos
    `
    let [registros] = await connection.query(comando);
    return registros;
}

export async function inserirProdutos(novoProduto) {
    const comando = `
    insert into produtos(nome, preco)
    values (?, ?)
    `
    let [info] = await connection.query(comando, [novoProduto.nome, novoProduto.preco])
    return info.insertId;
}