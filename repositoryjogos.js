import { connection } from "./connections.js";

export async function listarJogos() {
    const comando = `
    select *
    from jogos
    `;
  
    let [registros] = await connection.query(comando);
    return registros;
  }