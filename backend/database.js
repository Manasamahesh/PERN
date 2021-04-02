const pool = require ("pg").pool;
const pool = new pool({
	user:"postgres",
	password:"WE1",
	host:"localhost",
	port: 5432,
	database:"pernStack" });
module.exports = pool;
