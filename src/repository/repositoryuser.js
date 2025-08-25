import { connection } from "../connections.js";

export async function listarUsers(){
    const comando = `
    Select * from usuarios
    `
    let [registros] = await connection.query(comando);
    return registros;
}

export async function inserirUsers(novoUsers) {
    const comando = `
    insert into usuarios(nome, email)
    values (?, ?)
    `
    let [info] = await connection.query(comando, [novoUsers.nome, novoUsers.email])
    return info.insertId;
}