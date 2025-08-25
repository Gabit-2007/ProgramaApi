import { connection } from "../connections.js";

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

export async function consultarAlunos(id) {
    const comando = `
      SELECT * 
        FROM alunoss
       WHERE id = ?
    `
  
    let [registros] = await connection.query(comando, [id]);
    return registros[0];
  }

  export async function filtrarPorNome1(nome) {
    const comando = `
      SELECT * 
        FROM alunoss
       WHERE nome like ?
    `
  
    let [registros] = await connection.query(comando, ['%'+nome+'%']);
    return registros;
  }

  export async function deletarAlunos(id) {
    const comando = `
      DELETE FROM alunoss
            WHERE id = ?
    `
  
    let [info] = await connection.query(comando, [id]);
  }

  export async function alterarAlunos(id, novosDados) {
    const comando = `
      UPDATE curso
         SET nome = ?,
             matricula = ?,
             curso = ?,
             email = ?
       WHERE id = ?
    `
  
    let [info] = await connection.query(comando, [
      novosDados.nome,
      novosDados.matricula,
      novosDados.curso,
      novosDados.email,
      id
    ])
  }