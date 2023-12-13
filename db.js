const Pool = require("pg").Pool

const pool = new Pool({
    user:"postgres",
    password:"123123",
    host:"192.168.100.200",
    port:31002,
    database:"todo"
})

module.exports = pool;
