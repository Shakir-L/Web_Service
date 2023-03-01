import Pool from "pg"

export const pool = new Pool.Pool({
    user:"shakir",
    host:"localhost",
    database:"baseshakir",
    password:"shakir00",
    port:"5432"
});
