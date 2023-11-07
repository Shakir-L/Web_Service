import Pool from "pg"

export const pool = new Pool.Pool({
    user:"user",
    host:"localhost",
    database:"database",
    password:"pass",
    port:"1234"
});
