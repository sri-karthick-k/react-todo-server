const Pool = require("pg").Pool

const pool = new Pool({
    user:"postgres",
    password:"123123",
    host:"192.168.0.105",
    port:31002,
    database:"todo"
})

module.exports = pool;
