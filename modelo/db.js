
// import pkg from 'pg';
// const Conexion = pkg;
// const client = new Conexion ({
//     user:"test_0qq6_user",
//     host:"dpg-cgjo74seoogkndn64dm0-a",
//     database:"test_0qq6",
//     password:"SJ5uv5DHhTo9XPz48JkQWmebtPkh4ooq",
//     port:"5432",
// });

// client.connect(function(err) {
//     if (err) {
//         console.error('Error en la conexion: ' + err.stack);
//     return;
//   }
//     client.query('CREATE TABLE tecsup (Nombre VARCHAR(30) NOT NULL , Carrera VARCHAR(30) NOT NULL , Edad INT NOT NULL '
//     )
//     client.query('INSERT INTO tecsup values (Ricardo,Desarrollo de Software,19) '
//     )
//     client.query('INSERT INTO tecsup values (Chagua,Gastronomía,20) '
//     )
//     client.query('INSERT INTO tecsup values (Ricardo,Mecánica,22) '
//     )
    
//     console.log('conexion exitosa ID: ' + client.threadId);
// });

// export {client}


const { Pool } = require("pg")
// Coloca aquí tus credenciales
const pool = new Pool({
  user: "test_0qq6_user",
  host: "dpg-cgjo74seoogkndn64dm0-a",
  database: "test_0qq6",
  password: "SJ5uv5DHhTo9XPz48JkQWmebtPkh4ooq",
  port: 5432,
});
pool.query("CREATE TABLE IF NOT EXISTS tecsup (Nombre VARCHAR 20, Carrera VARCHAR 30, Edad INT NOT NULL;")
module.exports = pool;