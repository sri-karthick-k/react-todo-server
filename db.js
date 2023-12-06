const Pool = require("pg").Pool

const pool = new Pool({
    user:"postgres",
    password:"123123",
    host:"postgres-service",
    port:5433,
    database:"todo"
})

module.exports = pool;
