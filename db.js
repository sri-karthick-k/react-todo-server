const Pool = require("pg").Pool

const pool = new Pool({
    user:"postgres",
    password:"123123",
    host:"postgres",
    port:5432,
    database:"todo"
})

module.exports = pool;