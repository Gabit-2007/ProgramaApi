import { connection } from "./connections.js";

export async function listarAlunos(){
    const comando = `
    Select * from alunoss
    `
    let [registros] = await connection.query(comando);
    return registros;
}

export async function inserirAlunos(novoAluno) {
    const comando = `
    insert into alunoss(nome, matricula, curso, email)
    values (?, ?, ?, ?)
    `
    let [info] = await connection.query(comando, [novoAluno.nome, novoAluno.matricula, novoAluno.curso, novoAluno.email])
    return info.insertId;
}